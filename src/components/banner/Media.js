import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiWebpack, SiJavascript, SiBlockchaindotcom } from "react-icons/si";
import { Link } from 'react-scroll';
const Media = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me in
                </h2>
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
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    BEST SKILL ON
                </h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <FaReact />
                    </span>
                    <span className="bannerIcon">
                        <SiTypescript />
                    </span>
                    <span className="bannerIcon">
                        <SiTailwindcss />
                    </span>
                    <span className="bannerIcon">
                        <FaGithub />
                    </span>
                    <span className="bannerIcon">
                        <SiWebpack />
                    </span>
                    <span className="bannerIcon">
                        <SiJavascript />
                    </span>
                    <span className="bannerIcon">
                        <SiBlockchaindotcom />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Media