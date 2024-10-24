import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import Navbar from "../components/shared/Navbar"
import SearchBox from "../components/SearchBox.jsx"
import { JOBSENDPOINT } from "../utils/jobs.enpoints.js"
import Footer from "../components/shared/Footer.jsx"
import { Badge } from "@/components/ui/badge"

function Browse() {

  const jobs = [
    { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Web Developer", companyName: "Web Solutions", salary: "$60,000 - $80,000", location: "San Francisco, CA", experience: "1+ years" },
    // Add more jobs as needed
  ];


  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search');

  useEffect(() => {
    const getJobsSearched = async (query) => {
      console.log("query ", query);
      let response;
      if (query !== '' && query !== undefined && query !== null) {
        response = await axios.get(`${JOBSENDPOINT}/getAllJobs?search=${query}`);
        console.log("response ", response);
      }
    };
    getJobsSearched(query);
  }, [query]);

  return (
    <div className="container-browse w-screen h-screen flex flex-col justify-between">
      <div className="w-screen bg-[#f0ebebef] py-3">
        <Navbar />
        <div className="browseJobs">
          <SearchBox />
        </div>
      </div>

      <div className="flex-grow mt-3 mb-6 min-w-min flex flex-col align-center">
        <h1 className="text-2xl font-sans font-normal mt-2 ml-3 pl-1 mb-5">
          Results related to <span className="font-mono font-bold">Web Development</span>
        </h1>

        <div className="jobs h-[550px] flex flex-col overflow-y-auto gap-4 px-3 py-3">
          {
            jobs.map((job, index) => (
              <div className="job border border-gray-300 min-w-[300px] p-4 rounded-md shadow-sm flex-shrink-0" key={index}>
                <div className="title font-bold text-lg">{job.title}</div>
                <div className="companyName font-medium pl-1">{job.companyName}</div>
                <div className="flex gap-4 pt-2">
                  <div className="salary"><Badge className="px-3 py-1 text-[14px] cursor-pointer" variant="green">{job.salary}</Badge></div>
                  <div className="location"><Badge className="px-3 py-1 text-[14px] cursor-pointer" variant="secondary">{job.location}</Badge></div>
                  <div className="experience"><Badge className="px-3 py-1 text-[14px] hover:bg-[destructive] cursor-pointer" variant="destructive">{job.experience}</Badge></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Browse;