// friends in blogsphere
import Blogsphere from "@/features/Blogshphere";
import Avatar from "@/features/Overvew/Components/Avatar";

export default function BlogspherePage() {
  return (
    <div className="sm:container h-screen flex flex-col md:flex-row">
      <div className="w-full h-full flex-[1] p-3 flex flex-col items-center">
        <Avatar />
      </div>
      <div className="rounded-md w-full h-full flex-[2.5] p-3 flex flex-col items-center">
        {/* <div className="w-full"> */}
        <div className="flex flex-col space-y-2 items-center w-full flex-[4]">
          <div className="w-full">Posts</div>
          <Blogsphere />
          <Blogsphere />
          <Blogsphere />
          <Blogsphere />
          <Blogsphere />
          <Blogsphere />
          <Blogsphere />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
