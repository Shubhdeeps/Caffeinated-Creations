import { useRef, useState } from "react";
import MarkdownHeader from "./components/MarkupHeader";
import PreviewScreen from "./components/PreviewScreen";
import InputScreen from "./components/InputScreen";

export default function Markdown() {
  const [isPreview, setIsPreview] = useState(false);
  const markdown = useRef<string>("");

  return (
    <div className="w-full h-[90vh] border flex flex-col">
      <MarkdownHeader setIsPreview={setIsPreview} />
      <div className="flex-1 h-full overflow-auto">
        {isPreview ? (
          <PreviewScreen markup={markdown.current} />
        ) : (
          <InputScreen markdownRef={markdown} />
        )}
      </div>
    </div>
  );
}
