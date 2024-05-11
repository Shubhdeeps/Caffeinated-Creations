import React from "react";
import { ThemeProvider } from "../ui/theme";
import Navbar from "./Navbar";

type IProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: IProps) {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <br />

        <div className="md:container">{children}</div>
      </ThemeProvider>
    </>
  );
}
