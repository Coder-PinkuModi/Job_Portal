import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import Navbar from "../components/shared/Navbar"
import { JOBSENDPOINT } from "../utils/jobs.enpoints.js"

function Browse() {
  const location = useLocation()

  const query = new URLSearchParams(location.search).get('search')

  useEffect(() => {
    const getJobsSearched = async (query) => {
      console.log("query ",query)
      let response;
      if (query !== '' && query !== undefined && query !== null) {
        response = await axios.get(`${JOBSENDPOINT}/getAllJobs?search=${query}`)
        console.log("response ",response)
      }

    }

    getJobsSearched(query)
  }, [query])

  return (
    <div className="container-browse w-screen ">
      <Navbar />
      <div className="browseJobs">
        <h1>Browse</h1>
      </div>
    </div>
  )
}

export default Browse