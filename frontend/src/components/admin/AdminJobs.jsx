import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "../shared/Navbar"
import AdminJobsTable from "./AdminJobsTable"
function AdminJobs() {
  const navigate = useNavigate
  return (
    <div>
        <Navbar />
        <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Filter by name or role"
          />

          <Button onClick = {() =>navigate("/admin/create/jobs")}>Post New Job</Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  )
}

export default AdminJobs