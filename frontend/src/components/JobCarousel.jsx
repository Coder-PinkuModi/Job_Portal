import { useState } from "react";
import JobCard from "./JobCard"; // Assuming JobCard is a separate component
import "../components/JobCarousel.css"
import PrevArrow from "../../src/assets/images/previous.png"
import NextArrow from "../../src/assets/images/next.png"

const JobCarousel = ({ jobs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; // Number of cards visible at once

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < jobs.length - visibleCards + 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : jobs.length - visibleCards
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="job-container"
        style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
      >
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            companyName={job.companyName}
            salary={job.salary}
            location={job.location}
            experience={job.experience}
          />
        ))}
      </div>

      <div className="controls">
        <abbr title="Show Previous"><button className="prev-button" onClick={handlePrev}><img src={PrevArrow} alt="<" /></button></abbr>
        <abbr title="Show Next"><button className="next-button" onClick={handleNext}><img src={NextArrow} alt=">" /></button></abbr>
      </div>
    </div>
  );
};

export default JobCarousel;
