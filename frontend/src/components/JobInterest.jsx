// import { Badge } from "@/components/ui/badge";
// import { JOBSENDPOINT } from "../utils/jobs.enpoints.js";
import JobCard from "./JobCard";

export const InterestedJobs = () => {
    const jobs = [
        { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
        { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
        { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
        { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
        { title: "Web Developer", companyName: "Web Solutions", salary: "$60,000 - $80,000", location: "San Francisco, CA", experience: "1+ years" },
        // Add more jobs as needed
    ];

    return (
        <div className="jobsContainer min-h-min flex flex-col justify-center  bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="flex justify-between mt-5 px-6 items-center">
                <h1 className="text-lg font-sans font-medium">Jobs related to you</h1>
            </div>

            {/* Apply the transparent-blur class to the job cards container */}
            <div className="flex gap-3 mx-2 transparent-blur h-80 rounded-md relative w-full overflow-auto">
                <div
                    className="text-sm text-[#5892ee] hover:text-[#e5695c] hover:underline cursor-pointer inline-block font-semibold mt-2 absolute right-4"
                    style={{ zIndex: 10 }} // Inline style to set z-index
                >
                    Find more<span>&#62;&#62;</span>
                </div>

                <div className="interestJobFetched flex flex-wrap justify-center items-center px-3">
                    {jobs.map((job, index) => (
                        <JobCard
                            key={index}
                            title={job.title}
                            companyName={job.companyName}
                            salary={job.salary}
                            location={job.location}
                            experience={job.experience}
                            className="animate glow"
                            style={{ animationDelay: `${index * 0.3}s` }} // Dynamic delay
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
