import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useRef } from "react";

type IProps = {
  markdownRef: React.MutableRefObject<string>;
};
const InputScreen = (props: IProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.value = props.markdownRef.current;
    }
  }, []);
  return (
    <Textarea
      ref={textAreaRef}
      //   value={props.markdownRef.current}
      className="w-full h-full rounded-none outline-none"
      onChange={(e) => {
        props.markdownRef.current = e.target.value;
      }}
    />
  );
};
export default InputScreen;
