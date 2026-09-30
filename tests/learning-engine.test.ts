import { describe, expect, it } from "vitest";
import type { LearningEvent, LearnerState } from "../src/domain/types.js";
import { deriveEvidence } from "../src/learning-engine/evidence.js";
import { evaluateMastery } from "../src/learning-engine/mastery.js";
import { chooseNextAction } from "../src/learning-engine/adaptive.js";

const ev=(id:string,outcome:"correct"|"incorrect",opts:Partial<LearningEvent>={}):LearningEvent=>({
 id,goalId:"LG-TEST-007",questionId:"Q-"+id,questionFamily:"family-a",sessionId:"S-1",
 occurredAt:"2026-01-01T10:00:00Z",type:"answer_submitted",outcome,support:"independent",...opts
});

describe("Mees learning engine invariants",()=>{
 it("does not call one success mastered",()=>{
  const s=evaluateMastery("LG-TEST-007",deriveEvidence([ev("1","correct")]));
  expect(s.state).not.toBe("likely_mastered");
 });
 it("does not punish supported success",()=>{
  const s=evaluateMastery("LG-TEST-007",deriveEvidence([ev("1","incorrect"),ev("2","correct",{support:"light_support"})]));
  expect(s.state).toBe("emerging"); expect(s.informationNeeds).toContain("need_independent_evidence");
 });
 it("can reach likely mastered with varied time-spread independent evidence",()=>{
  const s=evaluateMastery("LG-TEST-007",deriveEvidence([
   ev("1","correct",{questionFamily:"family-a",sessionId:"S-1"}),
   ev("2","correct",{questionFamily:"family-b",sessionId:"S-1"}),
   ev("3","correct",{questionFamily:"family-a",sessionId:"S-2",occurredAt:"2026-01-03T10:00:00Z"})
  ]));
  expect(s.state).toBe("likely_mastered"); expect(s.confidence).toBe("high");
 });
 it("ignores technically invalid answers as negative evidence",()=>{
  const s=evaluateMastery("LG-TEST-007",deriveEvidence([ev("1","incorrect",{validity:"invalid"})]));
  expect(s.state).toBe("unknown"); expect(s.limitingFactors).toContain("technical_invalidity");
 });
 it("requests reassessment when prior mastery conflicts with new evidence",()=>{
  const previous:LearnerState={goalId:"LG-TEST-007",state:"likely_mastered",confidence:"high",supportingEvidence:["old"],limitingFactors:[],uncertaintyReasons:[],informationNeeds:[],masteryModelVersion:1};
  const s=evaluateMastery("LG-TEST-007",deriveEvidence([ev("1","incorrect"),ev("2","incorrect")]),undefined,previous);
  expect(s.state).toBe("needs_reassessment"); expect(chooseNextAction(s).type).toBe("reassess");
 });
 it("only proposes tutor help when all tutor conditions are present",()=>{
  const s:LearnerState={goalId:"LG-TEST-007",state:"developing",confidence:"medium",supportingEvidence:[],limitingFactors:["repeated_incorrect"],uncertaintyReasons:["cause_unknown"],informationNeeds:["more_evidence"],masteryModelVersion:1};
  expect(chooseNextAction(s,{persistentUncertainty:true}).type).not.toBe("propose_tutor_help");
  expect(chooseNextAction(s,{persistentUncertainty:true,relevantInterventionsTried:true,prerequisiteCheckedWhenRelevant:true,humanHelpExpectedToAddValue:true}).type).toBe("propose_tutor_help");
 });
 it("does not treat stop events as mastery evidence",()=>{
  const stop:LearningEvent={id:"STOP-1",goalId:"LG-TEST-007",sessionId:"S-1",occurredAt:"2026-01-01T10:00:00Z",type:"attempt_stopped"};
  expect(deriveEvidence([stop])).toEqual([]);
 });
});


describe("goal graph and richer evidence",()=>{
 it("selects an unknown required prerequisite",async()=>{
  const {choosePrerequisiteToCheck}=await import("../src/learning-engine/goal-graph.js");
  const rel=[{from:"LG-TEST-006",to:"LG-TEST-007",type:"required_prerequisite" as const}];
  const prereq:LearnerState={goalId:"LG-TEST-006",state:"unknown",confidence:"low",supportingEvidence:[],limitingFactors:["insufficient_evidence"],uncertaintyReasons:["too_few_observations"],informationNeeds:["more_evidence"],masteryModelVersion:1};
  const target=choosePrerequisiteToCheck("LG-TEST-007",rel,{"LG-TEST-006":prereq});
  expect(target).toBe("LG-TEST-006");
  expect(chooseNextAction(prereq,{prerequisiteTargetId:target}).type).toBe("check_prerequisite");
 });
 it("retains tutor observation provenance",()=>{
  const tutor:LearningEvent={id:"T-1",goalId:"LG-TEST-007",sessionId:"TUTOR-1",occurredAt:"2026-01-02T10:00:00Z",type:"tutor_observation",source:"tutor",tutorUnderstanding:"partial"};
  const evidence=deriveEvidence([tutor]);
  expect(evidence).toHaveLength(1);
  expect(evidence[0]?.source).toBe("tutor");
  expect(evidence[0]?.observationKind).toBe("tutor_observation");
 });
});
