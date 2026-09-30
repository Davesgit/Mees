import type { LearnerState, LearningGoalRelation } from "../domain/types.js";

export function requiredPrerequisites(goalId:string, relations:LearningGoalRelation[]):string[] {
  return relations.filter(r=>r.to===goalId && r.type==="required_prerequisite").map(r=>r.from);
}

export function choosePrerequisiteToCheck(
  goalId:string,
  relations:LearningGoalRelation[],
  states:Record<string,LearnerState|undefined>
):string|undefined {
  return requiredPrerequisites(goalId,relations).find(id=>{
    const state=states[id];
    return !state || state.state==="unknown" || state.state==="needs_reassessment" || state.confidence==="low";
  });
}
