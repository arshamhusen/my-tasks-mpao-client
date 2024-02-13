import { Doughnut } from "react-chartjs-2";
import ChartContainer from "../charts-container/ChartsContainer";
import { normaliseDatasets } from "../HelperFunctions";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface DoughnutChartProps {
  labels: string[];
  title: string;
  className: string;
  datasets: any[];
}

export default function DoughnutChart({
  labels,
  title,
  className,
  datasets,
}: DoughnutChartProps) {
  const normalisedDatasets = normaliseDatasets(datasets);

  const dataConfig = {
    datasets: normalisedDatasets,
  };
  return <Doughnut data={dataConfig} />;
}

DoughnutChart.defaultProps = {
  title: "",
  data: [],
  labels: [],
  datasets: [],
};
