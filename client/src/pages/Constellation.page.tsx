import {
  ConstellationsCard,
  ConstellationTopBar,
} from "@/features/Constellations";

export default function ConstellationPage() {
  return (
    <div className="pb-6">
      <ConstellationTopBar />
      <div className="w-full border-b" />
      <ConstellationsCard />

      <div className="w-full border-t" />
    </div>
  );
}
