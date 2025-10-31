import React from "react";

const blogs = [
  {
    date: "June 15, 2023",
    title: "बजेटको उद्देश्य र प्राथमिकताहरू निर्धारण गर्ने",
    description:
      "यस ब्लग पोस्टमा, हामी बजेटको उद्देश्य र प्राथमिकताहरू निर्धारण गर्ने महत्त्वपूर्ण कदमहरू अन्वेषण गर्नेछौं। प्रभावकारी वित्तीय योजना बनाउनका लागि स्पष्ट लक्ष्यहरू सेट गर्न सिक्नुहोस्।",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    date: "June 10, 2023",
    title: "रामधुनी नगरपालिकाको बैठक सम्बन्धी विवरण",
    description:
      "यस ब्लग पोस्टमा, हामी हालै सम्पन्न रामधुनी नगरपालिकाको बैठकको विस्तृत विवरण प्रदान गर्नेछौं। छलफल गरिएका मुख्य विषयहरू र निर्णयहरू पत्ता लगाउनुहोस्।",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    date: "June 5, 2023",
    title: "सूचना प्रविधिको अभियान, डिजिटल नेपाल को निर्माण",
    description:
      "डिजिटल नेपाल अभियानले सरकारी सेवा, शिक्षा, स्वास्थ्य, कृषि, व्यापार, र संचार जस्ता क्षेत्रहरूलाई प्रविधिमैत्री बनाउन मद्दत पुर्‍याइरहेको छ। अब नागरिकले घरमै बसेर अनलाइनमार्फत विभिन्न सेवा प्राप्त गर्न सक्छन् ।",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    date: "May 28, 2023",
    title: "The Power of JavaScript ES6+ Features",
    description:
      "Dive into the modern JavaScript features that have revolutionized how we write code, from arrow functions to async/await.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    date: "May 20, 2023",
    title: "Optimizing Website Performance",
    description:
      "Learn practical techniques to improve your website's loading speed and overall performance for better user experience and SEO.",
    image:
      "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    date: "May 12, 2023",
    title: "Mobile-First Design Principles",
    description:
      "Understand why mobile-first design is crucial in today's digital landscape and how to implement it effectively in your projects.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

const Blogs = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">लेखहरु</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
           हाम्रो टोलीबाट नवीनतम अन्तर्दृष्टि, सुझाव र कथाहरू पत्ता लगाउनुहोस्
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <div className="text-blue-500 font-medium mb-2">
                  {blog.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {blog.description}
                </p>
                <a
                  href="#"
                  className="flex items-center text-blue-500 font-semibold hover:text-blue-700"
                >
                  थप पढ्नुहोस् <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <footer className="text-center mt-12 border-t border-gray-200 pt-6 text-gray-500 text-sm">
          &copy; 2023 Blog Page. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Blogs;
