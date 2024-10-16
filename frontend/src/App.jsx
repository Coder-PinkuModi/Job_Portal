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

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setInterest" element={<JobInterestSetup />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <Button>Click me</Button>  */}
      {/* <SignUp /> */}
      {/* <Login /> */}

    </div>
  )
}
