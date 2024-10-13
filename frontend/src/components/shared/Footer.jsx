import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className='footer w-screen h-auto bg-[#383838] text-white px-10 py-10 flex justify-between'>
            {/* Contacts Section */}
            <div className="contacts-footer">
                <p className="text-3xl font-semibold mb-6">Contact Us</p>
                <div className="flex gap-5">
                    <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link flex items-center gap-2 transition">
                        <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7 icon" />
                        <span>Gmail</span>
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link flex items-center gap-2 transition">
                        <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7 icon" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link flex items-center gap-2 transition">
                        <FontAwesomeIcon icon={faGithub} className="w-7 h-7 icon" />
                        <span>GitHub</span>
                    </a>
                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link flex items-center gap-2 transition">
                        <FontAwesomeIcon icon={faInstagram} className="w-7 h-7 icon" />
                        <span>Instagram</span>
                    </a>
                </div>
            </div>

            {/* Links Section */}
            <div className="content-forFooter flex flex-col gap-2">
                <p className="hover:text-gray-300 transition cursor-pointer">Help</p>
                <p className="hover:text-gray-300 transition cursor-pointer">Community</p>
                <p className="hover:text-gray-300 transition cursor-pointer">About Us</p>
                <p className="hover:text-gray-300 transition cursor-pointer">Careers</p>
                <p className="hover:text-gray-300 transition cursor-pointer">Blog</p>
                <p className="text-sm mt-4">© 2023. All rights reserved.</p>
            </div>

            {/* Newsletter Section */}
            <div className="newsletter-footer">
                <p className="text-lg font-semibold mb-4">Subscribe to our Newsletter</p>
                <form className="flex flex-col gap-2">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="px-3 py-2 rounded-sm focus:outline-none text-black"
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white py-2 px-5 rounded-sm hover:bg-blue-600 transition">
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Location Section */}
            <div className="location-footer">
                <p className="text-lg font-semibold mb-4">Our Office</p>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 icon" />
                    <p className="ml-2">1234 Street Name, City, Country</p>
                </div>
            </div>
        </div>
    )
}
