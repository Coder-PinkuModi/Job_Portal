import Navbar from "../shared/Navbar"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { COMPANY_END_POINT } from "../../utils/company.endpoints.js"
import axios from "axios";
import { useState } from "react";

function CompanyCreate() {
    const navigate = useNavigate();
    const [company,setCompany] = useState();

    const registerNewCompany = async () =>{
        try {
            const response = await axios.post(`${COMPANY_END_POINT}/register`, company,{
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials:true
                }
            );
            console.log(response)
        } catch (error) {
            console.log("error console while registering new company by the admin", error)
        }
    }
  return (
    <div>
        <Navbar />
        <div className="max-w-4xl mx-auto">
            <div className="my-10">
            <h1 className="font-bolt text-2xl">
                Your Company Name
            </h1>
            <p className="text-gray-500">Give your company name, and remember you can change it later.</p>
            </div>

            <Label>Company Name</Label>
            <Input
            type="text"
            className="my-2"
            onChange={(e) => {setCompany(e.target.value)}}
            placeholder="Company Name"
            />
            <div className="flex items-center gap-2 my-10">
                <Button variant="outline" onClick = {()=>navigate("/admin/companies")}>Cancel</Button>
                <Button className="bg-[#4150d9e3] hover:bg-[#515dc8]" onClick ={()=>{(registerNewCompany)}}>Continue</Button>
            </div>
        </div>
    </div>
  )
}

export default CompanyCreate