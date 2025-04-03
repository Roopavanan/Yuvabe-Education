"use client";
import Image from 'next/image';
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
    const [youthCount, setYouthCount] = useState(0);
    const [hoursCount, setHoursCount] = useState(0);
    const [projectsCount, setProjectsCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    const impactSectionRef = useRef(null);

    // Target Values
    const targetYouth = 45;
    const targetHours = 31294;
    const targetProjects = 25;

    // Duration (in milliseconds) for all counters to complete
    const duration = 2000; // 2 seconds

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (impactSectionRef.current) {
            observer.observe(impactSectionRef.current);
        }

        return () => {
            if (impactSectionRef.current) {
                observer.unobserve(impactSectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return; // Start counting only when visible
        const steps = 50; // Total steps for animation
        const intervalTime = duration / steps; // Time per step

        // Calculate step increments based on the target values
        const youthStep = Math.ceil(targetYouth / steps);
        const hoursStep = Math.ceil(targetHours / steps);
        const projectsStep = Math.ceil(targetProjects / steps);

        const interval = setInterval(() => {
            setYouthCount((prev) => (prev + youthStep < targetYouth ? prev + youthStep : targetYouth));
            setHoursCount((prev) => (prev + hoursStep < targetHours ? prev + hoursStep : targetHours));
            setProjectsCount((prev) => (prev + projectsStep < targetProjects ? prev + projectsStep : targetProjects));
        }, intervalTime);

        return () => clearInterval(interval);
    }, [isVisible]);
  
  return (
  
    <div className="lg:min-w-[400px] bg-[#FFFFFF] text-[#000000]">
      {/* Hero Section */}
      <section className="py-30 text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-primary font-semibold text-[#592AC7]">Who we are ?</h1>
        <p className="text-xl md:text-2xl mt-2 font-primary font-semibold">
          A Thriving Ecosystem for Youth in Auroville
        </p>
        <p className="mt-8 text-[#000000] font-secondary">
          "The ignited minds of the youth are the most powerful <br />resource on earth." — Dr. APJ Abdul Kalam
        </p>
      </section>

      {/* Geometric shapes */}
      <div className="relative">
      {/* Geometric Shapes with Motion Effects */}
      <div className="relative max-w-full min-w-full h-10">
        <motion.div
          className="absolute left-10 md:left-85 -bottom-40 md:-bottom-60"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/assets/yellow-shape.svg" alt="Yellow Shape" width={300} height={300} />
        </motion.div>

        <motion.div
          className="absolute right-15 md:right-75 top-5 md:top-5"
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/assets/green-circle.svg" alt="Green Circle" width={80} height={80} />
        </motion.div>

        <motion.div
          className="absolute right-10 md:right-88 -bottom-40 md:-bottom-60"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/assets/orange-circle.svg" alt="Orange Circle" width={200} height={200} />
        </motion.div>
      </div>
      </div>

      {/* Hear from Our Team Section */}
      <section className="py-20 pl-12 text-center">
        <h2 className="text-3xl font-semibold font-primary">Hear from our Team!</h2>

        {/* Video Section */}
        <div className="relative w-full max-w-4xl mx-auto mt-8">
          <iframe
            className="w-full aspect-video max-h-[450px] rounded-xl shadow-md"
            src="https://www.youtube.com/embed/GFuLGeIJRJ0"
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Description */}
        <p className="mt-6 text-[#000000] font-secondary px-2 md:px-4">
          Yuvabe is more than just an organization—it's a dynamic movement that empowers youth in Auroville to grow, innovate, and create meaningful impact.<br/>
          <span className='block pr-0 md:pr-153 font-secondary'>
          Through our <strong>Work. Serve. Evolve.</strong> approach, we enable youth to:
          </span>
        </p>
      </section>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {/* Card 1 */}
          <div className="bg-[#FFFFFF] shadow-md rounded-xl p-6 w-full sm:w-72 min-h-[250px]">
            <Image src="/assets/wwp.svg" alt="Work with Purpose" width={60} height={60} />
            <h3 className="font-primary font-semibold mt-4">Work with Purpose</h3>
            <p className="text-[#000000] font-secondary mt-2">
              Gain technical and career skills to build a solid foundation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFFFFF] shadow-md rounded-xl p-6 w-full sm:w-72 min-h-[250px]">
            <Image src="/assets/swi.svg" alt="Serve with Impact" width={60} height={60} />
            <h3 className="font-primary font-semibold mt-4">Serve with Impact</h3>
            <p className="text-[#000000] font-secondary mt-2">
             Serve with Impact – Give back to the community through meaningful initiatives.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFFFFF] shadow-md rounded-xl p-6 w-full sm:w-72 min-h-[250px]">
            <Image src="/assets/ec.svg" alt="Evolve Continuously" width={60} height={60} />
            <h3 className="font-primary font-semibold mt-4">Evolve Continuously</h3>
            <p className="text-[#000000] font-secondary mt-2">
              Cultivate self-awareness and personal mastery.
            </p>
          </div>
        </div>

        <section className="py-18 bg-[#FFF9EA] mt-24 px-4 md:px-24 text-center">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-semibold font-primary mb-12">
        Our Unique Evolve Program
      </h2>

      {/* Description */}
      <p className="text-[#000000] text-left text-xl font-secondary max-w-full mx-auto mb-14 ml-4">
        The Evolve Program is a transformative journey that nurtures young
        adults into confident, self-aware leaders. It goes beyond
        skill-<br/>building—it's about personal mastery and growth.
      </p>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="grid grid-cols-1 gap-4 w-full max-w-xl md:max-w-2xl">
      <Image
      src="/assets/flower.gif" // Replace with your actual GIF path
      alt="unique"
      width={10}  // Adjust size as needed
      height={10}
      unoptimized  
      className="w-full"
    />
  </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <div className="mb-6">
          <p className="text-base font-secondary">
      <span className="font-bold">Self-Awareness & Emotional Resilience</span> – Understand yourself, build emotional intelligence, and navigate challenges with clarity.
    </p>
  </div>
          <div className="mb-6">
          <div className="mb-6">
    <p className="text-base font-secondary">
      <span className="font-bold">Self-Expression through Theater & Creativity</span> – Find your voice, explore storytelling, and enhance communication through performance and creative arts.
    </p>
  </div>

          <div className="mb-6">
          <p className="text-base font-secondary">
      <span className="font-bold">Self-Confidence & Leadership Development</span> – Set goals, develop a growth mindset, and cultivate the leadership skills to inspire change.
    </p>
  </div>
