import Navbar from "../components/shared/Navbar.jsx";
import PrimeShowcase from "../components/PrimeShowcase";
import { InterestedJobs } from "../components/JobInterest.jsx";
// import JobInterest from "./interestJobsOptions.jsx";

function Home() {

  return (
    <div>
      <Navbar />
      <PrimeShowcase />
      <InterestedJobs>hi</InterestedJobs>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;