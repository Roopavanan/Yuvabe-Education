import bridge_calendar_component from "lib/bridge-calendar-component"; // Import the ItemList component
export default function Bridge_Program_Calendar() {
  return (
    <>
      {/* Wrapper */}
      <div className="bg-white py-32">
        <div className="max-w-[1092px] flex flex-col m-auto px-5">
          {/* Main */}
          <div className="flex flex-col gap-y-[96px]">
            {/* Heading */}
            <h1 className="text-[#592AC7] text-5xl leading-[120%] font-semibold text-center ">
              Bridge Program Calendar 2025
            </h1>
            {/* Programs */}
            <div className="flex flex-col gap-y-12">
              {/* Individial Program Blocks */}
              <div className="flex flex-row bg-[#EBF8FB] py-[43px]  rounded-[15px] border-2 border-[#33BED4] min-h-[219px] flex-wrap xl:flex-nowrap justify-center bridge-program-item">
                <div className="flex flex-row justify-between gap-x-16 gap-y-16 flex-wrap lg:flex-nowrap px-[24px]">
                  {/* Left */}
                  <div className="flex flex-col justify-between  max-w-full xl:max-w-[318px] lg:max-w[40%]  gap-y-7">
                    {/* Top */}
                    <p className="font-secondary font-normal leading-[140%] text-[16px] text-black">
                      Providing career-focused training in fields like AI,
                      Design, and Sustainability.
                    </p>
                    {/* Bottom */}
                    <div className="flex flex-row justify-between">
                      <h2 className="font-primary font-semibold leading-[120%] text-2xl text-black lg:max-w-[212px]">
                        AI First Full Stack Development
                      </h2>
                      <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="color-path"
                          d="M20.2344 37.5938C29.8994 37.5938 37.7344 29.7587 37.7344 20.0938C37.7344 10.4288 29.8994 2.59375 20.2344 2.59375C10.5694 2.59375 2.73438 10.4288 2.73438 20.0938C2.73438 29.7587 10.5694 37.5938 20.2344 37.5938Z"
                          fill="#33BED4"
                          stroke="#33BED4"
                          stroke-width="1.97012"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.9336 14.7871L25.5402 14.7871L25.5402 25.3937"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25.5402 14.7938L14.9336 25.4004"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Middle */}
                  <div className="flex flex-col justify-center max-w-full xl:max-w-[392px] lg:max-w[45%]">
                    <p className="font-primary font-semi-bold leading-[120%] text-2xl text-black">
                      This course is scheduled to start
                      <br />
                      <span className="font-black">From January 2025</span>
                    </p>
                  </div>
                  {/* Right */}
                  <div className="flex flex-col justify-center  max-w-full lg:max-w-[142px]">
                    {/* Enroll Now Button */}
                    <div className="bg-[#33BED4] py-2 px-4 w-[142px] rounded-[8px]">
                      <p className="font-secondary font-semibold text-white text-[16px] leading-[30px] text-center">
                        Enroll Now
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