</div>

          {/* Know More Button */}
          <button className="bg-[#592AC7] text-white px-6 py-3 rounded-2xl shadow-md hover:bg-[#4a1fa7]">
            Know More
          </button>
        </div>
      </div>

      {/* Final Description */}
      <p className="text-[#000000] text-left text-xl font-secondary mt-12 max-w-full mx-auto ml-4">
        Through interactive workshops, mentorship, and real-world challenges,
        participants discover their strengths, express themselves authentically,
        and step into leadership with confidence.
        <br /><br />
        Join us and embark on your personal growth journey!
      </p>
    </section>
   
     {/* Our Values Section */}
     <section className="py-20 text-center px-4 md:px-12">
     <h2 className="text-4xl md:text-5xl font-primary font-semibold mb-12">Our Values</h2>

     <div className="relative flex flex-wrap justify-center items-center gap-8">
   {/* Single GIF Animation for All Values */}
    <Image
      src="/assets/creativityf.gif" // Replace with your actual GIF path
      alt="Our Values"
      width={500}  // Adjust size as needed
      height={500}
      unoptimized  
      className="w-full max-w-2xl"
    />
     </div>
  </section>
  
  <div>
       {/* Our Impact Section */}
      <section ref={impactSectionRef} className="bg-[#592AC7] text-[#FFFFFF] py-18 text-center px-4 md:px-12">
      <h2 className="text-4xl md:text-5xl font-primary font-semibold mb-8">Our Impact</h2>
        <p className="mb-12 font-secondary text-[#FFFFFF]">
          Committed to serving the community, we enable the educational empowerment in
          schools in and around<br /> Auroville along with support digital transformation of
          fellow community organisations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-5xl md:text-7xl font-primary font-semibold">
          <div>
            <span className="text-[#8CD1DC] font-primary font-semibold">{youthCount}</span>
            <p className="text-2xl pt-4">Youth Engaged</p>
          </div>
          <div>
            <span className="text-[#F2D789] font-primary font-semibold">{hoursCount}</span>
            <p className="text-2xl pt-4">Hours of community service</p>
          </div>
          <div>
            <span className="text-[#BBD594] font-primary font-semibold">{projectsCount}</span>
            <p className="text-2xl pt-4">Projects Completed</p>
          </div>
        </div>

        <button className="mt-12  px-8 py-3 bg-[#FFFFFF] text-[#592AC7] font-primary font-semibold rounded-xl">Impact Report</button>
      </section>

      {/* SDGs Cards Section */}
      <section className="py-20 bg-[#FEF8EE] text-center px-4 md:px-12">
        <p className="text-[#000000] font-secondary mb-8">
          Yuvabe's efforts to educate and re-imagine the future of work is closely aligned
          with the UN Sustainable<br /> Development Agenda 2030. Below are the priority SDGs that
          align with our mission.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Image src="/assets/4.png" alt="Quality Education" width={200} height={200} className="relative" />
          <Image src="/assets/8.png" alt="Decent Work and Economic Growth" width={200} height={200} className="relative" />
          <Image src="/assets/10.png" alt="Reduced Inequalities" width={200} height={200} className="relative" />
        </div>
      </section>
 </div>

  {/* Testimonials Section */}
  <section className="py-20 text-center px-4 md:px-12">
  <h2 className="text-4xl md:text-5xl font-primary font-semibold mb-12">Testimonials</h2>
        <div className="flex flex-col items-center gap-8">
          <iframe
            className="w-full max-w-3xl aspect-video rounded-lg"
            src="https://www.youtube.com/embed/LAYxYUrJh2A"
            title="Main Testimonial"
            allowFullScreen
          ></iframe>
          
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 w-full max-w-4xl">
            <iframe
             className="w-full max-w-[300px] md:max-w-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/i98KcQx5ct4"
              title="Testimonial 1"
              allowFullScreen
            ></iframe>
            
            <iframe
               className="w-full max-w-[300px] md:max-w-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/INNP_w6fJF4"
              title="Testimonial 2"
              allowFullScreen
            ></iframe>
             
             <iframe
             className="w-full max-w-[300px] md:max-w-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/xZWMWYAzqaY"
              title="Testimonial 3"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

       {/* Support Cards Section */}
       <section className="py-20 bg-[#FFF9EA] text-center px-4 md:px-12">
        <h2 className="text-4xl font-primary font-semibold mb-18">
          There are many ways in which you too can <br /> support the cause of youth empowerment.
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Card 1 */}
          <div className="w-70 p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-110 cursor-pointer">
          <Image src="/assets/collaborate.svg" alt="Collaborate" width={60} height={60} className='mb-4'/>
          <h3 className="text-lg font-primary font-semibold pr-26 mb-1">Collaborate</h3>
          <p className="text-sm text-[#000000] font-secondary text-left">Be it AI driven market research, ERP solution for your enterprise, support in digital marketing or design consultancy, our team is hear to help.</p>
          </div>

          {/* Card 2 */}
          <div className="w-70 p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-110 cursor-pointer">
          <Image src="/assets/support.svg" alt="Support" width={60} height={60} className='mb-4'/>
            <h3 className="text-lg font-primary font-semibold pr-36 mb-1">Support</h3>
            <p className="text-sm text-[#000000] font-secondary text-left">Contribute time, skills or resources by becoming a sponsor, donor or mentor for our youth.</p>
          </div>

          {/* Card 3 */}
          <div className="w-70 p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-110 cursor-pointer">
          <Image src="/assets/join.svg" alt="Join" width={60} height={60} className='mb-4'/>
            <h3 className="text-lg font-primary font-semibold pr-46 mb-1">Join</h3>
            <p className="text-sm text-[#000000] font-secondary text-left">Want to be part of a young company, where you can learn, work, serve and evolve? Get in touch with us!</p>
          </div>
        </div>
      </section>

       {/* Founding Partners Section */}
       <section className="py-40 bg-[#592AC7] text-[#FFFFFF] flex flex-col md:flex-row items-center justify-between px-4 md:px-20">
        <div className="max-w-md text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-primary font-semibold mb-4">Founding Partners</h2>
          <p className='font-secondary text-[#FFFFFF]'>
          Our unique partnership model with <strong> our founding partner Quilt.AI </strong> demonstrates how a global entity can support and empower a rural organisation, fostering a mutually beneficial ecosystem.
          </p>
        </div>
        
      <div className="relative w-full h-70">
      <Image
      src="/assets/cofounder.gif" // Replace with your actual GIF path
      alt="Our Values Animation"
      width={5000}  // Adjust size as needed
      height={5000}
      unoptimized  
      className="w-full max-w-8xl -mt-14"
    />
        </div>
      </section>

        {/* What Is Quilt.AI Section */}
        <section className="py-20 px-4 md:px-20 text-center bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="max-w-md text-left">
            <h2 className="text-3xl font-primary font-semibold mb-4">What Is Quilt.AI?</h2>
            <p className="text-[#000000] font-secondary mb-4">
            Based in Singapore and Boston, USA, <strong> Quilt.AI </strong> is an AI-powered insights company whose aim is to provide a more holistic, nuanced view of humanity using internet data.
            </p>
            <p className="text-[#000000] font-secondary mb-4">
            By merging machine learning with human, cultural intelligence, Quilt.AI's team of anthropologists, engineers and designers develop dynamic models and maps from the billions of data points generated from digital behavior; ultimately building a quantitatively validated understanding of the consumers, categories, and culture.
            </p>
            <p className="text-[#000000] font-secondary mb-4">
            As a socially driven technology company, Quilt.AI supports nonprofits and foundations, giving their time to causes they care about; like gender equity, gender based violence, climate and public health.
            </p>
          </div>
          <Image src="/assets/quilt.svg" alt="Quilt.AI Logo" width={300} height={300} className="max-w-[300px] md:max-w-[400px]" />
        </div>
      </section>

      {/* Quilt Section */}
      <section className="py-20 bg-[#FFF9EA] flex flex-col md:flex-row items-center gap-8 px-4 md:px-6">
      <div className="w-full relative flex flex-wrap justify-center md:justify-start gap-4">
          <Image src="/assets/image1.png" alt="Founding Partners" width={500} height={500} className="relative z-5" />
          <Image src="/assets/ys.svg" alt="Quilt.AI Logo" width={100} height={100} className="relative top-12 right-108 z-10" />
          <Image src="/assets/gc.svg" alt="Quilt.AI Logo" width={140} height={180} className="relative bottom-80 left-60" />
        </div>

        {/* Text Content */}
        <div className="w-full text-[#000000] pr-0 md:pr-30 space-y-4 text-base md:text-lg">
        <p className='font-secondary'>
        Aligned sensibilities and a mutual drive to support communities led Yuvabe co-founders and
        </p>

        <p className='font-secondary'>
        Quilt.AI co-founder, Anurag Banerjee to try out a partnership model with the newly founded Quilt.AI, in 2019.
        </p>

        <p className='font-secondary'>
        As Quilt.AI's Singapore team expanded steadily, more and more youth from Auroville and Bioregion were onboarded in Yuvabe to slowly learn the ropes of market research, data analysis, communication, and support their global team.
        </p>

        <p className="font-secondary">
          <strong>
          As our primary partner and sponsor, Anurag Banerjee and his team have supported Yuvabe youth's multi-faceted growth and our mission of holistic empowerment.
          </strong>{" "}
          Their faith and support of our many initiatives, from STEAM Education to youth workshops has served as the cornerstone of our progress!
        </p>
      </div>
    </section>

      {/* Quilt.AI Info Section */}
      <section className="bg-[#592AC7] text-[#FFFFFF] py-12 px-4 md:px-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">


        {/* Left Side - Text Content */}
        <div>
          <p className="text-base mb-6 font-primary font-semibold">
            Today Yuvabe's market research and programming team has evolved into
            an integral part of Quilt.AI's global team, working on projects
            across geographies.
          </p>

          <p className="text-base font-primary font-semibold">
            The skills and training received at Quilt.AI have enabled many
            Yuvabe alumni to take up new roles in leading organisations in India
            and abroad!
          </p>
        </div>

        {/* Right Side - Stats Section */}
        <div className="flex items-center justify-center md:justify-end gap-8 py-18">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <h2 className="text-7xl font-primary font-semibold text-[#F8A91E]">30+</h2>
            <div className="bg-[#FFFFFF] text-[#000000] px-4 py-2 mt-6 rounded-full text-sm font-primary font-semibold">
              Yuvabe youth engaged by Quilt.AI
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <h2 className="text-7xl font-primary font-semibold text-[#91C644]">80+</h2>
            <div className="bg-[#FFFFFF] text-[#000000] px-4 py-2 mt-6 rounded-full text-sm font-primary font-semibold">
              Projects completed
            </div>
          </div>
        </div>
      </div>
    </section>

   {/*Testimonials last*/}
   <section className="py-12 px-4 md:px-6">
      {/* Heading */}
      <h2 className="text-center text-xl md:text-2xl font-primary font-semibold mb-8">
        Hear from our Quilt.AI market research team about their learnings,<br />
        challenges and experience of being part of a global organisation!
      </h2>

      {/* Videos Section */}
      <div className="flex flex-col items-center gap-8">
        {/* Main Video */}
        <div className="relative w-full max-w-3xl aspect-video rounded-lg overflow-hidden">
          <video
            src="/videos/praveen testimonial.mp4"
            controls
            className="w-full h-full rounded-lg"
          >
          </video>
        </div>

        {/* Two Smaller Videos */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 w-full max-w-4xl">
          {/* Video 1 */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
          <video
            src="/videos/abilash testimonial.mp4"
            controls
            className="w-full h-full rounded-lg"
          >
          </video>
          </div>

          {/* Video 2 */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
          <video
            src="/videos/hari testimonial.mp4"
            controls
            className="w-full h-full rounded-lg"
          >
          </video>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden">
          <video
            src="/videos/poovendiran testimonial.mp4"
            controls
            className="w-full h-full rounded-lg"
          >
          </video>
          </div>
        </div>
      </div>
    </section>

 {/* Together we worked with */}
 <section className="bg-[#FFF9EA] py-10 px-4 md:px-6">
 <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div>
        <h2 className="text-4xl md:text-5xl font-primary font-semibold text-[#592AC7]">
            Together <br /> we worked <br /> with
          </h2>
        </div>

        {/* Right Side - Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/assets/unwomen.svg" 
            alt="UN Women"
            width={200}
            height={200}
          />
          <Image
            src="/assets/billgates.svg" 
            alt="Bill & Melinda Gates Foundation"
            width={300}
            height={300}
          />
          <Image
            src="/assets/coke.svg"
            alt="Coca-Cola"
            width={200}
            height={200}
          />
          <Image
            src="/assets/visa.svg"
            alt="Visa"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
 </div>

  );
};

export default AboutUs;
