import JDS from "@/components/JDS";
import Image from "react";
import React from "react";
export default function Join_Us() {
  return (
    <>
      {/* Wrapper */}
      <div className="bg-white pt-[72px]">
        <div className="max-w-[1190px] flex flex-col m-auto">
          {/* Join Us */}
          <div className="flex flex-row gap-x-[150px] gap-y-16 justify-between p-5 md:pt-16 md:pb-0 flex-wrap xl:flex-nowrap">
            {/* Left */}
            <div className="flex flex-col gap-y-8 gap-x-4 w-full xl:w-1/2 justify-center">
              <h1 className="font-primary font-semibold leading-[120%] text-[64px] text-[#592AC7]">
                Come Join Us!
              </h1>
              <p className="font-secondary font-normal text-black text-[18px] leading-[120%]">
                <strong>
                  {" "}
                  Yuvabe is redefining the future of work with our #Work.
                  #Serve. #Evolve. (WSE) model!
                </strong>
                <br />
                <br />
                Based in Auroville, an experimental, international community in
                southern India, we’re on a mission to blend purpose, innovation,
                and impact. Join us in shaping a world where work isn’t just a
                job, it’s a journey.
              </p>
            </div>
            {/* Right */}
            <div className="w-full xl:w-1/2 flex justify-center  xl:justify-end relative ">
              <img
                src="images/join-us/YB IMAGES EDITS (2) 1.png"
                alt=""
                width={603.65625}
                height={545.3984375}
                className="z-10"
              />
              {/* Blue Circle Large */}
              <svg
                width="496"
                height="497"
                viewBox="0 0 496 497"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-[-10%]"
              >
                <circle cx="247.929" cy="248.573" r="247.616" fill="#33BED4" />
              </svg>

              {/* Green Circle Small */}
              <svg
                width="239"
                height="240"
                viewBox="0 0 239 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-7.5%] bottom-[10%]"
              >
                <circle cx="119.496" cy="119.82" r="119.332" fill="#91C644" />
              </svg>
            </div>
          </div>
        </div>

        <JDS />
      </div>
    </>
  );
}
