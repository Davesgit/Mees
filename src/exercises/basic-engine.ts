export type BasicQuestion={id:string;version:number;goal:string;type:"numeric_input";prompt:string;answer:number;hints:string[];explanation:string;family:string};
export type BasicUIState="presenting"|"answering"|"incorrect_can_retry"|"showing_hint"|"showing_explanation"|"completed";
export interface BasicAttempt{question:BasicQuestion;uiState:BasicUIState;response?:number;hintIndex:number;submissions:number}
export function startBasic(question:BasicQuestion):BasicAttempt{return{question,uiState:"answering",hintIndex:-1,submissions:0}}
export function submitBasic(a:BasicAttempt,raw:string):BasicAttempt{const trimmed=raw.trim();if(!trimmed)return a;const n=Number(trimmed);if(!Number.isFinite(n))return a;const correct=n===a.question.answer;return{...a,response:n,submissions:a.submissions+1,uiState:correct?"completed":"incorrect_can_retry"}}
export function requestBasicHint(a:BasicAttempt):BasicAttempt{const next=Math.min(a.hintIndex+1,a.question.hints.length-1);return{...a,hintIndex:next,uiState:"showing_hint"}}
export function showBasicExplanation(a:BasicAttempt):BasicAttempt{return{...a,uiState:"showing_explanation"}}
