import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { JOBSENDPOINT } from "../../utils/jobs.enpoints.js";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setJobs } from "../../store/admin.jobs.slice.js"
import axios from "axios";
import Navbar from "../shared/Navbar";

function CreateJobsSetup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const companyFromStore = useSelector((state) => state.company.companies);

  const [input, setInput] = useState({
    title: "",
    description: "",
    qualification:"",
    jobType: "hybrid",
    salary: "",
    experienceLevel: "",
    location: "",
    skills: [""],
    position: "",
    company: "",
    companyId:"",
    createdBy: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...input.skills];
    updatedSkills[index] = value;
    setInput({ ...input, skills: updatedSkills });
  };

  const addSkill = () => {
    setInput({ ...input, skills: [...input.skills, ""] });
  };

  const removeSkill = (index) => {
    const updatedSkills = input.skills.filter((_, i) => i !== index);
    setInput({ ...input, skills: updatedSkills });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const companyName = input.company.toLowerCase();
      const matchedCompany = companyFromStore.find(
        (company) => company.name.toLowerCase() === companyName
      );
      
      if (matchedCompany) {
        setInput({ ...input, companyId: matchedCompany._id });
      } else {
        toast.error("Company not found, admin first make the company");
        setInput({ ...input, company: "" });
        return;
      }

      const response = await axios.post(`${JOBSENDPOINT}/postJob`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        console.log(response)

        const allJobsbyAdmin = await axios.get(`${JOBSENDPOINT}/getAdminJobs`,
          {
            withCredentials: true
          }
        );
        dispatch(setJobs(allJobsbyAdmin.data.jobs));

        navigate("/admin/jobs");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error creating job");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto my-10 p-6 border rounded-md shadow-sm">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold mb-6 text-center">Create Job</h1>

          <div className="mb-5">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              name="title"
              value={input.title}
              onChange={handleChange}
              placeholder="Enter job title"
              required
            />
          </div>

          <div className="mb-5">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              value={input.description}
              onChange={handleChange}
              className="input w-full h-24 p-3 border rounded-md"
              placeholder="Enter job description"
              required
            />
          </div>

          <div className="mb-5">
            <Label htmlFor="qualification">Qualification</Label>
            <Input
              id="qualification"
              name="qualification"
              value={input.qualification}
              onChange={handleChange}
              placeholder="Enter qualification required, any or B.Tech + M.Tech or B.A. or M.Tech or M.A."
              required
            />
          </div>

          <div className="mb-5">
            <Label htmlFor="jobType">Job Type</Label>
            <select
              id="jobType"
              name="jobType"
              value={input.jobType}
              onChange={handleChange}
              className="input w-full border rounded-md"
              placeholder="Select job type"
              required
            >
              <option value="hybrid">Hybrid</option>
              <option value="remote">Remote</option>
            </select>
          </div>

          <div className="mb-5">
            <Label htmlFor="salary">Salary</Label>
            <Input
              id="salary"
              name="salary"
              value={input.salary}
              onChange={handleChange}
              placeholder="Enter salary(in LPA or CPA-> 15LPA)"
              required
            />
          </div>

          <div className="mb-5">
            <Label htmlFor="experienceLevel">Experience Level</Label>
            <Input
              id="experienceLevel"
              type="text"
              name="experienceLevel"
              value={input.experienceLevel}
              onChange={handleChange}
              placeholder="Enter experience level needed: Fresher/1yr/2yrs/3yrs"
              required
            />
          </div>

          <div className="mb-5">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              type="text"
              name="location"
              value={input.location}
              onChange={handleChange}
              placeholder="Enter location, for remore- online"
              required
            />
          </div>

          <div className="mb-5">
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              type="number"
              name="position"
              value={input.position}
              onChange={handleChange}
              placeholder="Total position"
              required
            />
          </div>

          <div className="mb-5">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              type="text"
              name="company"
              value={input.company}
              onChange={handleChange}
              placeholder="Enter company name"
              required
            />
          </div>

          <div className="mb-5">
            <Label>Skills</Label>
            {input.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 mt-2">
                <Input
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  required
                />
                <Button
                  variant="destructive"
                  onClick={() => removeSkill(index)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button type="button" onClick={addSkill} className="mt-3">
              Add Skill
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateJobsSetup;