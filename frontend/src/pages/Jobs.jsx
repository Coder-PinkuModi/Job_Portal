import { useState } from "react";
import { Input } from "@/components/ui/input";
import Navbar from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";
import JobCard from "../components/JobCard.jsx"

function Jobs() {
  const jobs = [
    { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
    { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
    { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
    { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
    { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
    { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
    { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
    { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Web Developer", companyName: "Web Solutions", salary: "$60,000 - $80,000", location: "San Francisco, CA", experience: "1+ years" },
    { title: "Web Developer", companyName: "Web Solutions", salary: "$60,000 - $80,000", location: "San Francisco, CA", experience: "1+ years" },
    { title: "Web Developer", companyName: "Web Solutions", salary: "$60,000 - $80,000", location: "San Francisco, CA", experience: "1+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Web Developer", companyName: "Web Solutions", salary: "$60,000 - $80,000", location: "San Francisco, CA", experience: "1+ years" },
    // Add more jobs as needed
  ];

  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState([10000, 10000000]);
  const [experience, setExperience] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [keyword, setKeyword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobShift, setJobShift] = useState("");

  return (
    <div className="container-jobFilter">
      <Navbar />
      <div className="flex px-4 pb-6 pt-3 gap-12 justify-center">
        <div className="filter-portion basis-1/3 p-4 bg-[#dfe1e1f6] rounded-md">
          <h2 className="mb-4 text-xl font-bold">Filter</h2>

          <div className="filter-job-category items-center py-2">
            <label htmlFor="category" className="block mb-2 font-bold">Job Category:</label>
            <Input
              type="text"
              id="category"
              className="block mb-2 font-bold"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="filter-job-type flex gap-5 items-center py-2">
            <label htmlFor="jobType" className="mb-2 font-bold">Job Type:</label>
            <select
              id="jobType"
              className="block mb-2 font-bold rounded-md p-1"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          <div className="filter-job-location items-center py-2">
            <label htmlFor="location" className="block mb-2 font-bold">Location:</label>
            <Input
              type="text"
              id="location"
              className="block mb-2 font-bold"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter city or region"
            />
          </div>

          <div className="filter-job-salary-range items-center py-2">
            <label className="block mb-2 font-bold">Salary Range:</label>
            <div className="flex gap-3 font-bold">
              <Input
                type="number"
                value={salaryRange[0]}
                className="block mb-2 font-bold"
                onChange={(e) =>
                  setSalaryRange([Number(e.target.value), salaryRange[1]])
                }
                placeholder="Min Salary"
              />
              <Input
                type="number"
                value={salaryRange[1]}
                className="block mb-2 font-bold"
                onChange={(e) =>
                  setSalaryRange([salaryRange[0], Number(e.target.value)])
                }
                placeholder="Max Salary"
              />
            </div>
          </div>

          <div className="filter-job-experience flex gap-5 items-center py-2">
            <label htmlFor="experience" className="mb-2 font-bold">Experience Level:</label>
            <select
              id="experience"
              value={experience}
              className="block mb-2 font-bold rounded-md p-1"
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="">Select Experience</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          <div className="filter-job-date-posted flex gap-5 items-center py-2">
            <label htmlFor="datePosted" className=" mb-2 font-bold">Date Posted:</label>
            <select
              id="datePosted"
              value={datePosted}
              className="block mb-2 font-bold rounded-md p-1"
              onChange={(e) => setDatePosted(e.target.value)}
            >
              <option value="">Anytime</option>
              <option value="24h">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
            </select>
          </div>

          <div className="filter-job-keyword flex gap-5 items-center py-2">
            <label htmlFor="keyword" className="mb-2 font-bold">Keyword:</label>
            <input
              type="text"
              id="keyword"
              className="block mb-2 font-bold rounded-md p-1"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Enter job title or skills"
            />
          </div>

          <div className="filter-job-company-name flex gap-5 items-center py-2">
            <label htmlFor="companyName" className="mb-2 font-bold">Company Name:</label>
            <input
              type="text"
              id="companyName"
              className="block mb-2 font-bold rounded-md p-1"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
            />
          </div>

          <div className="filter-job-shift flex gap-5 items-center py-2">
            <label htmlFor="jobShift" className="mb-2 font-bold">Job Shift:</label>
            <select
              id="jobShift"
              className="block mb-2 font-bold rounded-md p-1"
              value={jobShift}
              onChange={(e) => setJobShift(e.target.value)}
            >
              <option value="">Select Shift</option>
              <option value="day">Day Shift</option>
              <option value="night">Night Shift</option>
              <option value="weekend">Weekend Shift</option>
            </select>
          </div>
        </div>

        <div className="jobs-portion bg-[#ebe4e4e7] basis-3/5 flex flex-wrap justify-evenly p-1 overflow-y-auto h-[800px] w-full">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              className='bg-[#fffefe] w-[130px] h-[250px]'
              companyName={job.companyName}
              salary={job.salary}
              location={job.location}
              experience={job.experience}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Jobs;
