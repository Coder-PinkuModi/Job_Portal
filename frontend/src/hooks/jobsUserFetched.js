// this custom hook will attempt to fetch jobs for user from the backend in the jobs he/she is interested in

import axios from "axios";
import { JOBSENDPOINT } from "../utils/jobs.enpoints.js"


export async function userJobfetchHomePage(){
    try {
        const response = await axios.get(`${JOBSENDPOINT}/getIntitalJobs`,{
            withCredentials: true,
        });
        
        console.log("response from jobUserFetched.js", response.data);
        return response;
    } catch (error) {
        console.log("custom hook error in jobUserFetched.js", error)
    }
    
}