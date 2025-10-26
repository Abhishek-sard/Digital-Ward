import React from "react";

const Section = () => {
    // Sample data for representatives
    const representatives = [
        {
            name: "महेश कुमार चौधरी",
            position: "वडा अध्यक्ष",
            image: "/mahesh.jpg",
            tenure: "२०७९ - २०८४"
        },
        {
            name: "तारा देवी थापा",
            position: "उप-अध्यक्ष",
            image: "/tara.jpg",
            tenure: "२०७९ - २०८४"
        },
        {
            name: "सुरेश कुमार साह",
            position: "सदस्य",
            image: "/suresh.jpg",
            tenure: "२०७९ - २०८४"
        },
        {
            name: "लक्ष्मी कुमारी यादव",
            position: "सदस्य",
            image: "/laxmi.jpg",
            tenure: "२०७९ - २०८४"
        },
    ];

    const newsItems = [
        {
            title: "नगरको वार्षिक बजेट घोषणा",
            date: "२०८१ पुष १५",
            summary: "नयाँ आर्थिक वर्षको लागि ५० करोडको बजेट घोषणा"
        },
        {
            title: "स्वच्छता अभियान सुरु",
            date: "२०८१ पुष १०",
            summary: "नगरभरि स्वच्छता अभियानको सुरुवात"
        },
        {
            title: "नयाँ सडक निर्माण कार्य",
            date: "२०८१ माघ ५",
            summary: "मुख्य बजार क्षेत्रमा नयाँ सडक निर्माण"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#006080] mb-4">
                        रामधुनी नगरपालिका
                    </h1>
                    <h2 className="text-xl text-gray-700">वडा नम्बर-१</h2>
                    <div className="w-24 h-1 bg-[#d4af37] mx-auto my-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        सुन्दर, विकसित र समृद्ध नगरको संकल्प
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

                    {/* Column 1 - Geographical Information */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#5aa1a0]">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-[#004080] rounded-full flex items-center justify-center mr-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#004080]">भौगोलिक अवस्थिति</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="text-justify text-gray-700 leading-relaxed">
                                इनरुवा नगरपालिका र इटहरी उपमहानगरपालिकाका विचमा पर्ने रामधुनी नगरपालिका
                                नक्सामा हेर्दा झण्डै डमरुको आकारमा रहेको देखिन्छ । यसअघि भद्रगाउँ सिनुवारी
                                र सिंगिया गाविसलाई मिलाएर निर्माण गरिएको रामधुनी भासी नगरपालिकालाई हाल
                                आएर गाउँ र नगरपालिकाहरु पुनरव्यवस्थित गर्ने क्रममा बक्लौरी गाविसका सबै र
                                डुम्राहा गाविसका केही वडाहरुलाई मिलाएर रामधुनी नगरपालिका निर्माण गरिएको हो ।

                                सार्वजनिक लेखा समिति

                                नेपाल सरकारको स्थानीय सरकार संचालन ऐन २०७४ को दफा २२ बमोजिम स्थानीय तहहरुमा सार्वजनिक लेखा समिति गठन गर्नुपर्ने कानुनी बाध्यत्मक व्यवस्था रहको छ । यसै गरी यस पोखरा महानगरपालिकाको लेखा समिति कार्यविधि २०७६ बमोजिम समेत सार्वजनिक लेखा समिति गठन गर्नुपर्ने कानुनी व्यवस्था गरेको छ । 
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                <h4 className="font-semibold text-[#004080] mb-2">सिमाना:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• पुर्व: इटहरी उपमहानगरपालिका</li>
                                    <li>• पश्चिम: बराह नगरपालिका</li>
                                    <li>• उत्तर: धरान उपमहानगरपालिका</li>
                                    <li>• दक्षिण: इनरुवा नगरपालिका</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - News and Information */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#5aa1a0]">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-green-800">सूचना तथा समाचार</h3>
                        </div>
                        <div className="space-y-6">
                            {newsItems.map((news, index) => (
                                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-semibold text-gray-800 hover:text-green-700 cursor-pointer">
                                            {news.title}
                                        </h4>
                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                            {news.date}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {news.summary}
                                    </p>
                                    <button className="text-green-600 hover:text-green-800 text-sm font-medium mt-2">
                                        थप पढ्नुहोस् →
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-center">
                            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200">
                                सबै समाचार हेर्नुहोस्
                            </button>
                        </div>
                    </div>

                    {/* Column 3 - Representatives */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#5aa1a0]">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-red-800">जन प्रतिनिधि</h3>
                        </div>

                        {/* Representatives Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {representatives.map((rep, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border border-red-200 hover:shadow-md transition duration-200 flex flex-col h-full"
                                >
                                    <div className="flex items-center space-x-4">
                                        {/* Image with fallback */}
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                                                <img
                                                    src={rep.image}
                                                    alt={rep.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                                <div className="w-full h-full bg-red-200 flex items-center justify-center text-red-600 font-bold text-lg hidden">
                                                    {rep.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-gray-800 text-sm leading-tight mb-1">
                                                {rep.name}
                                            </h4>
                                            <div className={`text-xs font-medium mb-1 px-2 py-1 rounded-full inline-block ${rep.position === 'वडा अध्यक्ष'
                                                    ? 'bg-red-100 text-red-700 border border-red-200'
                                                    : rep.position === 'उप-अध्यक्ष'
                                                        ? 'bg-orange-100 text-orange-700 border border-orange-200'
                                                        : 'bg-blue-100 text-blue-700 border border-blue-200'
                                                }`}>
                                                {rep.position}
                                            </div>
                                            <p className="text-xs text-gray-600">
                                                कार्यकाल: {rep.tenure}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-3 pt-3 border-t border-red-100">
                                        <button className="w-full bg-white hover:bg-red-50 text-red-600 border border-red-300 text-xs font-medium py-2 px-3 rounded-lg transition duration-200 flex items-center justify-center">
                                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            सम्पर्क गर्नुहोस्
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <h4 className="font-semibold text-yellow-800 text-sm mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                सम्पर्क जानकारी
                            </h4>
                            <p className="text-xs text-yellow-700">
                                कार्यालय: ०२१-५४३२१० | ईमेल: ward1@ramdhunimun.gov.np
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Stats Section */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-[#004080] mb-6 text-center">वडा नम्बर-१ को संक्षिप्त परिचय</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'कुल जनसंख्या', value: '१५,७८२', icon: '👥' },
                            { label: 'घरधुरी', value: '३,२५६', icon: '🏠' },
                            { label: 'वार्ड क्षेत्र', value: '५.८ वर्ग कि.मी.', icon: '🗺️' },
                            { label: 'साक्षरता दर', value: '८५%', icon: '📚' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="text-2xl mb-2">{stat.icon}</div>
                                <div className="text-2xl font-bold text-[#004080]">{stat.value}</div>
                                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;