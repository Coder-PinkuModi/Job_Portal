import searchImage from "../assets/Search.svg"
function SearchBox() {
  return (
   <div className="searchBox flex items-center justify-center my-3 mt-5">
    <input type="search" placeholder="Search for jobs" name="jobsearch" id="jobsearch" className="font-sans text-lg text-black rounded-s-full p-3 w-2/3 px-4"/>
    <img src={searchImage} alt="searchImg" className="bg-[#d94141e3] hover:bg-[#57b546] transition-colors duration-300 ease-in-out rounded-e-full cursor-pointer h-[52px] w-12 px-2 py-3"/>
   </div>
  )
}

export default SearchBox