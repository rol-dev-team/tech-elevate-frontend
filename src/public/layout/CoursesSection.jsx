import React, { useState, useMemo } from 'react';
import SectionHeader from "@/public/components/SectionHeader.jsx";
import CourseCard from "@/public/components/CourseCard.jsx";
import { courseData } from "../data/courseData";

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("All Course");

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(courseData.map(course => course.category))];
    return ["All Course", ...uniqueCategories];
  }, []);

  const filteredCourses = useMemo(() => {
    return activeTab === "All Course"
      ? courseData
      : courseData.filter(course => course.category === activeTab);
  }, [activeTab]);

  return (
    <section className="w-full py-10 sm:py-14 md:py-20 bg-[#fcfdfe] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[200px] sm:w-[400px] md:w-[800px] h-[200px] sm:h-[400px] md:h-[800px] bg-[#00a79d]/5 rounded-full blur-[60px] md:blur-[120px] -mr-24 sm:mr-[-8rem] md:-mr-96 -mt-16 md:-mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[180px] sm:w-[300px] md:w-[600px] h-[180px] sm:h-[300px] md:h-[600px] bg-[#2bb673]/5 rounded-full blur-[50px] md:blur-[100px] -ml-12 sm:-ml-20 md:-ml-64 -mb-16 md:-mb-32 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-8 sm:mb-10 md:mb-14">
          <SectionHeader
            title={<>Courses <span className="text-3xl md:text-6xl">Offered</span></>}
            subtitle="We have designed our courses with the most demanding professional skills. The knowledge, experience, and expertise gained through the program will ensure your desired job in the global market."
            align="center"
          />
        </div>

        {/* Tab Navigation */}
        <div className="w-full border-b border-gray-100 mb-8 sm:mb-10 md:mb-16">

          {/* Mobile: scrollable single row */}
          <div className="flex sm:hidden overflow-x-auto no-scrollbar gap-x-5 px-1 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[13px] font-bold pb-3 relative transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeTab === cat ? "text-[#00a79d]" : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {cat}
                <div className={`absolute bottom-[-1px] left-0 h-[2px] bg-[#00a79d] rounded-t-full transition-all duration-300 ${
                  activeTab === cat ? "w-full opacity-100" : "w-0 opacity-0"
                }`} />
              </button>
            ))}
          </div>

          {/* Tablet+: centered wrap */}
          <div className="hidden sm:flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-3 px-2 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[14px] md:text-[15px] font-bold pb-3 md:pb-5 relative transition-all duration-300 whitespace-nowrap ${
                  activeTab === cat ? "text-[#00a79d]" : "text-gray-400 hover:text-gray-900"
                }`}
              >
                {cat}
                <div className={`absolute bottom-[-1px] left-0 h-[2px] md:h-[3px] bg-[#00a79d] rounded-t-full transition-all duration-300 ${
                  activeTab === cat ? "w-full opacity-100" : "w-0 opacity-0"
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 xl:gap-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="flex justify-center w-full">
                {/* Mobile: full width. Tablet+: let CourseCard control its own width */}
                <div className="w-full sm:w-auto">
                  <CourseCard {...course} />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 sm:py-20 text-center text-gray-400 text-sm sm:text-base">
              No courses found in this category.
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default CoursesSection;