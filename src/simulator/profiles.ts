import profilesData from "../../test-data/SIMULATION-PROFILES.json" with { type: "json" };
import questionsData from "../../test-data/QUESTIONS-MVP.json" with { type: "json" };
import goalsData from "../../test-data/LEARNING-GOALS-MVP.json" with { type: "json" };
import type { LearningEvent, LearnerState, LearningGoalRelation } from "../domain/types.js";
import { deriveEvidence } from "../learning-engine/evidence.js";
import { evaluateMastery } from "../learning-engine/mastery.js";
import { chooseNextAction, type AdaptiveContext } from "../learning-engine/adaptive.js";
import { choosePrerequisiteToCheck } from "../learning-engine/goal-graph.js";

const questions=new Map(questionsData.questions.map(q=>[q.id,q]));
const relations=goalsData.relations as LearningGoalRelation[];

function prior(goalId:string,profile:any):LearnerState|undefined {
 if(profile.precondition?.prior_state!=="likely_mastered") return undefined;
 return {goalId,state:"likely_mastered",confidence:"high",supportingEvidence:["prior"],limitingFactors:[],uncertaintyReasons:[],informationNeeds:[],masteryModelVersion:1};
}

export function runProfile(profile:any){
 const events:LearningEvent[]=[]; let support:"independent"|"light_support"|"strong_support"="independent";
 let repeatedIncorrect=0; let session="S-1";
 for(const [i,step] of profile.sequence.entries()){
  if(step.session!==undefined) session="S-"+String(step.session);
  if(step.action==="hint"){support=step.level==="strong"?"strong_support":"light_support";continue;}
  if(step.action==="explanation"){support="strong_support";continue;}
  if(step.action==="stop"){events.push({id:profile.id+"-STOP",goalId:profile.target_goal,sessionId:session,occurredAt:"2026-01-20T10:00:00Z",type:"attempt_stopped"});continue;}
  if(step.action==="tutor_observation"){events.push({id:profile.id+"-TUTOR",goalId:profile.target_goal,sessionId:session,occurredAt:"2026-01-19T10:00:00Z",type:"tutor_observation",source:"tutor",tutorUnderstanding:step.understanding==="partial"?"partial":"uncertain"});continue;}
  if(typeof step.question==="string"){
   const q:any=questions.get(step.question); const invalid=step.outcome==="invalid";
   repeatedIncorrect=step.outcome==="incorrect"?repeatedIncorrect+1:0;
   events.push({id:profile.id+"-E"+i,goalId:profile.target_goal,questionId:step.question,...(q?.family?{questionFamily:q.family}:{}),sessionId:session,occurredAt:"2026-01-"+String(Math.min(18,i+1)).padStart(2,"0")+"T10:00:00Z",type:"answer_submitted",outcome:invalid?"incorrect":step.outcome,support:step.support??support,validity:invalid?"invalid":"valid",representation:q?.type==="number_line"?"number_line":"symbolic"});
   support="independent";
  }
 }
 const evidence=deriveEvidence(events);
 const state=evaluateMastery(profile.target_goal,evidence,undefined,prior(profile.target_goal,profile));
 const states:Record<string,LearnerState|undefined>={};
 if(profile.precondition?.state_LG_TEST_006==="unknown") states["LG-TEST-006"]={goalId:"LG-TEST-006",state:"unknown",confidence:"low",supportingEvidence:[],limitingFactors:["insufficient_evidence"],uncertaintyReasons:["too_few_observations"],informationNeeds:["more_evidence"],masteryModelVersion:1};
 const prerequisiteTarget=choosePrerequisiteToCheck(profile.target_goal,relations,states);
 const tutor=profile.id==="SIM-J";
 const context:AdaptiveContext={...(prerequisiteTarget?{prerequisiteTargetId:prerequisiteTarget}:{}),repeatedIncorrectSameRepresentation:repeatedIncorrect>=2,representationChangeAvailable:true,persistentUncertainty:tutor,relevantInterventionsTried:tutor,prerequisiteCheckedWhenRelevant:tutor,humanHelpExpectedToAddValue:tutor};
 return {id:profile.id,title:profile.title,events,evidence,state,action:chooseNextAction(state,context)};
}
export const results=profilesData.profiles.map(runProfile);
console.log(JSON.stringify(results,null,2));
