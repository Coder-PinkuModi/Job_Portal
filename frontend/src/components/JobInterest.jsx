// import { Badge } from "@/components/ui/badge";
// import { JOBSENDPOINT } from "../utils/jobs.enpoints.js";
import jobCard from "./jobCard.jsx"

export const InterestedJobs = () => {
    return (
        <div className="jobsContainer min-h-min flex flex-col justify-center">

            <div className="flex justify-between mt-5 px-6 items-center">
                <h1 className="text-lg font-sans font-medium">Jobs related to you</h1>
            </div>

            <div className="flex gap-3 mx-2 bg-[#ece8e8e0] h-72 rounded-md relative w-full">

                <div className="text-sm text-[#3b63a2] hover:text-[#e5695c] hover:underline cursor-pointer inline-block font-semibold mt-2 absolute right-4">
                    Find more<span>&#62;&#62;</span>
                </div>

                <div className="interestJobFetched flex justify-center items-center px-3">
                    <jobCard />
                </div>
            </div>
        </div>
    );
};
