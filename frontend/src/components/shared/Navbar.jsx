import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { USERAUTHENDPOINT } from "../../utils/auth.endpoints.js";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { setUserStore } from "../../store/User.AuthSlice.js";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const userFromStore = useSelector((state) => state.userAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserProfile = async () => {
            
            const cookies = document.cookie.split(";");

            const authTokenCookie = cookies.find((cookie) =>
                cookie.trim().startsWith("auth_token=")
            );

            if (authTokenCookie) {
                try {
                    if (!userFromStore.id) {
                        const response = await axios.get(`${USERAUTHENDPOINT}/profile`, {
                            withCredentials: true,
                        });

                        if (response.status === 200) {
                            const userData = response.data;
                            console.log("User profile fetched successfully:", userData);
                            setUser(userData);
                            dispatch(setUserStore(response.data));
                        }
                    } else {
                        setUser(userFromStore);
                    }
                } catch (error) {
                    console.error("Error fetching user profile:", error);
                }
            }
        };

        fetchUserProfile();
    }, [dispatch, userFromStore]);

    return (
        <div className="flex justify-between items-center mx-auto h-16 px-5 sm:px-20 relative">
            <div>
                <h1 className="text-3xl font-bold cursor-pointer">
                    Job<span className="text-[#3B82F6]">Portal</span>
                </h1>
            </div>
            
            
            <div className="hidden sm:flex gap-5 items-center">
                <ul className="flex gap-8 font-medium items-center text-lg">
                    <li className="cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="/jobs">Jobs</Link>
                    </li>
                        {/* <li className="cursor-pointer"><Link to="/browse">Browse</Link></li> */}
                </ul>

                {!user ? (
                    <div className="flex gap-5">
                        <Link to="/login">
                            <Button variant="outline" >Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="bg-[#4150d9e3] hover:bg-[#515dc8] border-none">Sign Up</Button>
                        </Link>
                    </div>
                ) : (
                    <Popover>
                        <PopoverTrigger>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent>
                           <Link to='/profile' className="hover:underline"> {user.name} <br /></Link>
                            <Button variant="link">Logout</Button>
                        </PopoverContent>
                    </Popover>
                )}
            </div>

            {/* Hamburger Menu Icon */}
            <div className="sm:hidden flex items-center">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className=" border-2 border-[grey] rounded-md p-2 flex flex-col justify-center items-center space-y-1"
                >
                    <span className="block w-6 h-0.5 bg-sky-600"></span>
                    <span className="block w-6 h-0.5 bg-sky-600"></span>
                    <span className="block w-6 h-0.5 bg-sky-600"></span>
                </button>
            </div>

            {/* Sliding Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 right-5 w-3/4 bg-white shadow-lg rounded-lg border border-gray-300 z-50 sm:hidden">
                    <ul className="flex flex-col text-center text-black divide-y divide-gray-300">
                        <li className="py-4 cursor-pointer hover:bg-gray-100">
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        </li>
                        <li className="py-4 cursor-pointer hover:bg-gray-100">
                            <Link to="/jobs" onClick={() => setIsMenuOpen(false)}>Jobs</Link>
                        </li>
                        <li className="py-4 cursor-pointer hover:bg-gray-100">
                            <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                        </li>
                        <li className="py-4 cursor-pointer hover:bg-gray-100">
                            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;