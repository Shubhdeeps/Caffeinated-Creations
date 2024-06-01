import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilePlusIcon } from "@radix-ui/react-icons";

export default function ConstellationTopBar() {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-2 pb-2 w-full">
      <Input type="search" placeholder="Find a constellations..." />
      <div className="flex flex-row space-x-2">
        <div className="border rounded-md px-2 py-1 font-medium">Type</div>
        <div className="border rounded-md px-2 py-1 font-medium">Sort</div>
      </div>
      <Button>
        <FilePlusIcon />
        New
      </Button>
    </div>
  );
}
