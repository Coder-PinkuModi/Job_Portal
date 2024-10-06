import React from 'react';
import './JobCard.css';
import appleLogo from '../assets/images/apple-logo.png';

function JobCard({ title, companyName, salary, location, experience, className, style }) {
    return (
        <div className={`job-card ${className}`} style={style}>
            <div className="image">
                <img src={appleLogo} alt="Company Logo" />
            </div>
            <div className="title">
                <h3>{title}</h3>
                <p>{companyName}</p>
            </div>
            <div className="salary">{salary}</div>
            <div className="location">{location}</div>
            <div className="experience">{experience}</div>
        </div>
    );
}

export default JobCard;





