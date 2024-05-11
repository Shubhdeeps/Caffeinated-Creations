import React, { useEffect, useMemo, useRef, useState } from "react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

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
  // const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const divRef = useRef<HTMLDivElement | null>(null);
  const dropdownItemRef = useRef<HTMLDivElement | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  console.log({ showDropdown });

  function organizeNavItems() {
    if (!divRef.current) {
      return;
    }
    const width = divRef.current!.clientWidth;
    const innerWidth = window.innerWidth;
    if (width + 100 >= innerWidth) {
      // user is under scroll
      const lastChild = divRef.current?.lastChild;
      if (lastChild) {
        removeChilds.current = [...removeChilds.current, lastChild];
        divRef.current?.removeChild(lastChild);
        dropdownItemRef.current?.appendChild(lastChild);
        return organizeNavItems();
      }
    }

    if (width + 150 < innerWidth) {
      //innerwidth is enough to accomodate another child
      const lastChild = removeChilds.current.pop();
      if (lastChild) {
        dropdownItemRef.current?.removeChild(lastChild);
        divRef.current?.appendChild(lastChild);
      }
    }
  }

  useEffect(() => {
    //on first load -> organize items
    organizeNavItems();

    //resize on size change
    window.addEventListener("resize", () => {
      organizeNavItems();
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
        <div className="relative">
          <Button variant="secondary" className="">
            <DotsHorizontalIcon />
            {/*content */}
            <div
              ref={dropdownItemRef}
              className="absolute top-[46px] right-0 w-fit min-h-20 border rounded-md bg-secondary flex flex-col z-20 items-start px-3 p-1"
            ></div>
          </Button>
        </div>
        {/* Dropdown */}
        {/* <DropdownMenu open>
          <DropdownMenuTrigger
            onClick={() => console.log("triii")}
            className="bg-secondary px-4 rounded-md outline-none mb-1"
          >
            <div onClick={() => console.log("trigger")}>
              <DotsHorizontalIcon />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={showDropdown ? "hidden" : ""}
            ref={dropdownItemRef}
            align="end"
          ></DropdownMenuContent>
        </DropdownMenu> */}
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
