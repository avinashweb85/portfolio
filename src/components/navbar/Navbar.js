import React, { useState } from 'react';
// import logo from "../../assests/logo.png";
import { logo } from '../../assets/index'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from '../../constants';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
            <div>
                <img src={logo} alt="logo" className='w-20' />
            </div>
            <div>
                <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
                    {navLinksdata.map(({ _id, title, link }) => (
                        <li
                            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                            key={_id}
                        >
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <span
                    onClick={() => setShowMenu(!showMenu)}
                    className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
                >
                    <FiMenu />
                </span>
                {showMenu && (
                    <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                        <div className="flex flex-col gap-8 py-2 relative">
                            <div>
                                <img className="w-32" src={logo} alt="logo" />
                                <p className="text-sm text-gray-400 mt-2">
                                    I have 4 plus Year of extensive experience in building web User Interface and interactive software products using HTML, CSS, JavaScript, React js, Redux and Blockchain.
                                </p>
                            </div>
                            <ul className="flex flex-col gap-4">
                                {navLinksdata.map((item) => (
                                    <li
                                        key={item._id}
                                        className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                                    >
                                        <Link
                                            onClick={() => setShowMenu(false)}
                                            activeClass="active"
                                            to={item.link}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <span
                                onClick={() => setShowMenu(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                            >
                                <MdClose />
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar