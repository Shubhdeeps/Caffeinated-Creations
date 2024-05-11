import CommitBox from "./components/CommitBox";
import ContributionCell from "./components/ContributionCell";

export default function ContributionHistory() {
  return (
    <div>
      <CommitBox>
        <div className="flex flex-row gap-[3px]">
          <GridColumn />
          <GridColumn />
          <GridColumn />
          <GridColumn />
          <GridColumn />
          <GridColumn />
          <GridColumn />
          <GridColumn />
          <GridColumn />
          <GridColumn />
          <GridColumn />
        </div>
      </CommitBox>
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
