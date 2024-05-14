import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyIcon } from "@radix-ui/react-icons";

type IProps = {
  markup: string;
};
export default function PreviewScreen({ markup }: IProps) {
  return (
    <div className="p-3">
      <Markdown
        children={markup}
        components={{
          code(props) {
            const { children, className, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";
            return match ? (
              <div className="relative">
                <CopyIcon
                  onClick={() => {
                    navigator.clipboard.writeText(
                      String(children).replace(/\n$/, "")
                    );
                  }}
                  className="absolute right-5 top-5 cursor-copy z-20 text-white"
                />
                <div className="uppercase text-primary absolute right-5 bottom-3">
                  {language}
                </div>

                <Prism
                  // {...rest}
                  PreTag="div"
                  showLineNumbers
                  customStyle={{
                    background: "#0D172C",
                    border: "0px solid orange",
                    maxHeight: "300px",
                    overflow: "auto",
                  }}
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={dark}
                />
              </div>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
      />
    </div>
  );
}
