export type ButtonVariant = "primary" | "secondary" | "quiet";

export function buttonClass(variant: ButtonVariant = "primary"): string {
  return `mees-button mees-button--${variant}`;
}

export function cardClass(featured = false): string {
  return featured ? "mees-card mees-card--featured" : "mees-card";
}

export type FeedbackTone = "hint" | "explanation" | "neutral";

export function feedbackPanelClass(tone: FeedbackTone): string {
  return `mees-feedback mees-feedback--${tone}`;
}

export interface SessionProgress {
  current: number;
  total: number;
}

export function progressLabel({ current, total }: SessionProgress): string {
  return `Vraag ${current} van ${total}`;
}
