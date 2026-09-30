export type LearnerStateName = "unknown" | "emerging" | "developing" | "likely_mastered" | "needs_reassessment";
export type Confidence = "low" | "medium" | "high";
export type SupportLevel = "independent" | "light_support" | "strong_support";
export type EvidenceOutcome = "success" | "incorrect";
export type EvidenceValidity = "valid" | "invalid";

export interface LearningEvent {
  id: string; goalId: string; questionId?: string; questionFamily?: string;
  sessionId: string; occurredAt: string;
  type: "answer_submitted" | "hint_requested" | "technical_invalidity" | "tutor_observation" | "attempt_stopped";
  outcome?: "correct" | "incorrect"; support?: SupportLevel; representation?: string;
  validity?: EvidenceValidity; source?: "digital" | "tutor" | "worksheet_parent_confirmed";
}
export interface Evidence {
  eventId: string; goalId: string; questionId?: string; questionFamily?: string;
  sessionId: string; occurredAt: string; outcome: EvidenceOutcome; support: SupportLevel;
  representation?: string; validity: EvidenceValidity;
  source: "digital" | "tutor" | "worksheet_parent_confirmed";
}
export type InformationNeed = "more_evidence" | "need_independent_evidence" | "need_more_variation" | "need_later_reassessment" | "need_conflict_resolution" | "need_valid_observation";
export interface LearnerState {
  goalId: string; state: LearnerStateName; confidence: Confidence;
  supportingEvidence: string[]; limitingFactors: string[]; uncertaintyReasons: string[];
  informationNeeds: InformationNeed[]; lastMeaningfulEvidenceAt?: string; masteryModelVersion: 1;
}
export type NextActionType = "gather_more_evidence" | "continue_practice" | "vary_question" | "change_representation" | "reassess" | "advance_to_next_goal" | "propose_tutor_help" | "end_session";
export interface NextAction { type: NextActionType; goalId: string; reasonCodes: string[]; adaptiveEngineVersion: 1; }
export interface MasteryConfig {
  minIndependentForDeveloping: number; minIndependentForLikelyMastered: number;
  minFamiliesForLikelyMastered: number; minSessionsForLikelyMastered: number;
}
export const DEFAULT_MASTERY_CONFIG: MasteryConfig = {
  // Synthetic calibration values only. Not production education truth.
  minIndependentForDeveloping: 2,
  minIndependentForLikelyMastered: 3,
  minFamiliesForLikelyMastered: 2,
  minSessionsForLikelyMastered: 2,
};
