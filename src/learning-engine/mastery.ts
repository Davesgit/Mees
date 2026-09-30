import { DEFAULT_MASTERY_CONFIG, type Evidence, type LearnerState, type MasteryConfig } from "../domain/types.js";

export function evaluateMastery(goalId: string, evidence: Evidence[], config: MasteryConfig = DEFAULT_MASTERY_CONFIG, previousState?: LearnerState): LearnerState {
  const allForGoal = evidence.filter(e => e.goalId === goalId);
  const relevant = allForGoal.filter(e => e.validity === "valid");
  const invalidOnly = allForGoal.length > 0 && relevant.length === 0;
  if (relevant.length === 0) return {
    goalId, state:"unknown", confidence:"low", supportingEvidence:[],
    limitingFactors:[invalidOnly ? "technical_invalidity" : "insufficient_evidence"],
    uncertaintyReasons:[invalidOnly ? "no_valid_observation" : "too_few_observations"],
    informationNeeds:["need_valid_observation"], masteryModelVersion:1
  };

  const successes=relevant.filter(e=>e.outcome==="success");
  const incorrect=relevant.filter(e=>e.outcome==="incorrect");
  const independent=successes.filter(e=>e.support==="independent");
  const families=new Set(independent.map(e=>e.questionFamily).filter(Boolean));
  const sessions=new Set(independent.map(e=>e.sessionId));
  const supported=successes.some(e=>e.support!=="independent");
  const latest=[...relevant].sort((a,b)=>a.occurredAt.localeCompare(b.occurredAt)).at(-1)?.occurredAt;
  const base={goalId,supportingEvidence:successes.map(e=>e.eventId),...(latest?{lastMeaningfulEvidenceAt:latest}:{}),masteryModelVersion:1 as const};

  if(previousState?.state==="likely_mastered" && incorrect.length>=2) return {
    ...base,state:"needs_reassessment",confidence:"medium",
    limitingFactors:["conflicting_recent_evidence"],uncertaintyReasons:["prior_mastery_conflicts_with_new_evidence"],
    informationNeeds:["need_conflict_resolution"]
  };

  const mastered=independent.length>=config.minIndependentForLikelyMastered && families.size>=config.minFamiliesForLikelyMastered && sessions.size>=config.minSessionsForLikelyMastered && incorrect.length<=independent.length;
  if(mastered) return {...base,state:"likely_mastered",confidence:"high",limitingFactors:[],uncertaintyReasons:[],informationNeeds:[]};

  if(independent.length>=config.minIndependentForDeveloping || successes.length>=2){
    const limiting:string[]=[]; const needs:LearnerState["informationNeeds"]=[];
    if(independent.length<config.minIndependentForLikelyMastered){limiting.push("insufficient_independent_evidence");needs.push("need_independent_evidence");}
    if(families.size<config.minFamiliesForLikelyMastered){limiting.push("insufficient_variation");needs.push("need_more_variation");}
    if(sessions.size<config.minSessionsForLikelyMastered){limiting.push("insufficient_time_spread");needs.push("need_later_reassessment");}
    return {...base,state:"developing",confidence:relevant.length>=3?"medium":"low",limitingFactors:limiting,uncertaintyReasons:incorrect.length?["mixed_outcomes"]:[],informationNeeds:[...new Set(needs)]};
  }

  return {...base,state:"emerging",confidence:"low",limitingFactors:[supported?"success_requires_support":"insufficient_evidence"],uncertaintyReasons:incorrect.length?["mixed_outcomes"]:["too_few_observations"],informationNeeds:[supported?"need_independent_evidence":"more_evidence"]};
}
