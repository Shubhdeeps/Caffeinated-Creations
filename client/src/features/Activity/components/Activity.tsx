import { useEffect, useRef } from "react";
import DataVisualizationSuite from "../../Constellations/graph/dataVisulization";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  data: number[];
};
export default function Activity({ data }: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      // Draw a line chart
      DataVisualizationSuite.drawLineChart(data, {
        canvas: ref.current, // ID of the canvas element
        lineColor: "#0F9700", // Line color
        lineWidth: 4, // Line width
      });
    }
  }, []);
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <canvas ref={ref} className="w-full h-full" />
          </TooltipTrigger>
          <TooltipContent className="bg-gray-500 font-bold px-3 py-1 text-xs">
            <p>Past week activity</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
