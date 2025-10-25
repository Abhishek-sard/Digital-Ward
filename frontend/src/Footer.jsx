import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaApple,
  FaGooglePlay,
  FaShieldAlt,
  FaMobileAlt,
  FaUniversalAccess,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaIdCard,
  FaHome,
  FaBaby,
  FaFileContract,
  FaReceipt,
  FaTint,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear() + 57;

  return (
    <footer className="bg-gradient-to-r from-[#1a2e4a] to-[#2c3e50] text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-[#ffcc00] text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-[#dc143c]">
              नगरपालिका परिचय
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              यो नगरपालिका स्थानीय स्तरमा नागरिकलाई उत्कृष्ट सेवा प्रदान गर्न समर्पित छ।
              हाम्रो लक्ष्य पारदर्शी, कुशल र जवाफदेह स्थानीय सरकार निर्माण गर्नु हो।
            </p>
            <div className="flex items-center gap-3">
              <div className="flex w-28 h-5 rounded overflow-hidden">
                <div className="flex-1 bg-[#DC143C]"></div>
                <div className="flex-1 bg-[#003366]"></div>
                <div className="flex-1 bg-white"></div>
              </div>
              <span className="text-sm">जननी जन्मभूमिश्च स्वर्गादपि गरीयसी</span>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[#ffcc00] text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-[#dc143c]">
              तुरुन्त सेवाहरू
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2 hover:text-[#ffcc00] cursor-pointer transition">
                <FaIdCard /> नागरिकताको लागि आवेदन
              </li>
              <li className="flex items-center gap-2 hover:text-[#ffcc00] cursor-pointer transition">
                <FaHome /> जग्गा दर्ता
              </li>
              <li className="flex items-center gap-2 hover:text-[#ffcc00] cursor-pointer transition">
                <FaBaby /> जन्म दर्ता
              </li>
              <li className="flex items-center gap-2 hover:text-[#ffcc00] cursor-pointer transition">
                <FaFileContract /> व्यवसाय दर्ता
              </li>
              <li className="flex items-center gap-2 hover:text-[#ffcc00] cursor-pointer transition">
                <FaReceipt /> कर तिर्नुहोस्
              </li>
              <li className="flex items-center gap-2 hover:text-[#ffcc00] cursor-pointer transition">
                <FaTint /> पानी जडान
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[#ffcc00] text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-[#dc143c]">
              सम्पर्क जानकारी
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#ffcc00] mt-1" />
                नगरपालिका कार्यालय, मुख्य सडक, नेपाल
              </li>
              <li className="flex items-start gap-2">
                <FaPhone className="text-[#ffcc00] mt-1" />
                +९७७-१-४२११२३४, ४२११२३५
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="text-[#ffcc00] mt-1" />
                info@nagarpalika.gov.np
              </li>
              <li className="flex items-start gap-2">
                <FaClock className="text-[#ffcc00] mt-1" />
                आइतबार - शुक्रबार: १०:०० बजे - ५:०० बजे <br /> शनिबार: १०:०० बजे - २:०० बजे
              </li>
            </ul>

            <div className="flex gap-4 mt-4 text-lg">
              <a href="#" className="hover:text-[#ffcc00]">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#ffcc00]">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-[#ffcc00]">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-[#ffcc00]">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-[#ffcc00] text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-[#dc143c]">
              सूचना पत्रिका
            </h3>
            <p className="text-gray-300 mb-4">
              नगरपालिकाको नयाँ समाचार र सूचनाहरू इमेलमा प्राप्त गर्नुहोस्।
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("तपाईंलाई नगरपालिकाको सूचना पत्रिकाको लागि सब्सक्राइब गरिएको छ। धन्यवाद!");
                e.target.reset();
              }}
              className="flex flex-col sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="तपाईंको इमेल ठेगाना"
                className="px-3 py-2 rounded-l-md text-black flex-1 mb-2 sm:mb-0"
              />
              <button
                type="submit"
                className="bg-[#ffcc00] text-black px-4 py-2 rounded-r-md font-semibold hover:bg-[#e6b800] transition"
              >
                सब्सक्राइब गर्नुहोस्
              </button>
            </form>

            <div className="mt-5">
              <h4 className="text-white mb-2 font-medium">हाम्रो मोबाइल एप</h4>
              <div className="flex gap-3">
                <button className="bg-black text-white px-3 py-2 rounded flex items-center gap-2">
                  <FaApple /> App Store
                </button>
                <button className="bg-black text-white px-3 py-2 rounded flex items-center gap-2">
                  <FaGooglePlay /> Play Store
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Middle */}
        <div className="bg-black/30 py-4 rounded-md mb-8">
          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-300">
            <a href="#" className="hover:text-[#ffcc00]">
              गोपनीयता नीति
            </a>
            <a href="#" className="hover:text-[#ffcc00]">
              सेवाका सर्तहरू
            </a>
            <a href="#" className="hover:text-[#ffcc00]">
              साइटम्याप
            </a>
            <a href="#" className="hover:text-[#ffcc00]">
              अक्समको लागि
            </a>
            <a href="#" className="hover:text-[#ffcc00]">
              सुझाव पेटिका
            </a>
            <a href="#" className="hover:text-[#ffcc00]">
              कार्यालयीन समय
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-400 text-sm border-t border-white/10 pt-4">
          <p>© {currentYear} नगरपालिका, नेपाल। सर्वाधिकार सुरक्षित।</p>
          <p>@Powered by Abhishek Sardar</p>
          <div className="flex gap-3 flex-wrap justify-center">
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded">
              <FaShieldAlt className="text-[#ffcc00]" /> सुरक्षित वेबसाइट
            </div>
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded">
              <FaMobileAlt className="text-[#ffcc00]" /> मोबाइल मैत्री
            </div>
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded">
              <FaUniversalAccess className="text-[#ffcc00]" /> सबैको लागि पहुँच
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
