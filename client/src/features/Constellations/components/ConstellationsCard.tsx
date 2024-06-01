import { ConstellationsModel } from "../models/Constellations.model";
import { Link } from "react-router-dom";

const constellation: ConstellationsModel = {
  cHeader: "Caffeinated Creations - A blogging place for creators",
  cId: "randomUID",
  created: 15903259,
  cTitle: "Caffeinated-Creations",
  isPinned: false,
  lastUpdated: 15903250,
  tags: ["fun", "yellow"],
  totalStars: 1,
  visibility: "public",
};
export default function ConstellationsCard() {
  const { cTitle, cHeader, visibility, created, lastUpdated } = constellation;
  const isUpdated = created !== lastUpdated;
  return (
    <div className="bg-transparent border-y py-2 min-h-20 min-w-[260px] xs:w-full max-w-[1100px]">
      <div className="space-x-2 flex gap-1 items-center">
        <Link
          className="text-lg hover:underline text-blue-500 font-bold"
          to={`/username/${encodeURI(cTitle)}}`}
        >
          {cTitle}
        </Link>
        <div className="text-[0.7rem] border py-[0.15rem] rounded-full capitalize w-16 text-center text-gray-500 dark:text-gray-400 font-semibold">
          {visibility}
        </div>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{cHeader}</div>
      <div className="h-6" />
      {isUpdated && (
        <div className="text-gray-500 dark:text-gray-400 text-[0.7rem] font-medium">
          Updated {lastUpdated} ago
        </div>
      )}
    </div>
  );
}
