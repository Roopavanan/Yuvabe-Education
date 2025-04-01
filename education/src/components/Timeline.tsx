import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const timelineData = [
  {
    year: "2020",
    title: "Foundation of Yuvabe",
    description:
      "Yuvabe was established with the mission to empower young adults in Auroville through skills, service, and personal growth​.",
    dotPosition: {
      top: "120px",
      left: "4%",
      mobileTop: "18px",
      mobileLeft: "4%",
    },
  },
  {
    year: "2021",
    title: '"Work. Serve. Evolve." Model',
    description:
      "Introduced a unique model emphasising professional development, community service, and personal growth​.",
    dotPosition: {
      top: "70px",
      left: "20%",
      mobileTop: "10px",
      mobileLeft: "20%",
    },
  },
  {
    year: "2022",
    title: " Partnership and Collaborations",
    description:
      "Collaborated with global technology companies, non-profits, and educational initiatives, expanding the reach and impact​.",
    dotPosition: {
      top: "80px",
      left: "37%",
      mobileTop: "10px",
      mobileLeft: "37%",
    },
  },
  {
    year: "2023",
    title: "Programs and Impact",
    description:
      "Expanded programs to include a wider range of skills training and workshops, with significant community service contributions​",
    dotPosition: {
      top: "10px",
      left: "55%",
      mobileTop: "2px",
      mobileLeft: "58%",
    },
  },
  {
    year: "2024",
    title: "Launch of Yuvabe Education:",
    description:
      " Introduced the STEAM Lab to provide hands-on learning experiences in science, technology, engineering, arts and mathematics​.",
    dotPosition: {
      top: "60px",
      left: "79%",
      mobileTop: "8px",
      mobileLeft: "75%",
    },
  },
  {
    year: "2025",
    title: "Future Plans",
    description:
      "Aiming to explore new frontiers and bring more opportunities for youth empowerment.",
    dotPosition: {
      top: "-20px",
      left: "96%",
      mobileTop: "-15px",
      mobileLeft: "94%",
    },
  },
];

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Update window width on mount and resize
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + timelineData.length) % timelineData.length
    );
  };

  return (
    <section className="relative flex flex-col items-center justify-center bg-[#FFF9EA] bg-cover bg-center py-8 sm:py-12 px-4 w-full min-h-[708px] overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:text-[64px] sm:text-5xl text-2xl font-primary font-medium text-center mb-2"
      >
        Transformation Journey
      </motion.h2>
      

      {/* Wave Image with Dots */}
      <div className="relative w-[370px] sm:w-full h-[59.37px] sm:h-48 md:h-56 lg:h-64  my-8 flex justify-center items-center">
        <Image
          src="/images/home/timeline.svg"
          alt="Timeline Wave"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Dots Positioned Along the Wave */}
        <div className="absolute w-full h-full">
          {timelineData.map((data, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`absolute w-2 h-2 sm:w-4 sm:h-4 rounded-full transition 
        ${
          activeIndex === index
            ? "bg-[#5829c7] shadow-[0_0_10px_2px_rgba(255,202,45,0.6)]"
            : "bg-gray-400 hover:shadow-[0_0_10px_2px_rgba(255,202,45,0.4)]"
        }`}
              style={{
                top:
                  windowWidth <= 393
                    ? data.dotPosition.mobileTop
                    : data.dotPosition.top,
                left:
                  windowWidth <= 393
                    ? data.dotPosition.mobileLeft
                    : data.dotPosition.left,
              }}
              whileInView={{ scale: activeIndex === index ? 1.2 : 1 }}
            />
          ))}
        </div>
      </div>

      {/* Text and Description Section */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-5xl px-8 my-8 font-primary font-semibold border-l-4 border-violet-800">
        {/* Left Side Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`title-${activeIndex}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 md:pl-0 text-start"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-violet-900">
              {timelineData[activeIndex].title}
            </h3>
            <p className="text-sm sm:text-base text-blue-700 font-bold">
              {timelineData[activeIndex].year}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Right Side Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`desc-${activeIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 md:pr-0 text-start sm:mt-0 mt-4"
          >
            <p className="text-violet-700 text-sm sm:text-base font-secondary font-semibold">
              {timelineData[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-4 mt-6 border border-[#5829c7] py-2 px-4 rounded-3xl">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-dashed border-[#5829c7] text-[#5829c7] hover:text-[#5829c7] hover:border-[#5829c7]"
        >
          <FaArrowLeft size={15} />
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#5829c7] text-[#5829c7] hover:text-[#5829c7] hover:border-[#5829c7]"
        >
          <FaArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}