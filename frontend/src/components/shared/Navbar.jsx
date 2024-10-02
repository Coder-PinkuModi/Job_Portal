import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const Navbar = () => {
    const [user, setUser] = useState(null)

    return (
        <div className="flex justify-between items-center mx-auto h-16 px-20">
            <div>
                <h1 className='text-3xl font-bold cursor-pointer'>Job<span className='text-[#3B82F6]'>Portal</span></h1>
            </div>
            <div className="flex gap-5">
                <div className="flex items-center">
                    <ul className="flex gap-8 font-medium items-center text-lg">
                        <li className="cursor-pointer"><Link to="/">Home</Link></li>
                        <li className="cursor-pointer">Jobs</li>
                        <li className="cursor-pointer">Browse</li>
                    </ul>
                </div>

                {!user ? (
                    <div className="flex gap-5">
                        <Link to="/login">
                            <Button variant="outline">
                                Login
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button className='bg-[#4150d9e3] hover:bg-[#515dc8]'>
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <Popover>
                        <PopoverTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent>
                            Bio goes here<br />
                            <Button variant="link">Logout</Button>
                        </PopoverContent>
                    </Popover>
                )}
            </div>
        </div>
    )
}

export default Navbar
