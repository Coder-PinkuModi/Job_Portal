// this will be the design of how to show the jobs after browseed something through search box in home page or by clicking find more in home page in "jobs related to you" section

import Navbar "../components/shared/Navbar.jsx"
import SearchBox from "./SearchBox.jsx"
import Footer from "../components/shared/Footer.jsx"

const JobBrowse = () => {

    return (
        <div className="job-browse h-screen w-screen">
            <SearchBox />
            <Footer />
        </div>
    )
}

export default JobBrowse