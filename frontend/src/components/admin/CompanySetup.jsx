import { useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { COMPANY_END_POINT } from "../../utils/company.endpoints.js"
import { setCompany, setCompanies } from "../../store/company.slice.js"
import { ArrowLeft } from "lucide-react"
import { toast } from "react-toastify";
// import CompanyReducer from "../../store/company.slice.js"
import axios from "axios";
import Navbar from "../shared/Navbar"


function CompanySetup() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const companies = useSelector((state) => state.company.companies);

  const [input, setInput] = useState({
    companyName: name,
    description: "",
    website: "",
    location: "",
    file: null
  })
  const [submitting, setSubmitting] = useState(false);

  const handleChangeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0]
    setInput({
      ...input,
      file: file
    })
  }

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("companyName", input.companyName)
    formData.append("description", input.description)
    formData.append("website", input.website)
    formData.append("location", input.location)

    if (input.file) formData.append("companyLogo", input.file)

    try {
      const response = await axios.post(`${COMPANY_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true
      }
      );

      console.log("response while registering new company by the admin", response);

      if (response?.data?.success) {
        toast.success(response?.data?.message)
        const companyId = response.data.company._id;
        dispatch(setCompany(response.data.company))
        const gettingAllCompanyResponse = await axios.get(`${COMPANY_END_POINT}/getCompany`);
        dispatch(setCompanies(gettingAllCompanyResponse.data.companies))
        navigate(`/admin/companies/${companyId}`)
      }

    } catch (error) {
      console.log("error console while registering the company", error)
      toast.error(error?.response?.data?.message)
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <form method="POST">
          <div className="flex item-center gap-5 p-10">
            <Button variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold" onClick={() => navigate("/admin/companies")}>
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-[600] font-sans text-lg">Company Setup</h1>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Label>Company Name</Label>
              <Input
                type="text"
                name="companyName"
                value={input.companyName}
                readOnly
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={handleChangeEventHandler}
                required
              />
            </div>
            <div>
              <Label>Website</Label>
              <Input
                type="text"
                name="website"
                value={input.website}
                onChange={handleChangeEventHandler}
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                onChange={handleChangeEventHandler}
                required
              />
            </div>
            <div>
              <Label>Image Logo</Label>
              <Input
                type="file"
                name="file"
                accept="image/*"
                onChange={changeFileHandler}
                required
              />
            </div>
          </div>
          {
            !submitting ? <Button type="submit" className="w-full mt-8" onClick={(e) => handleSubmit(e)}>Submit</Button>
              : <Button type="submit" className="w-full mt-8" disabled>Submitting...</Button>
          }
        </form>
      </div>
    </div>
  )
}

export default CompanySetup