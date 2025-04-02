import Image from "next/image";

const WeServe = () => {
  return (
   <section className="w-full">
       <div className="absolute inset-0 flex items-center justify-center bg-[#592AC7]">
      <Image
            src="/assets/weserve/hema.gif" // Replace with your actual GIF path
            alt="hero"
            width={200}  // Adjust size as needed
            height={200}
            unoptimized  
            className="relative w-1/2 mt-66"
          />
       </div>
      {/*Purple text box*/}
         <div className="relative mt-120 md:bottom-12 md:left-12 text-white p-6 md:p-8 max-w-sm md:max-w-md">
          <h2 className="text-3xl md:text-4xl font-primary font-semibold">We Serve</h2>
          <p className="mt-2 text-base md:text-lg font-secondary">
            We are committed to providing support to our community, and engage in
            opportunities where we can make a difference.
          </p>
        </div>
      

      {/* Centered Title Section */}
      <div className="max-w-4xl mx-auto text-center px-6 pt-24">
        <h2 className="text-2xl md:text-4xl font-semibold font-primary text-[#000000]">
          Enabling Educational<br/> Empowerment
        </h2>
      </div>

      {/* Two-Column Layout (Image Left, Content Right) */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-16 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Image & Shapes */}
        <div className="relative w-full max-w-md lg:w-1/2">
          {/* Placeholder for Shapes */}
          <Image
                    src="/assets/weserve/yc.svg"
                    alt="yc"
                    width={50}
                    height={50}
                    className="absolute left-80 bottom-10 z-10 "
                  />
          <Image
                    src="/assets/weserve/bc.svg"
                    alt="bc"
                    width={150}
                    height={150}
                    className="absolute left-55 bottom-45"
                  />
          <Image
                    src="/assets/weserve/polygon.svg"
                    alt="polygon"
                    width={75}
                    height={75}
                    className="absolute left-25 bottom-15 z-10"
                  />

          {/* Image Placeholder */}
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/assets/weserve/serveimage.png" // Replace with actual image path
              alt="Children learning"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-[#000000] font-secondary text-base md:text-lg">
          With the mission to enable educational empowerment among school children, we created a project based, interdisciplinary curriculum that brings Science, Technology, Engineering, Art & Math together under one umbrella. The course is designed with the intention of not just making science fun for Auroville’s free progress schools but also pushing the students to think out of the box and becoming self learners.
          </p>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
          Each year culminates with the annual STEAM Fest where all the students present their projects to the community.{" "}
            <a href="#" className="text-[#000000] font-semibold underline">
              Read more about this one of a kind educational fair!
            </a>
          </p>

          <p className="mt-6 font-bold font-secondary text-[#000000]">
          Your support will help us take this unique educational offering to more schools in the region!
          </p>

          {/* Support Button */}
          <button className="mt-6 px-6 py-3 bg-[#662D91] text-white font-semibold rounded-full shadow-md hover:bg-purple-700 transition">
            Support Us
          </button>
        </div>
      </div>


      <section className="w-full bg-[#FFF8E6] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black font-primary">
          Other Community Initiatives
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Apart from spreading educational empowerment, our team is also
          committed to being an active force for good in the community in many
          other ways. From beach cleanups to performing arts, we do it all!
        </p>

        {/* Initiative Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder 1 */}
          <Image
          src="/assets/weserve/image1.png"
          alt="image"
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-lg"
        />
        <Image
          src="/assets/weserve/image2.png"
          alt="image"
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-lg"
        />
        <Image
          src="/assets/weserve/image3.png"
          alt="image"
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-lg"
        />
          </div>
          </div>
      </section>


    <section className="w-full bg-[#592AC7] text-white py-24 px-6">
      {/* Section Title */}
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        Read more about our community <br /> activities in and around Auroville
      </h2>

      {/* Card Container */}
      <div className="max-w-4xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg z-10">
          <Image
            src="/assets/weserve/image4.png"
            alt="Navigating Transformation"
            width={300}
            height={200}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="mt-4 font-semibold text-lg">
            Navigating Transformation: My Yuvabe Journey
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            A heartfelt account of a Yuvabe alumni where he talks about
            discovering his passion, overcoming adversity...
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg z-10">
          <Image
            src="/assets/weserve/image5.png"
            alt="United by the Joy of Running"
            width={300}
            height={200}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="mt-4 font-semibold text-lg">
            United by the Joy of Running
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Auroville Marathon reignites the spirit of teamwork, oneness, and
            collaboration within the Yuvabe team...
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg z-10">
          <Image
            src="/assets/weserve/image6.png"
            alt="Shaping lives and the future"
            width={300}
            height={200}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="mt-4 font-semibold text-lg">
            Shaping lives and the future of the world
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            Think back to your school days. Can you recall any teachers who left
            a lasting impression on you?
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-white text-[#592AC7] px-6 py-3 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
          Visit our Blog
        </button>
      </div>

      {/* Placeholder for Rocket & Curve Line */}
      <div className="relative bottom-165 left-8">
        <Image
          src="/assets/weserve/plane.gif" // Replace with your exported asset
          alt="Curve Line"
          width={1300}
          height={1300}
        />
        </div>
    </section>
    </section>

    
  );
};

export default WeServe;
