import type { Evidence, LearningEvent } from "../domain/types.js";

export function deriveEvidence(events: LearningEvent[]): Evidence[] {
  return events.flatMap((event): Evidence[] => {
    if (event.type !== "answer_submitted" || !event.outcome) return [];
    return [{
      eventId: event.id,
      goalId: event.goalId,
      ...(event.questionId ? { questionId: event.questionId } : {}),
      ...(event.questionFamily ? { questionFamily: event.questionFamily } : {}),
      sessionId: event.sessionId,
      occurredAt: event.occurredAt,
      outcome: event.outcome === "correct" ? "success" : "incorrect",
      support: event.support ?? "independent",
      ...(event.representation ? { representation: event.representation } : {}),
      validity: event.validity ?? "valid",
      source: event.source ?? "digital",
    }];
  });
}
