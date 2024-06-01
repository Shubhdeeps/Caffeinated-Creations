export interface ConstellationsModel {
  cId: string;
  cTitle: string;
  visibility: "public" | "private";
  cHeader: string;
  created: EpochTimeStamp;
  lastUpdated: EpochTimeStamp;
  totalStars: number;
  tags: string[];
  isPinned: boolean; // false by default -> visible on overview page if true
}
