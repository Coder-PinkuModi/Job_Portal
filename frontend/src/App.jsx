import { Routes, Route } from "react-router-dom"
// import Navbar from "./components/shared/Navbar"

// import { Button } from "@/components/ui/button"
import Home from "./pages/Home.jsx"
import SignUp from "./pages/auth/signup"
import Login from "./pages/auth/login"
import JobInterestSetup from "./pages/interestJobsOptions.jsx"
import Jobs from "./pages/Jobs.jsx"
import Browse from "./pages/Browse.jsx"
import Profile from "./pages/Profile.jsx"
import JobDescription from "./pages/JobDescription.jsx"
import Companies from "./components/admin/Companies.jsx"

export default function App() {
  return (
      <Routes>
        {/* for client */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setInterest" element={<JobInterestSetup />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobDescription" element={<JobDescription />} />
      {/* <Button>Click me</Button>  */}
      {/* <SignUp /> */}
      {/* <Login /> */}

      {/* for admin or recruiter */}
      <Route path="/admin/companies" element={<Companies />} />
      </Routes>

  )
}
