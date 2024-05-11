import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import {
  BookmarkIcon,
  DotsHorizontalIcon,
  GlobeIcon,
  MixIcon,
  PieChartIcon,
  ReaderIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { Link, useLocation } from "react-router-dom";

const navBarItems: {
  link: string;
  icon: JSX.Element;
  item: string;
}[] = [
  {
    item: "Overview",
    link: "/overview",
    icon: <ReaderIcon />,
  },
  {
    item: "Blogsphere",
    link: "/blogsphere",
    icon: <GlobeIcon />,
  },
  {
    item: "Constellations",
    link: "/constellation",

    icon: <MixIcon />,
  },
  {
    item: "Insights",
    link: "/insights",
    icon: <PieChartIcon />,
  },
  {
    item: "Stars",
    link: "/stars",
    icon: <StarIcon />,
  },
  {
    item: "Settings",
    link: "/settings",
    icon: <BookmarkIcon />,
  },
];

export default function Navbar() {
  const removeChilds = useRef<ChildNode[]>([]);

  const location = useLocation();
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (!divRef.current) {
        return;
      }
      const width = divRef.current!.clientWidth;
      const innerWidth = window.innerWidth;
      if (width + 100 >= innerWidth) {
        // user is under scroll
        const lastChild = divRef.current?.lastChild;
        console.log("removing: ", divRef.current?.lastChild);
        if (lastChild) {
          removeChilds.current = [...removeChilds.current, lastChild];
          divRef.current?.removeChild(lastChild);
          return;
        }
      }

      if (width + 150 < innerWidth) {
        //innerwidth is enough to accomodate another child
        const lastChild = removeChilds.current.pop();
        if (lastChild) {
          divRef.current?.appendChild(lastChild);
        }
      }
    });
  }, []);

  return (
    <nav className="w-full border-b md:px-10 pt-4  space-y-4 bg-secondary dark:bg-black relative">
      <div className="flex justify-between items-center w-full">
        <div>Shubhdeep</div>
        <div>
          <DarkModeSwitcher />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div ref={divRef} className="flex flex-row space-x-2 w-fit border">
          {navBarItems.map((navItem) => (
            <NavButton
              isActive={location.pathname === navItem.link}
              key={navItem.item}
              link={navItem.link}
            >
              {navItem.icon}
              {navItem.item}
            </NavButton>
          ))}
        </div>
        <Button className="px-3 me-4" variant="secondary">
          <DotsHorizontalIcon />
        </Button>
      </div>
    </nav>
  );
}

type IProps = {
  children: React.ReactNode;
  isActive?: boolean;
  link: string;
};
function NavButton({ children, isActive, link }: IProps) {
  return (
    <div className="pb-1 relative">
      <Button className="px-2" variant="ghost">
        <Link to={link} className="flex gap-2 items-center">
          {children}
        </Link>
      </Button>
      {isActive && (
        <div className="h-1 w-full absolute -bottom-[0.15rem] bg-primary" />
      )}
    </div>
  );
}
