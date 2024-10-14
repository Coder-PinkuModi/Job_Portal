import Navbar from "../components/shared/Navbar";
import appleLogo from "../assets/images/apple-logo.png";
import JobCard from "@components/Jobcard.jsx";
import Footer from "../components/shared/Footer.jsx";

const userProfile = {
  name: "Pinku Modi",
  title: "Full Stack Developer",
  bio: "Enthusiastic developer with a passion for creating web applications using modern frameworks and cloud technologies.",
  location: "Noida",
  skills: ["Html", "Css", "Javascript", "Frontend", "Backend", "MERN Stack", "Web Design", "AWS", "Redis"],
  education: {
    level: "Higher Secondary",
    institute: "Institute of Tech",
    grade: "A",
    cgpa: 9.0,
  },
  profileImage: appleLogo, 
};

function Profile() {
  const jobs = [
    { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Web Developer", companyName: "Web Solutions", salary: "$60,000 - $80,000", location: "San Francisco, CA", experience: "1+ years" },
  ];

  return (
    <div className="profilePageContainer min-h-screen"> 
      <Navbar />

      <div className="profileContainer mx-auto my-4 border border-gray-200 max-w-4xl bg-white shadow-lg rounded-lg p-8"> 
        <div className="flex gap-6 items-center mb-6"> 
          <div className="imageLogo">
            <img
              src={userProfile.profileImage} 
              alt="profile pic"
              className="h-20 w-20 rounded-full object-cover" 
              /> 
          </div>
          <div className="profileNameTitle">
            <h3 className="userName text-2xl font-semibold">{userProfile.name}</h3>
            <p className="userTitle text-gray-500">{userProfile.title}</p>
          </div>
        </div>

        <div className="bio mb-6">
          <p className="text-gray-700 leading-relaxed">{userProfile.bio}</p> 
        </div>

        <div className="skills mb-6">
          <h4 className="font-semibold text-lg mb-2">Skills</h4> 
          <ul className="flex flex-wrap gap-2">
            {userProfile.skills.map((skill, index) => (
              <li key={index} className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm">
                {skill}
              </li>
            ))} 
          </ul>
        </div>

        <div className="education-details mb-6">
          <h4 className="font-semibold text-lg mb-2">Education</h4>
          <p className="text-gray-600">{userProfile.education.level} - {userProfile.education.institute}</p>
          <p className="text-gray-600">Grade: {userProfile.education.grade}</p>
          <p className="text-gray-600">CGPA: {userProfile.education.cgpa}</p>
        </div>

        <div className="applications mb-6">
          <h4 className="font-semibold text-lg mb-2">Job Applications</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                className='bg-white shadow-md rounded-lg p-4 hover:bg-gray-50 transition'
                companyName={job.companyName}
                salary={job.salary}
                location={job.location}
                experience={job.experience}
              />
            ))}
          </div>
        </div>

        <div className="location">
          <p className="text-gray-500 italic">Location: {userProfile.location}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
