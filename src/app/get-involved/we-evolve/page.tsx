import Image from "next/image";

const WeEvolveAndWorkshops = () => {
  return (
    <section className="w-full">
      {/* Background Image for We Evolve */}
      <div className="absolute inset-0 flex items-center justify-center bg-[#592AC7]">
       <Image
                   src="/assets/weevolve/arjun.gif" // Replace with your actual GIF path
                   alt="hero"
                   width={500}  // Adjust size as needed
                   height={500}
                   unoptimized  
                   className="relative w-1/2 mt-24"
                 />
       </div>

      {/* Purple Text Box */}
      <div className="absolute md:bottom-36 md:left-12 text-white p-6 md:p-8 max-w-sm md:max-w-md">
        <h2 className="text-3xl md:text-4xl font-primary font-semibold">We Evolve</h2>
        <p className="mt-2 text-base md:text-lg font-secondary">
        We aim to be a space where youth are supported to rise to their potential, not just in their professional, but also in their personal endeavors.
        </p>
      </div>

      {/* Expert Talks & Workshops Section */}
      <div className="relative w-full bg-[#F8F3E8] py-24 px-6 md:px-12 mt-[500px] md:mt-[600px] overflow-hidden">
        {/* Background Decorative Shapes */}
        <Image
          src="/assets/weevolve/yp.svg"
          alt="Decorative Shape"
          width={500}
          height={500}
          className="absolute top-5 right-80"
        />
        <Image
          src="/assets/weevolve/gc.svg"
          alt="Decorative Shape"
          width={300}
          height={300}
          className="absolute bottom-96 left-20 z-0"
        />
         <Image
          src="/assets/weevolve/bs.svg"
          alt="Decorative Shape"
          width={180}
          height={180}
          className="absolute bottom-0 right-60 z-0"
        />

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          {/* Expert Talks Card */}
          <div className="relative flex flex-col md:flex-row bg-white rounded-3xl rounded-br-full shadow-lg p-6 md:p-10 overflow-hidden">
            {/* Image Inside Card */}
            <div className="w-full md:w-1/3 overflow-hidden rounded-xl">
              <Image
                src="/assets/weevolve/img1.png"
                alt="Expert Talks"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="w-full md:w-2/3 md:ml-8 mt-6 md:mt-0 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#592AC7]">Expert Talks</h3>
              <p className="text-gray-700 mt-2">
                Auroville is a thriving laboratory of social and environmental initiatives. 
                We invite experts based in Auroville, who have come from all over the world, 
                from different walks of life, working in different domains, to come share 
                their experiences with our youth.
              </p>
            </div>
          </div>

          {/* Workshops Card */}
          <div className="relative flex flex-col md:flex-row-reverse bg-white rounded-bl-full shadow-lg p-6 md:p-10 overflow-hidden">
            {/* Image Inside Card */}
            <div className="w-full md:w-1/3 overflow-hidden rounded-xl">
              <Image
                src="/assets/weevolve/img2.png"
                alt="Workshops"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="w-full md:w-2/3 md:mr-8 mt-6 md:mt-0 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#592AC7]">Workshops</h3>
              <p className="text-gray-700 mt-2">
                By engaging in practical workshops, our team is able to discover and grow 
                not just as professionals but as people. These workshops are an important 
                aspect of our work towards our core mission: the holistic development of our youth.
              </p>
            </div>
            </div>


            <div className="relative flex flex-col md:flex-row bg-white rounded-3xl rounded-br-full shadow-lg p-6 md:p-10 overflow-hidden">
            {/* Image Inside Card */}
            <div className="w-full md:w-1/3 overflow-hidden rounded-xl">
              <Image
                src="/assets/weevolve/img3.png"
                alt="Expert Talks"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="w-full md:w-2/3 md:ml-8 mt-6 md:mt-0 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#592AC7]">Expert Talks</h3>
              <p className="text-gray-700 mt-2">
                Auroville is a thriving laboratory of social and environmental initiatives. 
                We invite experts based in Auroville, who have come from all over the world, 
                from different walks of life, working in different domains, to come share 
                their experiences with our youth.
              </p>
            </div>
          </div>
          </div>
        </div>

        <section className="w-full bg-[#592AC7] text-white pt-12 px-6">
              {/* Section Title */}
              <h2 className="text-2xl md:text-4xl font-semibold text-center mt-8">
              Read more about our team activities<br/> and workshops on Yuvabe blog
              </h2>
        
              {/* Card Container */}
              <div className="max-w-4xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white text-black p-6 rounded-lg shadow-lg z-10">
                  <Image
                    src="/assets/weevolve/img4.png"
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
                    src="/assets/weevolve/img5.png"
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
                    src="/assets/weevolve/img6.png"
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
                  src="/assets/weevolve/plane.gif" // Replace with your exported asset
                  alt="Curve Line"
                  width={1300}
                  height={1300}
                />
                </div>
            </section>
    </section>
  );
};

export default WeEvolveAndWorkshops;
