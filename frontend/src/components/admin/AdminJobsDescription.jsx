import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { JOBSENDPOINT } from "../../utils/jobs.enpoints.js";
import { Button } from "@/components/ui/button";
import axios from "axios";
// import { useSelector } from "react-redux";
import Navbar from "../shared/Navbar";

function AdminJobsDescription() {
    const { jobId } = useParams();
    const [jobDetails, setJobDetails] = useState(null);
    // const [companyOfJob, setCompanyOfJob] = useState(null);
    const [companyLogo, setCompanyLogo] = useState(null);
    const navigate = useNavigate();
    // const companiesFromStore = useSelector((state) => state.company.companies); 

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(`${JOBSENDPOINT}/getJobById/${jobId}`, {
                    withCredentials: true,
                });
                if (response.status === 200) {
                    console.log("response", response);
                    const job = response.data.job;
                    setJobDetails(job);
                    setCompanyLogo(response.data.companyLogo);

                    // console.log("companiesFromStore", companiesFromStore);

                    // Find the company related to the job
                    // const company = companiesFromStore.find(
                    //     (company) => company._id === job.companyId
                    // );
                    // console.log("company", company);
                    // setCompanyOfJob(company || null); 
                } else {
                    console.error("Failed to fetch job details:", response);
                }
            } catch (error) {
                console.error("Error fetching job details:", error);
            }
        };

        if (jobId) fetchJobDetails();
    }, [jobId]); // Add companiesFromStore as a dependency

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-6">
                {jobDetails ? (
                    <div className="bg-gray-100 rounded-lg p-8 space-y-6 shadow-lg">
                        {/* Header Section with Logo */}
                        <div className="flex justify-between items-center border-b pb-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src={companyLogo}
                                    alt={`${jobDetails.company} Logo`}
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <h1 className="text-3xl font-bold text-gray-800">{jobDetails.title}</h1>
                            </div>
                            <Button variant="ghost" className="text-sm border-[1px] hover:bg-slate-600 hover:text-white hover:border-[0px]" onClick={() => navigate(-1)}>
                                Back to Job Listings
                            </Button>
                        </div>

                        {/* Job Details Section */}
                        <div className="space-y-4 text-gray-700">
                            <p>
                                <strong>Company:</strong> {jobDetails.company}
                            </p>
                            <p>
                                <strong>Role:</strong> {jobDetails.title}
                            </p>
                            <p>
                                <strong>Description:</strong> {jobDetails.description}
                            </p>
                            <p>
                                <strong>Vacancy for:</strong> {jobDetails.position}
                            </p>
                            <p>
                                <strong>Experience::</strong> {jobDetails.experienceLevel}
                            </p>
                            <p>
                                <strong>Salary:</strong> {jobDetails.salary}
                            </p>
                            <p>
                                <strong>Total Applicants:</strong> {(jobDetails.applicants || []).length}
                            </p>
                            <p>
                                <strong>Date Posted:</strong> {jobDetails.createdAt.split("T")[0]}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-start gap-4">
                            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg">
                                Edit Job
                            </Button>
                            <Button
                                variant="outline"
                                className="border-2 border-red-600 text-red-600 hover:bg-red-100 font-medium px-6 py-2 rounded-lg"
                            >
                                Delete Job
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-gray-500 text-lg">Loading job details...</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminJobsDescription;
