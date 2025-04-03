"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.3 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const testimonials = [
  {
    text: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "moni",
    bgColor: "bg-green-400",
    rotate: 10,
    icon: "✨",
  },
  {
    text: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "moni",
    bgColor: "bg-yellow-400",
    rotate: -0.81,
    icon: "🌼",
  },
  {
    text: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "moni",
    bgColor: "bg-blue-400",
    rotate: 8.75,
    icon: "⭐",
  },
];


const FullYearProgram = () => {
  return (
    <>
      <section className="py-12 px-6 md:px-16 lg:px-24 text-center">
        {/* Heading Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.h2 className="text-3xl md:text-6xl font-bold text-[#592AC7] pt-18">
           Steam Fest
          </motion.h2>
          <motion.h3 className="text-xl md:text-2xl font-bold mt-2">
            Full Year Program
          </motion.h3>
          <motion.p className="text-gray-600 mt-4 max-w-6xl mx-auto text-start text-[18px]">
            Providing STEAM education to Auroville bio- region schools Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </motion.p>
        </motion.div>

        {/* Image Grid Section */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-6 justify-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            variants={imageVariants}
            src="/image1.jpg"
            className="w-full h-32 md:h-40 object-cover rounded-lg"
          />
          <motion.img
            variants={imageVariants}
            src="/image2.jpg"
            className="w-full h-48 md:h-56 object-cover rounded-lg col-span-2"
          />
          <motion.img
            variants={imageVariants}
            src="/image3.jpg"
            className="w-full h-32 md:h-40 object-cover rounded-lg"
          />
          <motion.img
            variants={imageVariants}
            src="/image4.jpg"
            className="w-full h-40 md:h-48 object-cover rounded-lg"
          />
          <motion.img
            variants={imageVariants}
            src="/image5.jpg"
            className="w-full h-32 md:h-40 object-cover rounded-lg"
          />
          <motion.img
            variants={imageVariants}
            src="/image6.jpg"
            className="w-full h-48 md:h-56 object-cover rounded-lg col-span-2"
          />
        </motion.div>
      </section>

      <section className=" py-16 px-6 md:px-16 lg:px-24 text-center bg-[#fef9f3]">
        {/* Heading */}
        <h2 className="text-3xl md:text-6xl font-semibold font-primary text-black mb-8">
          Students Testimonial
        </h2>

        {/* SVG Decorative Line */}
        <div className="relative flex justify-center items-center">
          <Image
            src="/images/arrow.svg"
            alt="Decorative Line"
            width={1000}
            height={100}
            className="absolute top-1/2 transform -translate-y-1/2 w-[90%] md:w-full"
          />

          {/* Testimonial Cards */}
          <div className="flex flex-col md:flex-row  justify-centergap-8 md:gap-16  px-4 relative mt-16">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 w-[220px] md:w-[260px] shadow-lg rounded-lg ${item.bgColor} relative`}
                initial={{ opacity: 0, y: 30, rotate: 0 }} 
                animate={{ opacity: 1, y: 0, rotate: item.rotate }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className="absolute top-2 right-4 text-xl">
                  {item.icon}
                </span>
                <p className="text-black italic">{item.text}</p>
                <p className="text-black font-bold text-right mt-4">
                  - {item.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FullYearProgram;
