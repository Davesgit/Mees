import type{NextAction}from"../domain/types.js";
export interface SessionBudget{maxMeaningfulBlocks:number;maxAttemptsOnSameBottleneck:number}
export const DEFAULT_SESSION_BUDGET:SessionBudget={maxMeaningfulBlocks:5,maxAttemptsOnSameBottleneck:3};
export interface SessionUsage{meaningfulBlocks:number;attemptsOnSameBottleneck:number}
export function applySessionBudget(action:NextAction,usage:SessionUsage,budget:SessionBudget=DEFAULT_SESSION_BUDGET):NextAction{
 if(usage.meaningfulBlocks>=budget.maxMeaningfulBlocks)return{type:"end_session",goalId:action.goalId,reasonCodes:["session_budget_reached"],adaptiveEngineVersion:1};
 if(usage.attemptsOnSameBottleneck>=budget.maxAttemptsOnSameBottleneck&&["continue_practice","gather_more_evidence"].includes(action.type))return{type:"end_session",goalId:action.goalId,reasonCodes:["bottleneck_repetition_limit"],adaptiveEngineVersion:1};
 return action;
}
