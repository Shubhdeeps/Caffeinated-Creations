import { SingleCell } from "../models/HistoryYear.model";

export default function ContributionCell({
  dayNumber,
  commitCount,
}: SingleCell) {
  return <div className="w-3 h-3 rounded-[2px] bg-red-50"></div>;
}
