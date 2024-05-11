import React from "react";
import { Button } from "../ui/button";
import {
  BookmarkIcon,
  GlobeIcon,
  MixIcon,
  PieChartIcon,
  ReaderIcon,
  StarIcon,
} from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <nav className="w-full border-b md:px-10 pt-4 md:mx-auto space-y-4">
      <div>Caffeinated Creation</div>
      <div className="flex flex-row space-x-2">
        <NavButton isActive>
          <ReaderIcon />
          Overview
        </NavButton>

        <NavButton>
          <GlobeIcon />
          Blogsphere
        </NavButton>

        <NavButton>
          <MixIcon />
          Constellations
        </NavButton>

        <NavButton>
          <PieChartIcon />
          Insights
        </NavButton>

        <NavButton>
          <StarIcon />
          Stars
        </NavButton>

        <NavButton>
          <BookmarkIcon />
          Settings
        </NavButton>
      </div>
    </nav>
  );
}

type IProps = {
  children: React.ReactNode;
  isActive?: boolean;
};
function NavButton({ children, isActive }: IProps) {
  return (
    <div className="pb-1 relative">
      <Button className="px-2" variant="ghost">
        <div className="flex gap-2 items-center">{children}</div>
      </Button>
      {isActive && (
        <div className="h-1 w-full absolute -bottom-[0.15rem] bg-primary" />
      )}
    </div>
  );
}
