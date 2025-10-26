import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Section = () => {
  return (
    <div className="flex h-screen">
      {/* Column 1 */}
      <div className="flex-1 bg-blue-500 text-white flex items-center justify-center text-2xl font-semibold">
       <Section1/>
      </div>

      {/* Column 2 */}
      <div className="flex-1 bg-green-500 text-white flex items-center justify-center text-2xl font-semibold">
        <Section2/>
      </div>

      {/* Column 3 */}
      <div className="flex-1 bg-red-500 text-white flex items-center justify-center text-2xl font-semibold">
        <Section3/>
      </div>
    </div>
  );
};

export default Section;