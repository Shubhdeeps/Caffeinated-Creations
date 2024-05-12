import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
            return match ? (
              <Prism
                // {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={dark}
              />
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
