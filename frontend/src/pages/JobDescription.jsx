import Navbar from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const JobDescription = () => {
    return (
        <div className="w-screen h-screen flex flex-col ">
            <div>
                <Navbar />
            </div>

            <div className="flex-grow flex justify-center py-10">
                <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
                    
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">Web Developer</h1>
                        <Button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                            Apply Now
                        </Button>
                    </div>

                    <div className="space-y-6">
                        
                        <div className="text-gray-700 leading-relaxed">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque animi natus ipsa neque debitis. Totam quasi nesciunt praesentium? Consequuntur provident quos commodi eos, eaque nam? Cupiditate dolore accusamus inventore error consequuntur ut quisquam dignissimos nihil assumenda aliquam quaerat vitae magnam earum alias, illo iusto corrupti, corporis et optio. Atque?</p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-md">11 LPA</Badge>
                            <Badge className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md">Full Time</Badge>
                            <Badge className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md">Software Engineer</Badge>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills Required:</h2>
                            <div className="flex flex-wrap gap-3">
                                <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md">JavaScript</Badge>
                                <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md">React</Badge>
                                <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md">Node.js</Badge>
                                <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md">CSS</Badge>
                                <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md">RESTful APIs</Badge>
                            </div>
                        </div>

                        <div className="text-gray-500 space-y-2">
                            <p><strong>Company:</strong> Tech Company</p>
                            <p><strong>Experience Required:</strong> 3+ years</p>
                            <p><strong>Total Applications:</strong> 1000 applications</p>
                        </div>

                        <div className="flex items-center justify-between border-t pt-6">
                            <div className="text-gray-800 font-medium">
                                <p><strong>Job Creator:</strong> John Doe</p> 
                            </div>
                            <Button className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600">
                                Follow
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default JobDescription;
