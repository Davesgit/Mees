import type { LearnerState, NextAction } from "../domain/types.js";
export interface AdaptiveContext { prerequisiteUnknown?:boolean; persistentUncertainty?:boolean; relevantInterventionsTried?:boolean; prerequisiteCheckedWhenRelevant?:boolean; humanHelpExpectedToAddValue?:boolean; }

export function chooseNextAction(state:LearnerState, context:AdaptiveContext={}):NextAction {
  const make=(type:NextAction["type"],...reasonCodes:string[]):NextAction=>({type,goalId:state.goalId,reasonCodes,adaptiveEngineVersion:1});
  if(state.limitingFactors.includes("technical_invalidity")) return make("gather_more_evidence","technical_invalidity");
  if(context.persistentUncertainty && context.relevantInterventionsTried && context.prerequisiteCheckedWhenRelevant && context.humanHelpExpectedToAddValue) return make("propose_tutor_help","persistent_uncertainty","intervention_exhausted");
  if(context.prerequisiteUnknown && state.state!=="likely_mastered") return make("gather_more_evidence","prerequisite_unknown");
  if(state.state==="needs_reassessment" || state.informationNeeds.includes("need_conflict_resolution")) return make("reassess","conflicting_evidence");
  if(state.informationNeeds.includes("need_independent_evidence")) return make("gather_more_evidence","need_independent_evidence");
  if(state.informationNeeds.includes("need_more_variation")) return make("vary_question","insufficient_variation");
  if(state.informationNeeds.includes("need_later_reassessment")) return make("reassess","insufficient_time_spread");
  if(state.state==="likely_mastered") return make("advance_to_next_goal","likely_mastered");
  if(state.state==="unknown") return make("gather_more_evidence","insufficient_evidence");
  return make("continue_practice","developing_or_emerging");
}
