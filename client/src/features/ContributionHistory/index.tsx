import CommitBox from "./components/CommitBox";
import ContributionCell from "./components/ContributionCell";

export default function ContributionHistory() {
  const arr: number[] = Array.from(Array(365).keys());

  return (
    <div className="max-w-fit overflow-x-auto border p-2 rounded-md light:bg-primary-foreground">
      <div className="flex flex-col flex-wrap h-[98px] w-[742px]">
        {arr.map((n) => {
          return (
            <ContributionCell
              commitCount={Math.floor(Math.random() * 10)}
              dayNumber={n + 1}
            />
          );
        })}
      </div>
    </div>
  );
}

function GridColumn() {
  return (
    <div className="flex flex-col gap-[3px] ">
      <ContributionCell commitCount={0} dayNumber={1} />
      <ContributionCell commitCount={4} dayNumber={2} />
      <ContributionCell commitCount={2} dayNumber={3} />
      <ContributionCell commitCount={0} dayNumber={4} />
      <ContributionCell commitCount={8} dayNumber={5} />
      <ContributionCell commitCount={0} dayNumber={6} />
      <ContributionCell commitCount={11} dayNumber={7} />
    </div>
  );
}
