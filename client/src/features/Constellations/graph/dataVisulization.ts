// import { useEffect } from "react";

interface Options {
  canvas: HTMLCanvasElement;
  lineColor: string;
  lineWidth: number;
}
class DataVisualizationSuite {
  /**
   * Draws a line chart on a canvas element.
   * @param {Array} data - The data set for the line chart.
   * @param {Object} options - Options for configuring the line chart.
   *   @param {string} [options.canvasId='chartCanvas'] - ID of the canvas element.
   *   @param {string} [options.lineColor='rgba(75, 192, 192, 1)'] - Color of the line.
   *   @param {number} [options.lineWidth=2] - Width of the line.
   */
  static drawLineChart(data: number[], options: Options) {
    // Check if the data is a valid array with at least two elements
    if (!Array.isArray(data) || data.length < 2) {
      throw new Error("A valid data set is expected.");
    }

    const canvas = options.canvas;
    // Check if the canvas element exists
    if (!canvas) {
      throw new Error(`Canvas element not found`);
    }

    // Get the 2D rendering context of the canvas
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error(`Canvas element not found`);
    }
    // Get the width and height of the canvas
    const width = canvas.width;
    const height = canvas.height;

    // Calculate the scaling factors for x and y axes
    const xScale = width / (data.length - 1);
    const yScale = height / (Math.max(...data) - Math.min(...data));
    // const yScale = height * 0.1;

    // Begin drawing the line chart
    ctx.beginPath();

    // Move to the starting point of the line chart
    ctx.moveTo(0, height - (data[0] - Math.min(...data)) * yScale);

    // Draw the line chart by connecting each data point
    for (let i = 1; i < data.length; i++) {
      ctx.lineTo(i * xScale, height - (data[i] - Math.min(...data)) * yScale);
    }

    // Set the line color and width
    ctx.strokeStyle = options.lineColor || "rgba(75, 192, 192, 1)";
    ctx.lineWidth = options.lineWidth || 2;

    // Stroke the path to display the line chart
    ctx.stroke();

    return canvas;
  }
}

// interface Options2 {
//   canvasRef: React.MutableRefObject<HTMLCanvasElement>;
//   lineColor: string;
//   lineWidth: number;
//   data: number[];
// }

// export function useDataVisulization(options: Options2) {
//   const { canvasRef, lineColor, lineWidth, data } = options;
//   const canvas = canvasRef.current;
//   useEffect(() => {
//     DataVisualizationSuite.drawLineChart(data, {
//       canvas,
//       lineColor: lineColor, // Line color
//       lineWidth: lineWidth, // Line width
//     });
//   }, []);
// }

// Export the DataVisualizationSuite class for use in other modules
export default DataVisualizationSuite;
