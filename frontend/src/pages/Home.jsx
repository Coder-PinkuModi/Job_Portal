import Navbar from "../components/shared/Navbar.jsx";
import PrimeShowcase from "../components/PrimeShowcase";
import { InterestedJobs } from "../components/JobInterest.jsx";
import Footer from "../components/shared/Footer.jsx"
// import JobInterest from "./interestJobsOptions.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {

  const user= useSelector((state) => state.userAuth);
  const navigate= useNavigate();

  useEffect(() => {
    function redirection(){
      if(user && user?.role === "recruiter"){
        navigate("/admin/companies")
      }
    }
    redirection()
  });

  return (
    <div>
      <Navbar />
      <PrimeShowcase />
      <InterestedJobs />
      <Footer />
    </div>
  );
}

export default Home;