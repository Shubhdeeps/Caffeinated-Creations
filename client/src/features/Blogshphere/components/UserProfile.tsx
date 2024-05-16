import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { epochTimestampToStr } from "@/utils/helperFunctions/epochTimestampToStr";

type IProps = {
  imageURL: string;
  userName: string;
  action: string;
  postedDate: EpochTimeStamp;
};
export default function UserProfile({
  imageURL,
  userName,
  action,
  postedDate,
}: IProps) {
  return (
    <div className="flex flex-row space-x-2">
      <Avatar>
        <AvatarImage src={imageURL} alt="@profile-pic" />
        <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="font-medium flex flex-col">
        <span>
          {userName}{" "}
          <span className="font-normal text-gray-700 dark:text-gray-400">
            {action}
          </span>
        </span>
        <span className="font-normal text-xs dark:text-gray-400 text-gray-700 -mt-[2px]">
          {epochTimestampToStr(postedDate)}
        </span>
      </div>
    </div>
  );
}
