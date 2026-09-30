export interface SelectableQuestion{id:string;goal:string;type:string;family:string;status:string}
export interface QuestionSelectionContext{goalId:string;desiredRepresentation?:string;avoidQuestionIds?:string[];avoidFamilies?:string[];preferVariation?:boolean}
export interface QuestionSelection{question:SelectableQuestion|null;reasonCodes:string[]}
export function selectQuestion(questions:SelectableQuestion[],c:QuestionSelectionContext):QuestionSelection{
 let pool=questions.filter(q=>q.goal===c.goalId&&q.status==="test");
 if(c.avoidQuestionIds?.length){const fresh=pool.filter(q=>!c.avoidQuestionIds!.includes(q.id));if(fresh.length)pool=fresh}
 if(c.desiredRepresentation){const typed=pool.filter(q=>q.type===c.desiredRepresentation);if(typed.length)pool=typed}
 if(c.preferVariation&&c.avoidFamilies?.length){const varied=pool.filter(q=>!c.avoidFamilies!.includes(q.family));if(varied.length)pool=varied}
 const q=[...pool].sort((a,b)=>a.id.localeCompare(b.id))[0]??null;
 if(!q)return{question:null,reasonCodes:["no_eligible_question"]};
 const reasons=["goal_match"];if(c.desiredRepresentation&&q.type===c.desiredRepresentation)reasons.push("representation_match");if(c.preferVariation&&!(c.avoidFamilies??[]).includes(q.family))reasons.push("variation_preferred");if(!(c.avoidQuestionIds??[]).includes(q.id))reasons.push("not_recently_used");
 return{question:q,reasonCodes:reasons}
}
