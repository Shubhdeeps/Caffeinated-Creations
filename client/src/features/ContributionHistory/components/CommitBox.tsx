import React from "react";

type IProps = {
  children: React.ReactNode;
};
export default function CommitBox({ children }: IProps) {
  return <div className="min-w-[260px] border rounded-md p-3">{children}</div>;
}
