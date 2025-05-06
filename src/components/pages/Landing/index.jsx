// import pieChart from '../../../assets/pie-chart.png';
// import lineGraph from '../../../assets/line-graph.png';
// import barGraph from '../../../assets/bar-graph.png';
// import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';
import ChartPreview from '../../common/ChartPreview.jsx';
import InfoSection from '../../common/InfoSection.jsx';
import InsightsSection from '../../common/InsightSection.jsx';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
  };

  return (
   <div>
    <ChartPreview />
    <InfoSection />
    <InsightsSection />
   </div>
  );
};
