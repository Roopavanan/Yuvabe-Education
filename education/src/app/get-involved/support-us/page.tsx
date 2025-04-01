"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import PaymentForm from "@/components/PaymentForm"


export default function SupportUs() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const cards = [
    {
      title: "Bridge Program",
      image: "/images/getinvolved/img1.svg",
      description:
        "Your contribution will help us provide our young adults with an infrastructure, including tools and materials needed for their learning and growth.",
      bgShape: "bg-[#F8A91E]",
    },
    {
      title: "Emotional Resilience",
      image: "/images/getinvolved/img2.svg",
      description:
        "Your donation will help us create an ecosystem of support for the youth, that comprises experts in integral health, counselling, coaching and more.",
      bgShape: "bg-[#592AC7]",
    },
    {
      title: "STEAM Program",
      image: "/images/getinvolved/img3.svg",
      description:
        "Your gift for our unique educational offering will help cover expenses for a dedicated space for STEAM Lab, teacher support, and project materials.",
      bgShape: "bg-[#33BED4]",
    },
  ];

  

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16 px-6 md:px-12 lg:px-16">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-[64px] font-bold text-[#592AC7] font-primary"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Support Us
            </motion.h1>

            <motion.p
              className="mt-4 text-gray-600 text-[18px] font-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            >
              You have the power to fuel a program that’s more than just
              upskilling! Be part of something bigger, where growth isn’t just
              personal; it’s collective. Let’s build the future together!
            </motion.p>
          </motion.div>

          {/* Right Side Image/Icon */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 bg-yellow-400 rounded-tl-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-[#FBF6EF] text-center">
        <h2 className="text-2xl md:text-5xl font-semibold text-black mb-12">
          Your contribution will help us support
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative w-[327px] h-[516px] md:w-[327px] md:h-[516px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 transition-all duration-300 hover:bg-[#592AC7] hover:text-white group"
            >
              <h3 className="text-xl font-bold mb-4 z-10">{card.title}</h3>

              <Image
                src={card.image}
                alt={card.title}
                width={278}
                height={261}
                className="w-[278px] h-[261px] rounded-lg object-cover z-10"
              />
              <p className="text-sm mt-2 z-10">{card.description}</p>
              <motion.div className="absolute bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-[#592AC7] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#592AC7]">
                <ArrowUpRight size={24} />
              </motion.div>
            </motion.div>
          ))}
        </div>
        <PaymentForm />
      </section>

      
      {/* AVI-USA */}
      <section className="flex flex-col items-center justify-center text-center py-16 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-[40px] font-regular font-primary text-gray-800"
        >
          We are grateful to AVI-USA for all their guidance and support
        </motion.h2>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="my-8"
        >
          <Image
            src="/images/getinvolved/aviusa.svg"
            alt="AVI-USA Logo"
            width={280}
            height={280}
            className="rounded-lg"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-[40px] font-regular font-primary text-gray-700 max-w-6xl"
        >
          A big thank you to all our donors and sponsors who have been
          generously supporting us in our journey.
        </motion.p>
      </section>
    </>
  );
}
