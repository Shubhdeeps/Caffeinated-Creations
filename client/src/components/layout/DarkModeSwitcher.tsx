import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button } from "../ui/button";

type ThemeMode = "dark" | "light";
export default function DarkModeSwitcher() {
  const [currentMode, setCurrentMode] = useState<ThemeMode>("light");

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
      return;
    }
    setCurrentMode("light");
    root.classList.add("light");
    return;
  }
  return (
    <div>
      <Button onClick={switchTheme}>Theme</Button>
    </div>
  );
}
