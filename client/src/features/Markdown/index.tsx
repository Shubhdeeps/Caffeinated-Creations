import { useEffect, useRef, useState } from "react";
import MarkdownHeader from "./components/MarkupHeader";
import PreviewScreen from "./components/PreviewScreen";
import InputScreen from "./components/InputScreen";

export default function Markdown() {
  const [isPreview, setIsPreview] = useState(false);
  const markdown = useRef<string>("");

  useEffect(() => {
    const _markdown = localStorage.getItem("save-markdown") || "";

    markdown.current = _markdown;
    return () => {
      localStorage.setItem("save-markdown", markdown.current);
    };
  }, []);

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
      {/* Footer */}
      <div className="sticky bottom-0 w-full h-10 bg-red-950"></div>
    </div>
  );
}
