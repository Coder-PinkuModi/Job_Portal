import { useEffect, useState } from "react"
import Navbar from "../shared/Navbar.jsx"
import ApplicantsTable from "./ApplicantsTable.jsx"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import axios from "axios"
import { application_endpoint } from "../../utils/applicantions.endpoints.js"

function Applications() {
    const { jobId } = useParams()
    const [applicants, setApplicants] = useState(null)

    useEffect(() => {
        async function getApplicanions(){
            try {
                const response = await axios.get(`${application_endpoint}/getJobApplications/${jobId}`, {
                    withCredentials: true,
                })
                if(response.status === 200){
                    console.log(response)
                    if(response.data){
                        setApplicants(response.data)
                    }
                }
            } catch (error) {
                console.log("console while getting applications",error)
            }

        }
        getApplicanions()
    },[jobId])
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto'>
                <h1 className='font-bold text-xl my-5'>Applicants </h1>
                <ApplicantsTable />
            </div>
        </div>
    )
}

export default Applications