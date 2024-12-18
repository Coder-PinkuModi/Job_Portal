import Navbar from "../../components/shared/Navbar.jsx"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { USERAUTHENDPOINT } from "../../utils/auth.endpoints.js"

const SignUp = () => {
    const [role, setRole] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        role: "",
        password: "",
        confirmPassword: "",
        profile: ""
    })

    const handleChangeForm = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleChangeRole = (event) => {
        setRole(event.target.value)
        setForm({
            ...form,
            role: event.target.value
        })
    }

    const handleProfileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
            setForm({
                ...form,
                profile: file
            });
        }
    }
    const handleSubmitChange = async (event) => {
        event.preventDefault();
        setSubmitting(true);

        const formData = new FormData();
        formData.append("fullName", form.fullName);
        formData.append("email", form.email);
        formData.append("phoneNumber", form.phoneNumber);
        formData.append("role", form.role);
        formData.append("password", form.password);
        formData.append("confirmPassword", form.confirmPassword);
        formData.append("profile", form.profile);

        try {
            const response = await axios.post(`${USERAUTHENDPOINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            (response.data?.success) ? toast.success("Signup successfull") : toast.error("Signup failed: ", response.data.message);

        } catch (error) {
            console.error("Signup failed:", error.response?.data?.message || "An unexpected error occurred");
            toast.error(`Signup failed: ${error.response?.data?.message}`);
        } finally {
            setSubmitting(false);

            setForm({
                fullName: "",
                email: "",
                phoneNumber: "",
                role: "",
                password: "",
                confirmPassword: "",
                profile: ""
            });

            setRole("");
            setProfileImage(null);

        }
    };


    return (
        <div className="containerSignUp w-screen">
            <div className="navbar items-center w-screen flex-shrink-0">
                <Navbar />
            </div>
            <div className="h-screen w-screen flex justify-center items-center relative mt-14">
                <div className="flex flex-col gap-8 border border-gray-500 rounded-lg p-10 w-1/2">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                    <form method="POST" className="flex flex-col gap-4 mt-3">
                        <Label htmlFor="name" className="relative top-2">Full Name</Label>
                        <Input type="text" id="name" placeholder="Enter your full name" name="fullName" onChange={handleChangeForm} value={form.fullName} required />

                        <Label htmlFor="email" className="relative top-2">Enter email</Label>
                        <Input type="email" id="email" placeholder="Enter your email address" name="email" onChange={handleChangeForm} value={form.email} required />

                        <Label htmlFor="phoneNumber" className="relative top-2">Phone number</Label>
                        <Input type="text" id="phoneNumber" placeholder="Enter your phone number" name="phoneNumber" onChange={handleChangeForm} value={form.phoneNumber} required />

                        <Label htmlFor="role" className="relative top-2">Select Role</Label>
                        <select
                            id="role"
                            name="role"
                            value={role}
                            onChange={handleChangeRole}
                            className="border p-2 rounded cursor-pointer"
                            required
                        >
                            <option value="">Select your role</option>
                            <option value="recruiter">Recruiter</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>

                        <Label htmlFor="password" className="relative top-2">Enter password</Label>
                        <Input type="password" id="password" placeholder="Enter your password" name="password" onChange={handleChangeForm} value={form.password} required />

                        <Label htmlFor="confirmPassword" className="relative top-2">Confirm password</Label>
                        <Input type="password" id="confirmPassword" placeholder="Confirm your password" name="confirmPassword" onChange={handleChangeForm} value={form.confirmPassword} required />

                        <div className="flex gap-5 items-center relative top-3">
                            <Label htmlFor="profile">Profile Image</Label>
                            <Input
                                type="file"
                                id="profile"
                                name="profile"
                                accept="image/*"
                                className="p-2 w-1/3 bg-[#d6d3d3f7] cursor-pointer"
                                onChange={handleProfileChange}
                                required
                            />
                        </div>

                        {profileImage && (
                            <div className="relative top-3">
                                <img src={profileImage} alt="Profile Preview" className="w-24 h-24 rounded-full mt-2 border" />
                            </div>
                        )}

                        {!submitting ? (
                            <Button type="submit" className="relative top-6 bg-[#4150d9e3] hover:bg-[#515dc8]" onClick={(event) => handleSubmitChange(event)}>Sign Up</Button>
                        ) : (
                            <Button type="submit" className="relative top-6 bg-[#4150d9e3] hover:bg-[#515dc8]" disabled>Signing up...</Button>
                        )}
                    </form>

                    <span className="mt-4 text-center">Already have an account? <Link to="/login" className="text-[#3b82f6] hover:text-[#d4b379]">Login</Link></span>
                </div>

                <ToastContainer />
            </div>
        </div>
    )
}

export default SignUp