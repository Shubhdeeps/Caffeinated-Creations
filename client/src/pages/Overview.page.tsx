import ContributionHistory from "@/features/ContributionHistory";
import Avatar from "@/features/Overvew/Components/Avatar";

export default function OverviewPage() {
  return (
    <div className="sm:container h-screen flex flex-col md:flex-row">
      <div className="w-full h-full flex-[1] p-3 flex flex-col items-center">
        <Avatar />
      </div>
      <div className="border rounded-md w-full h-full flex-[2.5] p-3 flex flex-col items-center">
        <div className="w-full">
          <ContributionHistory />
        </div>
      </div>
    </div>
  );
}
