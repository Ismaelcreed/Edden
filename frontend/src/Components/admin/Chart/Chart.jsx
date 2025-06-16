import { Line, Doughnut } from "react-chartjs-2";
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement // N'oubliez pas d'importer ArcElement pour le doughnut
} from 'chart.js';

// Enregistrez tous les éléments nécessaires
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Essentiel pour le doughnut
);

const Chart = ({ type, data, options }) => {
  return (
    <>
      {type === 'line' && <Line data={data} options={options} />}
      {type === 'doughnut' && <Doughnut data={data} options={options} />}
    </>
  );
};

export default Chart;