import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import searchImage from "../assets/Search.svg";

function SearchBox() {

  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();
  const handleChangeSeach = (e) => {
    setSearchKeyword(e.target.value);
  };


  const handleSubmitSearch = (keyword) => {
    if (!keyword.trim()) return;
    navigate(`/browse/?search=${keyword}`);
    setSearchKeyword('');
  }

  return (
    <div className="searchBox flex items-center justify-center my-3 mt-5">
      <input type="search" placeholder="Search for jobs" name="jobsearch" id="jobsearch" className="font-sans text-lg text-black rounded-s-full p-3 w-2/3 px-4" value={searchKeyword} onChange={handleChangeSeach} />
      <img src={searchImage} alt="searchImg" className="bg-[#d94141e3] hover:bg-[#57b546] transition-colors duration-300 ease-in-out rounded-e-full cursor-pointer h-[52px] w-12 px-2 py-3" onClick={() => handleSubmitSearch(searchKeyword)} />
    </div>
  )
}

export default SearchBox