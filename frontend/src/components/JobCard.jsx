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
            <div className='apply-button right-3 absolute bottom-2'>
                <a href="#" className="bg-[#2a55f4] hover:bg-[#497ff5] p-2 rounded-full inline-block transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right transition-colors duration-300" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </a>

            </div>
        </div>
    );
}

export default JobCard;
