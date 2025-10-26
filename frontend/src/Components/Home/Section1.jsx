import React from 'react';

const Section1 = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen py-10 px-6 md:px-16 font-[Poppins]">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl border border-gray-200 p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#004080] mb-6 border-b-2 border-[#004080] pb-2">
          रामधुनी वडा नम्बर-१ संक्षिप्त विवरण
        </h2>

        <div className="space-y-6 text-[17px] leading-relaxed text-gray-800">
          <section>
            <h3 className="text-xl font-semibold text-[#004080] mb-2">भौगोलिक अवस्थिति</h3>
            <p className="text-justify">
              इनरुवा नगरपालिका र इटहरी उपमहानगरपालिकाका विचमा पर्ने रामधुनी नगरपालिका
              नक्सामा हेर्दा झण्डै डमरुको आकारमा रहेको देखिन्छ । यसअघि भद्रगाउँ सिनुवारी
              र सिंगिया गाविसलाई मिलाएर निर्माण गरिएको रामधुनी भासी नगरपालिकालाई हाल
              आएर गाउँ र नगरपालिकाहरु पुनरव्यवस्थित गर्ने क्रममा बक्लौरी गाविसका सबै र
              डुम्राहा गाविसका केही वडाहरुलाई मिलाएर रामधुनी नगरपालिका निर्माण गरिएको हो ।
              यस नगरपालिकाको सिमाना पुर्वमा इटहरी उपमहानगरपालिका, पश्चिममा बराह नगरपालिका,
              उत्तरमा धरान उपमहानगरपालिका तथा दक्षिणमा इनरुवा नगरपालिका पर्दछन् ।
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-[#004080] mb-2">प्रशासनिक विभाजन</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>प्रदेश ः नं. १</li>
              <li>अञ्चल ः कोशी</li>
              <li>जिल्ला ः सुनसरी</li>
              <li>वडा संख्या ः ९</li>
            </ul>
            <p className="mt-3">
              <strong>निर्वाचन क्षेत्र :</strong>
              <br />
              प्रतिनिधि सभा : १ नं. (वडा नं. ६ र ७)
              <br />
              प्रतिनिधि सभा : २ नं. (वडा नं. १, २, ३, ५, ८ र ९)
              <br />
              प्रतिनिधि सभा : ४ नं. (वडा नं. ४)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Section1;
