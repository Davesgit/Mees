import type{LearningEvent,LearnerState,LearningGoalRelation,NextAction}from"../domain/types.js";
import type{InterventionRecord}from"./interventions.js";
import{decide}from"./orchestrator.js";import{applySessionBudget,type SessionBudget,type SessionUsage}from"./session-budget.js";import{selectQuestion,type SelectableQuestion}from"./question-selector.js";
export interface SessionEngineInput{goalId:string;events:LearningEvent[];interventions:InterventionRecord[];relations:LearningGoalRelation[];questions:SelectableQuestion[];usage:SessionUsage;budget?:SessionBudget;knownStates?:Record<string,LearnerState|undefined>;previousState?:LearnerState;humanHelpExpectedToAddValue?:boolean}
export interface SessionPlan{state:LearnerState;action:NextAction;question:SelectableQuestion|null;decisionReasons:string[];questionReasons:string[];evidenceCount:number}
function desiredRepresentation(action:NextAction,events:LearningEvent[]){if(action.type!=="change_representation")return undefined;const last=[...events].reverse().find(e=>e.type==="answer_submitted");return last?.representation==="number_line"?"numeric_input":"number_line"}
export function planNextStep(input:SessionEngineInput):SessionPlan{
 const base=decide(input);const action=applySessionBudget(base.action,input.usage,input.budget);
 if(action.type==="end_session"||action.type==="propose_tutor_help"||action.type==="advance_to_next_goal")return{state:base.state,action,question:null,decisionReasons:action.reasonCodes,questionReasons:[],evidenceCount:base.evidenceCount};
 const target=action.type==="check_prerequisite"?(action.targetGoalId??input.goalId):input.goalId;
 const used=input.events.map(e=>e.questionId).filter((x):x is string=>Boolean(x));
 const families=input.events.map(e=>e.questionFamily).filter((x):x is string=>Boolean(x));
 const selection=selectQuestion(input.questions,{goalId:target,avoidQuestionIds:used,avoidFamilies:families,preferVariation:action.type==="vary_question",...(desiredRepresentation(action,input.events)?{desiredRepresentation:desiredRepresentation(action,input.events)}:{})});
 return{state:base.state,action,question:selection.question,decisionReasons:action.reasonCodes,questionReasons:selection.reasonCodes,evidenceCount:base.evidenceCount};
}
