import { useLayoutEffect, useState } from "react";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const themeAndIconMap = {
  light: <MoonIcon />,
  dark: <SunIcon />,
};
type ThemeMode = "dark" | "light";
export default function DarkModeSwitcher() {
  const [currentMode, setCurrentMode] = useState<ThemeMode>("light");
  console.log({ currentMode });

  useLayoutEffect(() => {
    const previousValue = localStorage.getItem("vite-ui-theme");
    if (!previousValue) {
      return;
    }
    setCurrentMode(previousValue as ThemeMode);
  }, []);

  function switchTheme() {
    const previousValue = localStorage.getItem(
      "vite-ui-theme"
    ) as ThemeMode | null;
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (previousValue === null || previousValue === "light") {
      setCurrentMode("dark");
      root.classList.add("dark");
      localStorage.setItem("vite-ui-theme", "dark");
      return;
    }
    localStorage.setItem("vite-ui-theme", "light");
    setCurrentMode("light");
    root.classList.add("light");
    return;
  }
  return (
    <div>
      <Button variant="ghost" onClick={switchTheme}>
        {themeAndIconMap[currentMode]}
      </Button>
    </div>
  );
}
