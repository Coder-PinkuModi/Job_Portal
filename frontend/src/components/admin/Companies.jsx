import Navbar from "../shared/Navbar"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CompaniesTable from "./CompaniesTable";

function Companies() {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Filter by name"
          />

          <Button>New Company</Button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  )
}

export default Companies