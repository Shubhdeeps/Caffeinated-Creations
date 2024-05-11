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
import DarkModeSwitcher from "./DarkModeSwitcher";

export default function Navbar() {
  return (
    <nav className="w-full border-b md:px-10 pt-4  space-y-4 bg-secondary dark:bg-black relative">
      <div className="border flex justify-between items-center w-full">
        <div>Shubhdeep</div>
        <div>
          <DarkModeSwitcher />
        </div>
      </div>
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
