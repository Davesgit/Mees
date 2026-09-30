import profilesData from "../../test-data/SIMULATION-PROFILES.json" with {type:"json"};
import questionsData from "../../test-data/QUESTIONS-MVP.json" with {type:"json"};
import goalsData from "../../test-data/LEARNING-GOALS-MVP.json" with {type:"json"};
import type{LearningEvent,LearnerState,LearningGoalRelation}from"../domain/types.js";
import type{InterventionRecord}from"../learning-engine/interventions.js";
import{decide}from"../learning-engine/orchestrator.js";
const questions=new Map(questionsData.questions.map(q=>[q.id,q]));const relations=goalsData.relations as LearningGoalRelation[];
function prior(p:any):LearnerState|undefined{return p.precondition?.prior_state==="likely_mastered"?{goalId:p.target_goal,state:"likely_mastered",confidence:"high",supportingEvidence:["prior"],limitingFactors:[],uncertaintyReasons:[],informationNeeds:[],masteryModelVersion:1}:undefined}
export function runJourney(p:any){const events:LearningEvent[]=[];const interventions:InterventionRecord[]=[];const decisions:any[]=[];let support:"independent"|"light_support"|"strong_support"="independent";let session="S-1";const known:Record<string,LearnerState|undefined>={};if(p.precondition?.state_LG_TEST_006==="unknown")known["LG-TEST-006"]={goalId:"LG-TEST-006",state:"unknown",confidence:"low",supportingEvidence:[],limitingFactors:["insufficient_evidence"],uncertaintyReasons:["too_few_observations"],informationNeeds:["more_evidence"],masteryModelVersion:1};
const snap=(step:string)=>decisions.push({step,...decide({goalId:p.target_goal,events,interventions,relations,knownStates:known,previousState:prior(p),humanHelpExpectedToAddValue:p.precondition?.persistent_uncertainty===true})});
for(const[i,s]of p.sequence.entries()){if(s.session!==undefined)session="S-"+String(s.session);const at="2026-02-"+String(Math.min(28,i+1)).padStart(2,"0")+"T10:00:00Z";
if(s.action==="hint"){const strong=s.level==="strong";support=strong?"strong_support":"light_support";interventions.push({id:p.id+"-I"+i,goalId:p.target_goal,sessionId:session,occurredAt:at,type:strong?"strong_hint":"light_hint"});snap("hint");continue}
if(s.action==="explanation"){support="strong_support";interventions.push({id:p.id+"-I"+i,goalId:p.target_goal,sessionId:session,occurredAt:at,type:"explanation"});snap("explanation");continue}
if(s.action==="change_representation"){interventions.push({id:p.id+"-I"+i,goalId:p.target_goal,sessionId:session,occurredAt:at,type:"representation_change",representation:s.to});snap("representation_change");continue}
if(s.action==="propose_tutor_help"){interventions.push({id:p.id+"-I"+i,goalId:p.target_goal,sessionId:session,occurredAt:at,type:"tutor_proposed"});snap("tutor_proposed");continue}
if(s.action==="parent_approve"){interventions.push({id:p.id+"-I"+i,goalId:p.target_goal,sessionId:session,occurredAt:at,type:"tutor_approved"});snap("parent_approve");continue}
if(s.action==="parent_decline"){interventions.push({id:p.id+"-I"+i,goalId:p.target_goal,sessionId:session,occurredAt:at,type:"tutor_declined"});snap("parent_decline");continue}
if(s.action==="tutor_observation"){interventions.push({id:p.id+"-I"+i,goalId:p.target_goal,sessionId:session,occurredAt:at,type:"tutor_observation"});events.push({id:p.id+"-T"+i,goalId:p.target_goal,sessionId:session,occurredAt:at,type:"tutor_observation",source:"tutor",tutorUnderstanding:s.understanding});snap("tutor_observation");continue}
if(s.action==="stop"){interventions.push({id:p.id+"-I"+i,goalId:p.target_goal,sessionId:session,occurredAt:at,type:"session_stopped"});events.push({id:p.id+"-STOP",goalId:p.target_goal,sessionId:session,occurredAt:at,type:"attempt_stopped"});snap("stop");continue}
if(typeof s.question==="string"){const q:any=questions.get(s.question);const invalid=s.outcome==="invalid";events.push({id:p.id+"-E"+i,goalId:p.target_goal,questionId:s.question,...(q?.family?{questionFamily:q.family}:{}),sessionId:session,occurredAt:at,type:"answer_submitted",outcome:invalid?"incorrect":s.outcome,support:s.support??support,validity:invalid?"invalid":"valid",representation:q?.type==="number_line"?"number_line":"symbolic"});support="independent";snap("answer:"+s.question)}}return{id:p.id,title:p.title,decisions,final:decisions.at(-1)}}
export const journeys=profilesData.profiles.map(runJourney);
if(import.meta.url===new URL(process.argv[1]??"", "file:").href)console.log(JSON.stringify(journeys,null,2));
