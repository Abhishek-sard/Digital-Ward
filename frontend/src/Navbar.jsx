import React, { useState, useEffect } from "react";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLanguage,
    FaSitemap,
    FaQuestionCircle,
    FaUser,
    FaBullhorn,
    FaHome,
    FaInfoCircle,
    FaChevronDown,
    FaConciergeBell,
    FaNewspaper,
    FaDownload,
    FaProjectDiagram,
    FaPhoneAlt,
    FaSearch,
    FaBars,
} from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [langNepali, setLangNepali] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []);


    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="w-full font-sans">
            {/* Top Bar */}
            <div className="bg-[#003366] text-white text-sm py-2">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-4 flex-wrap">
                    <div className="hidden md:flex gap-6">
                        <span className="flex items-center gap-2">
                            <FaPhone /> +977-1-1234567
                        </span>
                        <span className="flex items-center gap-2">
                            <FaEnvelope /> info@ramdhuni1.gov.np
                        </span>
                        <span className="flex items-center gap-2">
                            <FaMapMarkerAlt />नगरपालिका कार्यालय, मुख्य सडक, रामधुनी - १, सुनसरी, नेपाल
                        </span>
                    </div>
                    <div className="flex gap-5 mt-1 md:mt-0">
                        <button
                            onClick={() => setLangNepali(!langNepali)}
                            className="hover:text-yellow-400 transition"
                        >
                            <FaLanguage /> {langNepali ? "नेपाली" : "English"}
                        </button>
                        <a href="#" className="hover:text-yellow-400 transition">
                            <FaSitemap /> Site Map
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition">
                            <FaQuestionCircle /> Help
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white shadow-md py-1">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    <div className="flex items-center gap-3">
                        <img
                            src="/nagarpalikalogo.jpg"
                        />
                        <div>
                            <h1 className="text-xl font-semibold text-[#003366]">
                                रामधुनी नगरपालिका वडा नम्बर १, झुम्का
                            </h1>
                            <p className="text-sm text-gray-700">
                                कोशी प्रदेश, सुनसरी, नेपाल
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-3 md:mt-0">
                        <button className="border border-[#003366] text-[#003366] font-semibold px-4 py-2 rounded hover:shadow transition">
                            <FaUser className="inline mr-1" /> Citizen Login
                        </button>
                        <button className="bg-yellow-400 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition">
                            <FaBullhorn className="inline mr-1" /> Report Issue
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Navigation */}
            <nav className="bg-gradient-to-r from-[#003366] to-[#dc143c] text-white">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-4 relative">
                    {/* Nav Links */}
                    <ul
                        className={`flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-[#003366] md:bg-transparent transition-all duration-300 ${menuOpen ? "flex" : "hidden md:flex"
                            }`}
                    >
                        <li>
                            <a href="#" className="block px-5 py-3 hover:bg-white/20 transition">
                                <FaHome className="inline mr-2" /> गृहपृष्ठ
                            </a>
                        </li>

                        <li className="group relative">
                            <a
                                href="#"
                                className="block px-5 py-3 hover:bg-white/20 transition flex items-center"
                            >
                                <FaInfoCircle className="mr-2" /> परिचय
                                <FaChevronDown className="ml-2" />
                            </a>
                            <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-md min-w-[220px] z-50">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    परिचय
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    मेयर र अधिकारीहरू
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    संगठन संरचना
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    दृष्टि र मिशन
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    इतिहास
                                </a>
                            </div>
                        </li>

                        <li className="group relative">
                            <a
                                href="#"
                                className="block px-5 py-3 hover:bg-white/20 transition flex items-center"
                            >
                                <FaConciergeBell className="mr-2" /> सेवाहरू
                                <FaChevronDown className="ml-2" />
                            </a>
                            <div className="absolute left-0 hidden group-hover:block bg-white text-black shadow-md min-w-[220px] z-50">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    नागरिकता प्रमाणपत्र
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    जन्म दर्ता
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    सम्पत्ति दर्ता
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    व्यवसाय इजाजतपत्र
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    कर तिर्नुहोस्
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    पानी जडान
                                </a>
                            </div>
                        </li>

                        <li>
                            <a href="#" className="block px-5 py-3 hover:bg-white/20 transition">
                                <FaNewspaper className="inline mr-2" /> समाचार र कार्यक्रमहरू
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-5 py-3 hover:bg-white/20 transition">
                                <FaDownload className="inline mr-2" /> डाउनलोड
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-5 py-3 hover:bg-white/20 transition">
                                <FaProjectDiagram className="inline mr-2" /> परियोजनाहरू
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-5 py-3 hover:bg-white/20 transition">
                                <FaPhoneAlt className="inline mr-2" /> सम्पर्क
                            </a>
                        </li>
                    </ul>


                    {/* Search Box */}
                    <div className="hidden md:flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-3 py-2 rounded-l-md border border-white outline-none text-white bg-transparent placeholder-white"
                        />
                        <button className="bg-yellow-500 px-4 py-4 rounded-r-md text-white hover:bg-yellow-600 transition">
                            <FaSearch />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div
                        className="text-2xl md:hidden cursor-pointer py-3"
                        onClick={toggleMenu}
                    >
                        <FaBars />
                    </div>
                </div>
            </nav>

        
            {/* imageSection */}
            <div className="relative w-full h-[55vh] overflow-hidden">
                {/* Slider Container */}
                <div
                    className={`flex transition-transform duration-1000 ease-in-out`}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {/* Slide 1 */}
                    <img
                        src="/image.jpg"
                        className="w-full h-[55vh] object-cover flex-shrink-0"
                    />
                    {/* Slide 2 */}
                    <img
                        src="/image1.jpg"
                        alt="Slide 2"
                        className="w-full h-[55vh] object-cover flex-shrink-0"
                    />
                    {/* Slide 3 */}
                    <img
                        src="/image2.jpg"
                        alt="Slide 3"
                        className="w-full h-[55vh] object-cover flex-shrink-0"
                    />
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
                    {[0, 1, 2].map((index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-yellow-100" : "bg-white/70"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Navbar;

