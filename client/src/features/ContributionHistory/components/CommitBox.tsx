import React from "react";

type IProps = {
  children: React.ReactNode;
};
export default function CommitBox({ children }: IProps) {
  return <div className="w-fit">{children}</div>;
}
