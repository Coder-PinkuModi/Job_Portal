import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { setUserStore } from "../../store/User.AuthSlice.js";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/Navbar.jsx";
import { USERAUTHENDPOINT } from "../../utils/auth.endpoints";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [submitting, setSubmitting] = useState(false);
    const [role, setRole] = useState("user");
    const [form, setForm] = useState({
        email: "",
        password: "",
        role: "user",
    });

    const handleChangeForm = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
        setForm({
            ...form,
            role: event.target.value
        });
    };

    const handleSubmitChange = async (event) => {
        event.preventDefault();
        if (!form.email || !form.password) {
            toast.error("Please fill in all fields");
            return;
        }
        
        setSubmitting(true);

        try {
            const response = await axios.post(`${USERAUTHENDPOINT}/login`, {
                email: form.email,
                password: form.password,
                role: form.role,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            console.log("Login successful:", response);
            toast.success(`${response.data.message}`);

            dispatch(setUserStore(response.data));

            navigate("/"); // navigate user to home page after login

            setForm({
                email: "",
                password: "",
                role: "user",
            });

        } catch (error) {
            console.log("Login failed:", error);
            toast.error(`${error.response.data.message}`);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center">
            <div className="navbar items-center w-screen flex-shrink-0">
                <Navbar />
            </div>

            <div className="form flex flex-col justify-center items-center w-screen mt-10">
                <div className="flex flex-col gap-8 border border-gray-500 rounded-lg p-10 w-1/2">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <form action="" method="POST" className="flex flex-col gap-4 mt-3">
                        <Label htmlFor="email" className="relative top-2">Enter email</Label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Enter your email address"
                            name="email"
                            onChange={handleChangeForm}
                        />

                        <Label htmlFor="password" className="relative top-2">Enter password</Label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            name="password"
                            onChange={handleChangeForm}
                        />

                        <div className="flex items-center gap-4 top-2">
                            <Label htmlFor="role">Role:</Label>

                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="user"
                                    name="role"
                                    value="user"
                                    checked={role === "user"}
                                    onChange={handleRoleChange}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="user" className="cursor-pointer">User</Label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="admin"
                                    name="role"
                                    value="admin"
                                    checked={role === "admin"}
                                    onChange={handleRoleChange}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="admin" className="cursor-pointer">Admin</Label>
                            </div>
                        </div>

                        <span className="relative top-3">
                            <Link to="/forgot-password" className="text-[#3e4ee1] hover:text-[#d4b379f3] text-1xl">
                                Forgot password?
                            </Link>
                        </span>

                        {!submitting ? (
                            <Button type="submit" className="relative top-6 bg-[#4150d9e3] hover:bg-[#515dc8]" onClick={handleSubmitChange}>
                                Login
                            </Button>
                        ) : (
                            <Button type="submit" className="relative top-6 bg-[#4150d9e3] hover:bg-[#515dc8]" disabled>
                                Logging in...
                            </Button>
                        )}
                    </form>

                    <p className="mt-4 text-center">
                        Dont have an account?{" "}
                        <Link to="/signup" className="text-[#3b82f6] hover:text-[#d4b379]">
                            Sign up
                        </Link>
                    </p>

                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;