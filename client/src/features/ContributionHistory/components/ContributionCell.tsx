import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SingleCell } from "../models/HistoryYear.model";
import { dateFromDay } from "../utils/utils";

/**
 * Empty: no commit on that day
 * Light: 1-2 commits
 * Medium: 3-5
 * High: 6-10
 * Extreme: 11 or above
 */
function cellAndColorClass(count: number) {
  if (count < 1) {
    return "bg-gray-200 dark:bg-gray-900/80";
  }
  if (count < 3) {
    return "bg-primary/30";
  }
  if (count < 6) {
    return "bg-primary/50";
  }
  if (count < 11) {
    return "bg-primary/80";
  }
  return "bg-primary";
}

export default function ContributionCell({
  dayNumber,
  commitCount,
  year,
}: SingleCell & {
  year: number;
}) {
  const bgColorClx = cellAndColorClass(commitCount);
  const date = dateFromDay(year, dayNumber);
  const dateStr = `${months[date.getMonth()]} ${date.getDate()}`;
  return (
    <div className="p-[1px] w-fit h-fit">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={`w-3 h-3 rounded-[2px] text-black text-xs ${bgColorClx}`}
            />
          </TooltipTrigger>
          <TooltipContent className="bg-gray-500 font-bold px-3 py-1 text-xs">
            {!commitCount ? (
              <p>No blogs on {dateStr}</p>
            ) : (
              <p>
                {commitCount} posts on {dateStr}
              </p>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
