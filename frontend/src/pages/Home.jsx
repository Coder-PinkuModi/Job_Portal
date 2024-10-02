import Navbar from "../components/shared/Navbar.jsx"
import PrimeShowcase from "../components/PrimeShowcase"
import { InterestedJobs } from "../components/JobInterest.jsx"

function Home() {
  return (
    <div>
        <Navbar />
        <PrimeShowcase />
        <InterestedJobs />
        {/* <Footer /> */}
    </div>
  )
}

export default Home