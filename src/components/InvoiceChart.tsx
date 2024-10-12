import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["04 Jul", "05 Jul", "06 Jul", "07 Jul", "08 Jul", "09 Jul", "10 Jul"],
  datasets: [
    {
      label: "Quotation",
      backgroundColor: "#FF914D",
      data: [12000, 19000, 30000, 50000, 20000, 30000, 45000],
    },
    {
      label: "Approval",
      backgroundColor: "#F5BF42",
      data: [10000, 15000, 25000, 45000, 30000, 35000, 50000],
    },
  ],
};

const InvoiceChart = () => {
  return <Bar data={data} />;
};

export default InvoiceChart;
