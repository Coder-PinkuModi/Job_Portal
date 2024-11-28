import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="w-full bg-gray-800 text-white p-10 flex flex-wrap justify-between">
            {/* Contacts Section */}
            <div className="flex-1 min-w-[250px] mb-6 px-4">
                <p className="text-2xl font-semibold mb-6">Contact Us</p>
                <div className="flex flex-col gap-4">
                    <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors ">
                        <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                        <span className="hover:text-gray-400">Gmail</span>
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-color ">
                        <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                        <span className="hover:text-gray-400">LinkedIn</span>
                    </a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors ">
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                        <span className="hover:text-gray-400">GitHub</span>
                    </a>
                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors ">
                        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                        <span className="hover:text-gray-400">Instagram</span>
                    </a>
                </div>
            </div>

            {/* Links Section */}
            <div className="flex-1 min-w-[250px] mb-6 px-4">
                <p className="cursor-pointer transition-colors hover:text-gray-400 mb-2">Help</p>
                <p className="cursor-pointer transition-colors hover:text-gray-400 mb-2">Community</p>
                <p className="cursor-pointer transition-colors hover:text-gray-400 mb-2">About Us</p>
                <p className="cursor-pointer transition-colors hover:text-gray-400 mb-2">Careers</p>
                <p className="cursor-pointer transition-colors hover:text-gray-400 mb-2">Blog</p>
                <p className="text-sm mt-4">&copy; 2023. All rights reserved.</p>
            </div>

            {/* Newsletter Section */}
            <div className="flex-1 min-w-[250px] mb-6 px-4">
                <p className="text-2xl font-semibold mb-6">Subscribe to our Newsletter</p>
                <form className="flex flex-col gap-2">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="p-2 rounded-sm outline-none text-black"
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white p-2 rounded-sm cursor-pointer transition-colors hover:bg-blue-600">
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Location Section */}
            <div className="flex-1 min-w-[250px] mb-6 px-4">
                <p className="text-2xl font-semibold mb-6">Our Office</p>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6" />
                    <p className="ml-2">1234 Street Name, City, Country</p>
                </div>
            </div>
        </div>
    );
}
