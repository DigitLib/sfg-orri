import type { Question, Section, Level } from "@/content/checklist";

export type SkipCategory = "ai" | "privacy" | "vendor";

export interface SkipFlags {
  noAI: boolean;
  noPrivacy: boolean;
  noVendor: boolean;
}

export function getSkipFlags(answers: Record<string, string>): SkipFlags {
  // 0D1 = "ordinary" or "no" -> AI is not used
  // 0B6, 0B7, 0E2 = personal/sensitive data -> if all 'no', no privacy module needed
  // 0D4, 1I1 = vendor involvement -> if 'no', no vendor module needed
  const noAI = answers["0D1"] === "ordinary" || answers["0D1"] === "no" || answers["1H1"] === "no";
  const noPrivacy =
    answers["0B6"] === "no" &&
    answers["0B7"] === "no" &&
    answers["0E2"] === "no";
  const noVendor = answers["0D4"] === "no" || answers["1I1"] === "no";

  return { noAI, noPrivacy, noVendor };
}

export function isLevelVisible(qLevel: Level, uLevel: Level): boolean {
  if (uLevel === "expert") return true;
  if (uLevel === "intermediate") return qLevel === "beginner" || qLevel === "intermediate";
  return qLevel === "beginner";
}

export function isQuestionActive(
  q: Question,
  uLevel: Level,
  flags: SkipFlags,
): boolean {
  if (!isLevelVisible(q.level, uLevel)) return false;

  if (q.skipCategory === "ai" && flags.noAI) return false;
  if (q.skipCategory === "privacy" && flags.noPrivacy) return false;
  if (q.skipCategory === "vendor" && flags.noVendor) return false;

  return true;
}
