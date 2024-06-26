import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={contactImg}
                alt="contactImg"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">Avinash Singh</h3>
                <p className="text-lg font-normal text-gray-400">
                    Front-end Developer
                </p>
                <p className="text-base text-gray-400 tracking-wide">
                    I have 4 plus Year of extensive experience in building web User Interface and interactive software products using HTML, CSS, JavaScript, React js, Redux and Blockchain.
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Email: <span className="text-lightText">avis.817s@gmail.com</span>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <a href="https://www.facebook.com/profile.php?id=100004791186880" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                    </span>
                    <span className="bannerIcon">
                        <a href="https://www.linkedin.com/in/avinash-singh85/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </span>
                    <span className="bannerIcon">
                        <a href="https://github.com/avinashweb85" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ContactLeft