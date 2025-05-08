import { NavLink } from "react-router-dom";
import barChart from '../../assets/bar-graph.png'
import pieChart from '../../assets/pie-chart.png'
import lineChart from '../../assets/line-graph.png'
import { useDownloadData } from "../../hooks/useDownloadData";

export default function ChartPreview() {
    const {downloadCSV} = useDownloadData()
    return (
        
        <>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10">
          <div className="flex flex-col items-center">
            <img src={barChart} alt="Bar Chart" className="w-[200px]" />
            <p className="mt-2 text-center font-semibold">Search Grant Rates by Office</p>
          </div>
  
          <div className="flex flex-col items-center">
            <img src={pieChart} alt="Pie Chart" className="w-[200px]" />
            <p className="mt-2 text-center font-semibold">Search Grant Rates by Nationality</p>
          </div>
  
          <div className="flex flex-col items-center">
            <img src={lineChart} alt="Line Chart" className="w-[200px]" />
            <p className="mt-2 text-center font-semibold">Search Grant Rates Over Time</p>
          </div>
        </div>
  
        {/* Buttons Section */}
        <div className="flex justify-center gap-4 mb-10">
          <NavLink
            to="/graphs"
            className="bg-[#84866b] text-white px-4 py-2 font-semibold shadow hover:bg-[#6f725b] transition"
          >
            View the Data
          </NavLink>
          <button
            onClick={downloadCSV} 
            download
            className="bg-[#84866b] text-white px-4 py-2 font-semibold shadow hover:bg-[#6f725b] transition"
          >
            Download the Data
          </button>
        </div>
      </>
    
   
    )
}
