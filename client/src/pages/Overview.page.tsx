import { HighlightedConstellationCard } from "@/features/Constellations";
import ContributionHistory from "@/features/ContributionHistory";
import Avatar from "@/features/Overvew/Components/Avatar";

export default function OverviewPage() {
  return (
    <div className="sm:container h-screen flex flex-col md:flex-row">
      <div className="w-full h-full flex-[1.5] p-3 flex flex-col items-center">
        <Avatar />
      </div>
      <div className="rounded-md w-full h-full flex-[2.5] p-3 items-center overflow-hidden space-y-10">
        <section>
          <div className="leading-10 font-medium">Pinned</div>
          <div className="flex flex-wrap gap-2">
            <HighlightedConstellationCard />
            <HighlightedConstellationCard />
            <HighlightedConstellationCard />
            <HighlightedConstellationCard />
            <HighlightedConstellationCard />
          </div>
        </section>
        <section>
          <div className="leading-10 font-medium">106 reads in the year</div>

          <div className="w-full">
            <ContributionHistory />
          </div>
        </section>
        {/* </div> */}
      </div>
    </div>
  );
}
