export type NumberLineMode="locate"|"read"|"jump";
export interface NumberLineQuestion{id:string;version:number;goal:string;type:"number_line";prompt:string;answer:number;params:{mode?:NumberLineMode;min:number;max:number;start?:number;target?:number;delta?:number;major_step?:number;minor_step?:number};hints:string[];explanation:string;family:string}
export type NumberLineUIState="answering"|"incorrect_can_retry"|"showing_hint"|"showing_explanation"|"completed";
export interface SemanticJump{from:number;delta:number;to:number}
export interface NumberLineAttempt{question:NumberLineQuestion;uiState:NumberLineUIState;selectedValue?:number;jumps:SemanticJump[];hintIndex:number;submissions:number}
export function validateNumberLineQuestion(q:NumberLineQuestion){const p=q.params;if(!Number.isFinite(p.min)||!Number.isFinite(p.max)||p.max<=p.min)return false;if(p.start!==undefined&&(p.start<p.min||p.start>p.max))return false;if(p.target!==undefined&&(p.target<p.min||p.target>p.max))return false;return true}
export function startNumberLine(q:NumberLineQuestion):NumberLineAttempt{if(!validateNumberLineQuestion(q))throw new Error("invalid_number_line_parameters");return{question:q,uiState:"answering",jumps:[],hintIndex:-1,submissions:0}}
export function snapValue(raw:number,q:NumberLineQuestion){const step=q.params.minor_step??1;const snapped=Math.round((raw-q.params.min)/step)*step+q.params.min;return Math.max(q.params.min,Math.min(q.params.max,Number(snapped.toFixed(10))))}
export function selectNumberLineValue(a:NumberLineAttempt,raw:number):NumberLineAttempt{return{...a,selectedValue:snapValue(raw,a.question),uiState:"answering"}}
export function addSemanticJump(a:NumberLineAttempt,delta:number):NumberLineAttempt{const start=a.jumps.at(-1)?.to??a.question.params.start;if(start===undefined)return a;const to=snapValue(start+delta,a.question);return{...a,jumps:[...a.jumps,{from:start,delta:to-start,to}],selectedValue:to}}
export function removeLastJump(a:NumberLineAttempt):NumberLineAttempt{const jumps=a.jumps.slice(0,-1);return{...a,jumps,selectedValue:jumps.at(-1)?.to??a.question.params.start}}
export function submitNumberLine(a:NumberLineAttempt):NumberLineAttempt{if(a.selectedValue===undefined)return a;return{...a,submissions:a.submissions+1,uiState:a.selectedValue===a.question.answer?"completed":"incorrect_can_retry"}}
export function requestNumberLineHint(a:NumberLineAttempt):NumberLineAttempt{return{...a,hintIndex:Math.min(a.hintIndex+1,a.question.hints.length-1),uiState:"showing_hint"}}
