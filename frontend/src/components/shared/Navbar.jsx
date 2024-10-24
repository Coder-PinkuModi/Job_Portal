import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { USERAUTHENDPOINT } from "../../utils/auth.endpoints.js"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { setUserStore } from "../../store/User.AuthSlice.js"

const Navbar = () => {
    const [user, setUser] = useState(null);
    const userFromStore = useSelector((state) => state.userAuth);
    console.log("userFromStore", userFromStore)
    const dispatch = useDispatch()

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
        <div className="flex justify-between items-center mx-auto h-16 px-20 ">
            <div>
                <h1 className="text-3xl font-bold cursor-pointer">
                    Job<span className="text-[#3B82F6]">Portal</span>
                </h1>
            </div>
            <div className="flex gap-5">
                <div className="flex items-center">
                    <ul className="flex gap-8 font-medium items-center text-lg">
                        <li className="cursor-pointer">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="cursor-pointer"><Link to="/jobs">Jobs</Link></li>
                        {/* <li className="cursor-pointer"><Link to="/browse">Browse</Link></li> */}
                    </ul>
                </div>

                {!user ? (
                    <div className="flex gap-5">
                        <Link to="/login">
                            <Button variant="outline">Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="bg-[#4150d9e3] hover:bg-[#515dc8]">
                                Sign Up
                            </Button>
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
        </div>
    )
}

export default Navbar
