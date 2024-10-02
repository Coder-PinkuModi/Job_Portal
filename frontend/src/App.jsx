import { Routes, Route } from "react-router-dom"
// import Navbar from "./components/shared/Navbar"

// import { Button } from "@/components/ui/button"
import Home from "./pages/Home.jsx"
import SignUp from "./pages/auth/signup"
import Login from "./pages/auth/login"

export default function App() {
  return (
    <div>
       {/* <Navbar /> */}
      <Routes>
        <Route path ="/" element ={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Button>Click me</Button>  */}
      {/* <SignUp /> */}
      {/* <Login /> */}

    </div>
  )
}
