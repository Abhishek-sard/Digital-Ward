import React from "react";

const Section = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] text-[#333] leading-relaxed p-5">
      <div className="max-w-6xl mx-auto p-5">
        {/* Header */}
        <header className="text-center mb-10 p-5 bg-white/80 rounded-xl shadow-md">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-3">
            3-Column Paragraph Layout
          </h1>
          <p className="text-[#7f8c8d] text-lg max-w-xl mx-auto">
            A responsive design that adapts to different screen sizes while maintaining readability
          </p>
        </header>

        {/* 3 Column Section */}
        <div
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          style={{
            columnCount: 3,
            columnGap: "40px",
            columnRule: "1px solid #bdc3c7",
          }}
        >
          <p className="mb-5 text-justify">
            <span className="text-[#3498db] text-5xl font-bold float-left leading-none mr-2">
              I
            </span>
            n the realm of web design, creating visually appealing and readable
            content is paramount. The three-column paragraph layout has long
            been a staple in print media, and it translates beautifully to
            digital formats when implemented correctly. This approach allows for
            efficient use of space while maintaining comfortable line lengths
            that enhance readability.
          </p>

          <p className="mb-5 text-justify">
            When text lines become too long, readers often struggle to track
            from the end of one line to the beginning of the next. Conversely,
            extremely short lines can create a jarring, disjointed reading
            experience. The three-column format strikes a balance, offering
            lines of optimal length that guide the eye smoothly across the
            content.
          </p>

          <p className="mb-5 text-justify">
            Modern CSS has made multi-column layouts remarkably simple to
            implement. With properties like{" "}
            <code className="bg-gray-200 px-1 rounded">column-count</code>,{" "}
            <code className="bg-gray-200 px-1 rounded">column-gap</code>, and{" "}
            <code className="bg-gray-200 px-1 rounded">column-rule</code>,
            designers can create sophisticated text flows without complex
            positioning or floats.
          </p>

          <p className="mb-5 text-justify">
            Responsive design considerations are crucial for multi-column
            layouts. On larger screens, three columns create an elegant,
            magazine-like reading experience. As screen size decreases, the
            layout can gracefully adapt to two columns, and eventually a single
            column on mobile devices, ensuring optimal readability across all
            devices.
          </p>

          <p className="mb-5 text-justify">
            The visual separation between columns, achieved through subtle rules
            or adequate spacing, helps guide the reader's eye without creating
            harsh divisions. This balance between separation and continuity is
            key to maintaining the flow of content while providing clear visual
            structure to the layout.
          </p>

          <p className="mb-5 text-justify">
            Beyond mere aesthetics, the three-column approach can improve
            comprehension by breaking content into manageable chunks. Readers
            can process information more effectively when it's presented in
            well-defined sections, making this layout particularly valuable for
            lengthy articles or detailed explanations.
          </p>
        </div>

        {/* Highlight Section */}
        <div className="bg-[#e1f5fe] p-6 rounded-lg border-l-4 border-[#3498db] my-8">
          <h3 className="text-[#2980b9] text-xl font-semibold mb-2">
            Implementation Benefits
          </h3>
          <p>
            The CSS multi-column layout module provides a straightforward way to
            create newspaper-like columns without complex HTML structures. This
            method maintains a single content source while allowing flexible
            presentation across different screen sizes.
          </p>
        </div>

        {/* Code Example */}
        <div className="bg-[#2c3e50] text-[#ecf0f1] p-6 rounded-lg font-mono my-6 overflow-x-auto">
          <h3 className="text-[#3498db] text-lg font-semibold mb-4">
            CSS Code Example
          </h3>
          <pre className="whitespace-pre-wrap">
{`.three-columns {
  column-count: 3;
  column-gap: 40px;
  column-rule: 1px solid #bdc3c7;
  padding: 30px;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .three-columns {
    column-count: 2;
  }
}

@media (max-width: 600px) {
  .three-columns {
    column-count: 1;
  }
}`}
          </pre>
        </div>

        {/* Responsive Note */}
        <div className="bg-[#e8f5e9] p-4 rounded-lg border-l-4 border-[#4caf50] text-center font-medium my-6">
          This layout is fully responsive! Try resizing your browser window to
          see how it adapts from three columns to two, then to a single column
          on mobile devices.
        </div>

        {/* Footer */}
        <footer className="text-center mt-10 p-5 text-[#7f8c8d] text-sm">
          3-Column Paragraph Layout Example | Created with React & Tailwind CSS
        </footer>
      </div>
    </div>
  );
};

export default Section;
