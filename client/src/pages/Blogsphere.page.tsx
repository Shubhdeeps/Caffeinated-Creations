// friends in blogsphere
import Blogsphere from "@/features/Blogshphere";

export default function BlogspherePage() {
  return (
    <div className="flex flex-row space-x-2 px-3">
      <div className="border h-full flex-1 relative"></div>
      <div className="flex flex-col space-y-2 items-center w-full flex-[4]">
        <div className="border w-full">Posts</div>
        <Blogsphere />
        <Blogsphere />
        <Blogsphere />
        <Blogsphere />
        <Blogsphere />
        <Blogsphere />
        <Blogsphere />
      </div>
      <div className="border flex-1 h-full"></div>
    </div>
  );
}
