import React, { useState } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import JobCarousel from "../components/JobCarousel";
import profileLogo from "../assets/images/blank-profile.jpg";
import EditIcon from "../assets/images/edit.png";
import "./profile.css";

const userProfile = {
  name: "Pinku Modi",
  title: "Full Stack Developer",
  bio: "Enthusiastic developer with a passion for creating web applications using modern frameworks and cloud technologies.",
  location: "Noida",
  skills: ["Html", "Css", "Javascript", "Frontend", "Backend", "MERN Stack", "Web Design", "AWS", "Redis"],
  education: [
    {
      level: "Higher Secondary",
      institute: "Institute of Tech",
      grade: "A",
      cgpa: 9.0,
    },
    {
      level: "Bachelor's Degree",
      institute: "University of Science",
      grade: "B+",
      cgpa: 8.5,
    },
    {
      level: "Master's Degree",
      institute: "Tech University",
      grade: "A-",
      cgpa: 9.2,
    },
  ],
  profileImage: profileLogo,
};

function Profile() {
  const jobs = [
    { title: "Software Engineer", companyName: "Tech Company", salary: "$80,000 - $100,000", location: "Remote", experience: "3+ years" },
    { title: "Data Analyst", companyName: "Data Company", salary: "$70,000 - $90,000", location: "New York, NY", experience: "2+ years" },
    { title: "Web Developer", companyName: "Web Solutions", salary: "$60,000 - $80,000", location: "San Francisco, CA", experience: "1+ years" },
    { title: "Frontend Developer", companyName: "Creative Co", salary: "$75,000 - $95,000", location: "Austin, TX", experience: "4+ years" },
    { title: "Backend Developer", companyName: "Tech Hub", salary: "$85,000 - $105,000", location: "Los Angeles, CA", experience: "5+ years" }
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditOptionsOpen, setEditOptionsOpen] = useState(false);
  const [showMoreEducation, setShowMoreEducation] = useState(false); // State for show more functionality
  const [editMode, setEditMode] = useState(false); // State for edit mode

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleEditOptions = () => {
    setEditOptionsOpen((prev) => !prev);
  };

  const toggleShowMoreEducation = () => {
    setShowMoreEducation((prev) => !prev);
    if (showMoreEducation) setEditMode(false); // Reset edit mode when collapsing
  };

  const handleEditEducation = () => {
    setEditMode(true);
    // Implement the logic to edit education details here
    alert("Edit Education Clicked"); // Placeholder for edit logic
  };

  return (
    <div className="profile-page-container">
      <Navbar />

      <div className="profile-container">
        <div className="profile-header">
          <img
            src={userProfile.profileImage}
            alt="profile pic"
            className="profile-image"
            onClick={handleImageClick} // Open modal on click
          />
          <div className="profile-info">
            <h3>
              {userProfile.name} 
              <abbr title="Click to Edit Profile" onClick={toggleEditOptions}>
                <img className="EditIcon" src={EditIcon} alt="EditIcon" />
              </abbr>
              {isEditOptionsOpen && (
                <div className="edit-options-modal">
                  <button onClick={() => alert("Edit Image Clicked")}>Edit Image</button>
                  <button onClick={() => alert("Remove Image Clicked")}>Remove Image</button>
                  <button onClick={() => alert("Edit Name Clicked")}>Edit Name</button>
                  <button onClick={() => alert("Edit Bio Clicked")}>Edit Bio</button>
                </div>
              )}
            </h3>
            <p>{userProfile.title}</p>
          </div>
        </div>

        <div className="bio">
          <p>{userProfile.bio}</p>
        </div>

        <div className="skills">
          <h4>Skills</h4>
          <ul>
            {userProfile.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="education-details">
          <h4>Education</h4>
          {userProfile.education.slice(0, 1).map((edu, index) => (
            <div key={index}>
              <p>{edu.level} - {edu.institute}</p>
              <p>Grade: {edu.grade}</p>
              <p>CGPA: {edu.cgpa}</p>
            </div>
          ))}
          {!showMoreEducation && (
            <button onClick={toggleShowMoreEducation} className="show-more-button">Show More</button>
          )}
          {showMoreEducation && (
            <>
              {userProfile.education.slice(1).map((edu, index) => (
                <div key={index + 1}>
                  <p>{edu.level} - {edu.institute}</p>
                  <p>Grade: {edu.grade}</p>
                  <p>CGPA: {edu.cgpa}</p>
                </div>
              ))}
              <button onClick={handleEditEducation} className="edit-button"><p>Update Education </p>  <img className="EditEducationIcon" src={EditIcon} alt="EditIcon" /></button>
              <button onClick={toggleShowMoreEducation} className="show-more-button">Show Less</button>
            </>
          )}
        </div>

        <div className="applications">
          <h4>Job Applications</h4>
          <JobCarousel jobs={jobs} />
        </div>

        <div className="location">
          <p>Location: {userProfile.location}</p>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {isModalOpen && (
        <>
          <div className="modal" onClick={closeModal}>
            <img src={userProfile.profileImage} alt="Enlarged profile" className="modal-image" />
            <abbr title="Close">
              <div className="close">
                <p>+</p>
              </div>
            </abbr>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default Profile;
