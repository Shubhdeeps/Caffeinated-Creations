import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type IProps = {
  setIsPreview: (state: boolean) => void;
};
export default function MarkdownHeader({ setIsPreview }: IProps) {
  return (
    <div className="w-full h-12 bg-secondary flex">
      <Tabs defaultValue="Edit" className="w-fit my-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger onClick={() => setIsPreview(false)} value="Edit">
            Edit
          </TabsTrigger>
          <TabsTrigger onClick={() => setIsPreview(true)} value="Preview">
            Preview
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
