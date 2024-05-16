import UserProfile from "./UserProfile";

export default function BlogPost() {
  return (
    <div className="border bg-transparent rounded-md p-3 min-h-20 w-full">
      <UserProfile
        imageURL="https://github.com/shadcn.png"
        userName="Shubhdeeps"
        action="posted a blog"
        postedDate={(Date.now() - 25300) / 1000}
      />
      <div className="bg-secondary w-full p-3 rounded-md mt-3">
        <div className="text-lg font-medium">This is heading</div>
        <div className="text-sm dark:text-gray-300">This is heading</div>
      </div>
    </div>
  );
}
