/**
 * Empty: no commit on that day
 * Light: 1-2 commits
 * Medium: 3-5
 * High: 6-10
 * Extreme: 11 or above
 */
export type SingleCell = {
  dayNumber: number;
  // intensity: "empty" | "light" | "medium" | "high" | "extreme";
  commitCount: number;
};

export interface HistoryYear {
  days: SingleCell[];
  year: number; //year number
}
