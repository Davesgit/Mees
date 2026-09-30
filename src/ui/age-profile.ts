export type MeesAgeBand = "junior" | "middle" | "senior";

export interface MeesAgeProfile {
  band: MeesAgeBand;
  groups: string;
  mascotScale: "large" | "medium" | "small";
  illustrationDensity: "rich" | "balanced" | "restrained";
  contentDensity: "low" | "medium" | "higher";
  taskBackdrop: "plain" | "plain";
}

export const MEES_AGE_PROFILES: Record<MeesAgeBand, MeesAgeProfile> = {
  junior: {
    band: "junior",
    groups: "3–4",
    mascotScale: "large",
    illustrationDensity: "rich",
    contentDensity: "low",
    taskBackdrop: "plain",
  },
  middle: {
    band: "middle",
    groups: "5–6",
    mascotScale: "medium",
    illustrationDensity: "balanced",
    contentDensity: "medium",
    taskBackdrop: "plain",
  },
  senior: {
    band: "senior",
    groups: "7–8",
    mascotScale: "small",
    illustrationDensity: "restrained",
    contentDensity: "higher",
    taskBackdrop: "plain",
  },
};

export function ageBandForGroup(group: number): MeesAgeBand {
  if (group <= 4) return "junior";
  if (group <= 6) return "middle";
  return "senior";
}

export function ageBandClass(band: MeesAgeBand): string {
  return `mees-age mees-age--${band}`;
}
