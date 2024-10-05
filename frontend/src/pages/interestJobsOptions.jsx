import axios from "axios"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JOBINTERESTENDPOINTS } from "../utils/jobInterest.endpoints.js"

const JobInterestSetup = () => {
    const jobs = [
        // Technology & IT
        "App Developer",
        "Web Developer",
        "Software Engineer",
        "Data Scientist",
        "System Administrator",
        "DevOps Engineer",
        "Database Administrator",
        "Cybersecurity Analyst",
        "Cloud Engineer",
        "AI/ML Engineer",

        // Healthcare
        "Doctor",
        "Nurse",
        "Pharmacist",
        "Surgeon",
        "Physiotherapist",
        "Dentist",
        "Psychologist",
        "Veterinarian",
        "Radiologist",
        "Medical Researcher",

        // Business & Management
        "Business Analyst",
        "Project Manager",
        "Product Manager",
        "Operations Manager",
        "Financial Analyst",
        "HR Manager",
        "Marketing Manager",
        "Sales Manager",
        "Supply Chain Manager",
        "Consultant",

        // Education
        "Teacher",
        "Professor",
        "Tutor",
        "School Principal",
        "Education Coordinator",
        "Librarian",
        "Instructional Designer",
        "Curriculum Developer",
        "Special Education Teacher",
        "Academic Advisor",

        // Finance & Accounting
        "Accountant",
        "Auditor",
        "Financial Planner",
        "Investment Banker",
        "Tax Consultant",
        "Insurance Underwriter",
        "Stockbroker",
        "Risk Manager",
        "Economist",
        "Actuary",

        // Construction & Engineering
        "Civil Engineer",
        "Mechanical Engineer",
        "Electrical Engineer",
        "Architect",
        "Construction Manager",
        "Surveyor",
        "Structural Engineer",
        "Quantity Surveyor",
        "Environmental Engineer",
        "Urban Planner",

        // Creative & Media
        "Graphic Designer",
        "Photographer",
        "Video Editor",
        "Journalist",
        "Copywriter",
        "Animator",
        "Art Director",
        "Content Creator",
        "Social Media Manager",
        "Public Relations Specialist",

        // Science & Research
        "Research Scientist",
        "Lab Technician",
        "Biotechnologist",
        "Chemist",
        "Microbiologist",
        "Ecologist",
        "Geologist",
        "Marine Biologist",
        "Astronomer",
        "Physicist",

        // Legal & Law Enforcement
        "Lawyer",
        "Judge",
        "Police Officer",
        "Detective",
        "Paralegal",
        "Legal Assistant",
        "Prosecutor",
        "Public Defender",
        "Corrections Officer",
        "Forensic Scientist",

        // Hospitality & Tourism
        "Hotel Manager",
        "Chef",
        "Bartender",
        "Tour Guide",
        "Event Planner",
        "Travel Agent",
        "Concierge",
        "Flight Attendant",
        "Cruise Director",
        "Front Desk Clerk",

        // Trades & Manufacturing
        "Electrician",
        "Plumber",
        "Carpenter",
        "Welder",
        "Machinist",
        "Auto Mechanic",
        "HVAC Technician",
        "Painter",
        "Roofer",
        "Forklift Operator",

        // Retail & Sales
        "Cashier",
        "Retail Manager",
        "Sales Associate",
        "Customer Service Representative",
        "Store Manager",
        "Merchandiser",
        "Sales Consultant",
        "Visual Merchandiser",
        "Inventory Manager",
        "Retail Buyer",

        // Logistics & Transportation
        "Truck Driver",
        "Delivery Driver",
        "Logistics Manager",
        "Supply Chain Analyst",
        "Warehouse Manager",
        "Forklift Operator",
        "Customs Broker",
        "Freight Forwarder",
        "Air Traffic Controller",
        "Pilot",

        // Agriculture & Environment
        "Farmer",
        "Agricultural Engineer",
        "Horticulturist",
        "Forester",
        "Wildlife Biologist",
        "Environmental Scientist",
        "Conservationist",
        "Fisheries Manager",
        "Landscaper",
        "Agronomist",

        // Public Service & Government
        "Politician",
        "Diplomat",
        "Policy Analyst",
        "Social Worker",
        "Urban Planner",
        "Public Health Officer",
        "Firefighter",
        "Military Officer",
        "Public Relations Officer",
        "Government Relations Specialist",

        // Sports & Recreation
        "Athlete",
        "Coach",
        "Personal Trainer",
        "Sports Therapist",
        "Sports Agent",
        "Referee",
        "Sports Commentator",
        "Recreational Director",
        "Fitness Instructor",
        "Lifeguard"
    ];

    const [inputValue, setInputValue] = useState("");
    const [jobsInterest, setJobsInterest] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (jobsInterest.length > 0) {
            try {
                setLoading(true);
                const response = await axios.post(
                    `${JOBINTERESTENDPOINTS}/interestJobsSetup`,
                    { jobsInterest }, // Only send the body here
                    { withCredentials: true } // Send cookies with the request
                );

                console.log(response.data)
                console.log(response.error)
            if (response.status === 201) {
                setSuccess(true);
            }
        } catch (err) {
            setError("Failed to save your job interests. Please try again ", err);
        } finally {
            setLoading(false);
        }
    }
};

const handleInputChange = (e) => {
    setInputValue(e.target.value);
};

const handleJobSelect = (job) => {
    if (!jobsInterest.includes(job)) {
        setJobsInterest((prev) => [...prev, job]);
    }
    setInputValue("");
};

const handleClearJobs = () => {
    setJobsInterest([]);
};

const filteredJobs = jobs.filter((job) =>
    job.toLowerCase().includes(inputValue.toLowerCase())
);


return (
    <div className="containerInterestJobs w-screen h-[700px] p-2 overflow-hidden gap-4 flex justify-center items-center flex-col">
        <div className="searchBoxJobsInterest">
            <Input
                type="search"
                placeholder="Search for job domain"
                value={inputValue}
                onChange={handleInputChange}
                className="w-[700px] font-sans font-[500]"
            />
        </div>
        <div className="selectedJobContainer">
            <div className="selectedJobs flex flex-wrap gap-3 h-14 w-[700px] overflow-x-hidden bg-[#7171717c] rounded-lg">
                {jobsInterest.map((job, index) => (
                    <p key={index} className="bg-[#f0eded] px-2 py-2 rounded-lg inline-block m-1 cursor-pointer">
                        {job}
                    </p>
                ))}
            </div>
        </div>
        <div className="jobShowContainer flex flex-wrap gap-3 h-[600px] w-[700px] overflow-x-auto bg-[#ffffffe1]">
            {filteredJobs.map((job, index) => (
                <div key={index} className="inline-block m-1 cursor-pointer" onClick={() => handleJobSelect(job)}>
                    <p className="bg-[#f0eded] px-3 py-1 rounded-lg">{job}</p>
                </div>
            ))}
        </div>
        <div className="controlling flex gap-4">
            <Button className="bg-[#49b552]" onClick={handleSubmit} disabled={loading}>
                {loading ? "Saving..." : "Save"}
            </Button>
            <Button onClick={handleClearJobs}>Clear</Button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Job interests saved successfully!</p>}
    </div>
);
};

export default JobInterestSetup;