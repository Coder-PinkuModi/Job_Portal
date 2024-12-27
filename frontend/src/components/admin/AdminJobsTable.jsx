import { useState, useEffect } from "react";
import axios from "axios";
import {
    Table,
    TableCaption,
    TableHeader,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { MoreHorizontal, Edit2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setJobs } from "../../store/admin.jobs.slice.js";
import { JOBSENDPOINT } from "../../utils/jobs.enpoints.js"

function AdminJobsTable() {
    const [jobs, setJobss] = useState([]); // Local state for jobs
    const dispatch = useDispatch(); // Redux dispatch for managing global state
    const jobsFromStore = useSelector((state) => state.adminJob.jobs); // Fetching jobs from Redux store

    useEffect(() => {
        const getJobs = async () => {
            try {
                // console.log("jobFromStore", jobsFromStore)
                // Fetch jobs only if not available in the Redux store
                if (
                    jobsFromStore.length === 0 ||
                    jobsFromStore === null ||
                    jobsFromStore === undefined
                ) {
                    const getJobsResponse = await axios.get(
                        `${JOBSENDPOINT}/getAdminJobs`,
                        {
                            withCredentials: true, // Include credentials for secure requests
                        }
                    );

                    // Check if the response is successful
                    if (getJobsResponse.status === 200) {
                        console.log(
                            "Jobs response while getting it in JobsTable",
                            getJobsResponse
                        );
                        dispatch(setJobs(getJobsResponse.data.jobs)); // Update Redux store
                        setJobss(getJobsResponse.data.jobs); // Update local state
                    } else {
                        console.log(
                            "Error while getting jobs in JobsTable:",
                            getJobsResponse
                        );
                    }
                } else {
                    setJobss(jobsFromStore); // Use jobs from Redux store if available
                }
            } catch (error) {
                console.log("Error while getting jobs in JobsTable:", error);
            }
        };

        getJobs(); // Invoke the function
    },[]); // Dependency array ensures effect runs only when dependencies change

    return (
        <div>
            <Table>
                <TableCaption>List of available jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Total Positions</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {jobs.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center">
                                No jobs available
                            </TableCell>
                        </TableRow>
                    ) : (
                        jobs.map((job) => (
                            <TableRow key={job._id}>
                                <TableCell>{job.company}</TableCell>
                                <TableCell>{job.title}</TableCell>
                                <TableCell>{job.position}</TableCell>
                                <TableCell>{job.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal className="w-4 h-4" />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div className="flex items-center gap-2 cursor-pointer">
                                                <Edit2 className="w-4 h-4 mr-2" />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}

export default AdminJobsTable;
