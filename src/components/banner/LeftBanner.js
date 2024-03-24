import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Senior Software Engineer", "Front-End Developer"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm <span className="text-designColor capitalize">Avinash Singh</span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    I have 4 plus Year of extensive experience in building web User Interface and interactive software products using HTML, CSS, JavaScript, React js, Redux and Blockchain.
                </p>
            </div>
            {/* Media */}
            <Media />
        </div>
    );
}

export default LeftBanner