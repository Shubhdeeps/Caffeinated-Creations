import ConstellationTopBar from "@/features/Constellations/components/ConstellationTopBar";
import ConstellationsCard from "@/features/Constellations/components/ConstellationsCard";

export default function ConstellationPage() {
  return (
    <div className="pb-6">
      <ConstellationTopBar />
      <div className="w-full border-b" />
      <ConstellationsCard />

      <div></div>
      <div className="w-full border-t" />
    </div>
  );
}
