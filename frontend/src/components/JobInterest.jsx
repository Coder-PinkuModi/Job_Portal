import { Badge } from "@/components/ui/badge";
// import { JOBSENDPOINT } from "../utils/jobs.enpoints.js";

export const InterestedJobs = () => {
    return (
        <div className="jobsContainer min-h-min flex flex-col justify-center">
            {/* Header */}
            <div className="flex justify-between mt-5 px-6 items-center">
                <h1 className="text-lg font-sans font-medium">Jobs related to you</h1>
            </div>

            {/* Job List Container */}
            <div className="flex gap-3 mx-2 bg-[#ece8e8e0] h-72 rounded-md relative w-full">
                {/* Find More Button */}
                <div className="text-sm text-[#3b63a2] hover:text-[#e5695c] hover:underline cursor-pointer inline-block font-semibold mt-2 absolute right-4">
                    Find more<span>&#62;&#62;</span>
                </div>

                {/* Fetched Job Card */}
                <div className="interestJobFetched flex justify-center items-center px-3">
                    <div className="bg-[#fff] h-64 w-72">
                        <div className="max-w-md mx-auto p-4 border border-gray-200 rounded-lg shadow-sm flex items-center space-x-4 bg-white">
                            {/* Company Logo */}
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256"
                                    alt="Company Logo"
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Job Information */}
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">Software Engineer</h2>
                                <div className="flex items-center space-x-2 mt-1">
                                    {/* Job Type Badge (ShadCN) */}
                                    <Badge variant="default" className="bg-blue-500 text-white">
                                        Hybrid
                                    </Badge>
                                    
                                    {/* Experience Level Badge (ShadCN) */}
                                    <Badge variant="default" className="bg-green-500 text-white">
                                        Mid-level
                                    </Badge>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">New York, USA</p>
                                <p className="text-sm text-gray-600">Google LLC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
