import { deriveEvidence } from "../learning-engine/evidence.js";
import { evaluateMastery } from "../learning-engine/mastery.js";
import { chooseNextAction } from "../learning-engine/adaptive.js";
import type { LearningEvent } from "../domain/types.js";

const events:LearningEvent[]=[
{id:"EVT-1",goalId:"LG-TEST-007",questionId:"Q-T015",questionFamily:"add_to_100_cross",sessionId:"S-1",occurredAt:"2026-01-01T10:00:00Z",type:"answer_submitted",outcome:"correct",support:"independent",representation:"symbolic"},
{id:"EVT-2",goalId:"LG-TEST-007",questionId:"Q-T017",questionFamily:"add_to_100_cross_numberline",sessionId:"S-1",occurredAt:"2026-01-01T10:05:00Z",type:"answer_submitted",outcome:"correct",support:"independent",representation:"number_line"},
{id:"EVT-3",goalId:"LG-TEST-007",questionId:"Q-T016",questionFamily:"add_to_100_cross",sessionId:"S-2",occurredAt:"2026-01-03T10:00:00Z",type:"answer_submitted",outcome:"correct",support:"independent",representation:"symbolic"}
];
const evidence=deriveEvidence(events);
const state=evaluateMastery("LG-TEST-007",evidence);
const action=chooseNextAction(state);
console.log(JSON.stringify({events,evidence,state,action},null,2));
