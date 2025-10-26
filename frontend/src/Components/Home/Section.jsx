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
            image:  "/tara.jpg",
            tenure: "२०७९ - २०८४"
        }
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
                    <h1 className="text-4xl font-bold text-[#004080] mb-4">
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
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#004080]">
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
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-600">
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
                    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-600">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-red-800">जन प्रतिनिधि</h3>
                        </div>
                        <div className="space-y-6">
                            {representatives.map((rep, index) => (
                                <div key={index} className="text-center bg-red-50 rounded-lg p-4 border border-red-200 hover:shadow-md transition duration-200">
                                    {/* Use actual image */}
                                    <img
                                        src={rep.image}
                                        alt={rep.name}
                                        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                                    />
                                    <h4 className="font-bold text-gray-800 text-lg">{rep.name}</h4>
                                    <h6 className="text-red-600 font-medium mb-1">{rep.position}</h6>
                                    <p className="text-sm text-gray-600 mb-2">कार्यकाल: {rep.tenure}</p>
                                    <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                                        सम्पर्क गर्नुहोस्
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
