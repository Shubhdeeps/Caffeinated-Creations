import ConstellationTopBar from "@/features/Constellations/components/ConstellationTopBar";
import ConstellationsCard from "@/features/Constellations/components/ConstellationsCard";

export default function ConstellationPage() {
  return (
    <div className="px-1 md:container">
      <ConstellationTopBar />
      <ConstellationsCard />
    </div>
  );
}
