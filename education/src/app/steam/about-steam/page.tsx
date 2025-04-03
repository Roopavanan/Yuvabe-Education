"use client";
import Image from "next/image";

import Link from "next/link";
export default function Steam() {
  return (
    <>
      {/* Wrapper */}
      <div className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          {/* Hero */}
          <div className="flex flex-col lg:gap-y-16 gap-y-8">
            {/* Top */}
            <div className="flex flex-col gap-y-4">
              <h1 className="text-[#592AC7] text-[40px]  md:text-[62px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary">
                STEAM
              </h1>
              <p className="font-secondary font-medium text-black text-[18px] leading-[30px] text-center">
                Our STEAM program reintroduces the joy of tinkering and learning
                by empowering young minds to experiment, innovate, and develop
                essential skills for the future. We make learning exciting
                through hands-on exploration in Science, Technology,
                Engineering, Arts, and Mathematics.
              </p>
            </div>
            <div className="max-w-full">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/p4Qo589mg8U?si=SBmFHyM6WwT1H2iQ"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
                className="md:h-[617px] h-64"
              ></iframe>
            </div>
          </div>

          {/* Overview */}
          <div className="flex flex-col gap-y-8 md:gap-y-16">
            <h2 className="text-black text-[32px]  md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-center font-primary">
              Overview
            </h2>
            <div className="flex flex-row gap-x-[106px] flex-wrap lg:flex-nowrap gap-y-8 md:gap-y-16 justify-center">
              <div className="lg:w-[50%]">
                <p className="font-secondary font-medium text-black text-[18px] leading-[30px]">
                  The Auroville Bio-region comprises of approximately {" "}
                  <span className="text-[#592AC7] font-bold">
                    13 villages with about 40,000 people.
                  </span>
                  Situated in the Villupuram district of Tamil Nadu, the region
                  was primarily reliant on agricultural communities for income.
                  However, due to
                  <span className="text-[#592AC7] font-bold">
                    &nbsp;climate change, income from farming has
                    been decreasing.
                  </span>
                  <br />
                  <br />
                  This shift in the natural environment is also altering the
                  cultural perspective, where
                  <span className="text-[#592AC7] font-bold">
                    &nbsp;education
                  </span>
                  &nbsp;is now seen as a
                  <span className="text-[#592AC7] font-bold">
                    &nbsp;secure pathway
                  </span>
                  &nbsp;for employment and
                  <span className="text-[#592AC7] font-bold">
                    &nbsp;generating income
                  </span>
                  &nbsp;for families.
                </p>
              </div>
              <div className="lg:w-[50%] lg:align-middle flex flex-col relative">
                <Image
                  src="/images/steam/steam1.png"
                  alt="group-1"
                  width={669}
                  height={447}
                  className="lg:w-full  z-10 lg:mt-[-100px]"
                />

                {/* Orange Circle Small */}
                <svg
                  width="215"
                  height="216"
                  viewBox="0 0 215 216"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[10%] right-[10%] scale-75 md:scale-100"
                >
                  <path
                    d="M214.996 107.863C214.996 167.075 166.995 215.076 107.783 215.076C48.5712 215.076 0.570312 167.075 0.570312 107.863C0.570312 48.6512 48.5712 0.650391 107.783 0.650391C166.995 0.650391 214.996 48.6512 214.996 107.863Z"
                    fill="#FFCA2D"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges */}
      <div className="bg-[#FFF9EA] py-16 lg:py-32 md:py-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <div className="flex flex-col gap-y-[64px] ">
            <h2 className="text-black text-[32px]  md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-center font-primary">
              The Challenge
            </h2>
            <div className="flex flex-row gap-x-[260px] flex-wrap lg:flex-nowrap gap-y-8 md:gap-y-16 justify-center">
              <div className="lg:w-[50%] lg:align-middle flex flex-col relative">
                <Image
                  src="/images/steam/steam2.png"
                  alt=""
                  width={447.484375}
                  height={447.484375}
                  className="w-full md:min-w-[400px] z-10"
                />
                {/* Square */}
                <svg
                  width="148"
                  height="148"
                  viewBox="0 0 148 148"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-[5%] right[-17%] md:right-[-2%] lg:z-11"
                >
                  <rect
                    x="117.871"
                    y="0.873047"
                    width="120.879"
                    height="120.879"
                    transform="rotate(75.8814 117.871 0.873047)"
                    fill="#91C644"
                  />
                </svg>
              </div>
              <div className="lg:w-[50%] flex flex-col gap-14">
                <p className="font-secondary font-medium text-black text-[18px] leading-[30px]">
                  The conventional education system’s emphasis on
                  <span className="text-[#592AC7] font-bold">
                    &nbsp;rote learning
                  </span>
                   and lack of application based curricula in subjects like
                  science, mathematics has been known to 
                  <span className="text-[#592AC7] font-bold">
                    stifle creativity 
                  </span>
                  and confidence in students.
                </p>
                <p className="font-secondary font-medium text-black text-[18px] leading-[30px]">
                  This has further lead to lack of inspiration and {" "}
                  <span className="text-[#592AC7] font-bold">
                    lack of skills in the youth 
                  </span>
                  to think out of the box and turn their ideas into reality.{" "}
                  <span className="text-[#592AC7] font-bold">
                    Growing underemployment
                  </span>
                    with little to no access to career growth opportunities
                  aggravates this situation for the youth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The STEAM Lab */}
      <div className="bg-white py-16 lg:py-48 md:py-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <div className="flex flex-col gap-y-24 md:gap-y-32 lg:gap-y-40">
            <h2 className="text-black text-[32px]  md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-center font-primary">
              The STE(A)M Lab
            </h2>
            <div className="flex flex-row gap-x-[106px] flex-wrap lg:flex-nowrap gap-y-8 md:gap-y-16 justify-center">
              <div className="w-full lg:w-[50%]">
                <p className="font-secondary font-medium text-black text-[18px] leading-[30px]">
                  Through our STEAM program, we want to re-introduce the
                  <span className="text-[#592AC7] font-bold">
                    &nbsp;joy of tinkering
                  </span>
                    and learning by doing, especially in the fields of Science,
                  Technology, Engineering and Mathematics.
                  <br />
                  <br />A dedicated STEAM Lab would give a platform and space
                  for the students to explore,  innovate, and
                  <span className="text-[#592AC7] font-bold">
                     develop essential skills 
                  </span>
                  needed to fuel innovation and entrepreneurship.The program
                  will be aimed at
                  <span className="text-[#592AC7] font-bold">
                     7-14 year olds
                  </span>
                   to introduce them to various disciplines including 
                  <span className="text-[#592AC7] font-bold">
                    robotics, computer
                    programming, electronics, biology, physics, and more.
                  </span>
                </p>
              </div>
              <div className="lg:w-[50%] lg:align-middle flex flex-col relative justify-center">
                <Image
                  src="/images/steam/steam4.png"
                  alt=""
                  width={651.01513671875}
                  height={373.5267333984375}
                  className="w-full md:min-w-[400px] z-10"
                />
                {/* Blue Traingle */}
                <svg
                  width="550.3238382981968"
                  height="550.3238382981968"
                  viewBox="0 0 537 563"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute  left-[-55%] md:left-0 lg:top-[-35%] xl:top-[-25%] right-0 md:right-[0%] scale-50  md:scale-65 lg:scale-75 xl:scale-100"
                >
                  <path
                    d="M438.396 0.794658L536.283 562.454L0.928781 366.397L438.396 0.794658Z"
                    fill="#33BED4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What we want */}
      <div className="bg-[#FFF9EA] py-16 lg:py-32 md:py-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <h2 className="text-black text-[40px]  md:text-[62px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary">
            What do we want to do?
          </h2>
          <div className="flex flex-row  flex-wrap gap-y-[65px] gap-x-4 lg:justify-between justify-center">
            {/* Individual Items */}
            <div className="flex flex-row gap-x-4 md:gap-y-[65px] gap-y-8 lg:w-[49%] items-center flex-wrap lg:flex-nowrap justify-center w-full">
              <Image
                src="/images/bridge/bridge-icon1.png"
                alt=""
                width={104}
                height={104}
              />
              <p className="font-secondary font-medium text-black text-[18px] leading-[30px] w-full text-left md:text-center lg:text-left">
                Drive engagement in Auroville, the bioregion and in underserved
                 communities through an accessible centralised STEAM Lab.
              </p>
            </div>
            <div className="flex flex-row gap-x-4 md:gap-y-[65px] gap-y-8 lg:w-[49%] items-center flex-wrap lg:flex-nowrap justify-center w-full">
              <Image
                src="/images/bridge/bridge-icon2.png"
                alt=""
                width={104}
                height={104}
              />
              <p className="font-secondary font-medium text-black text-[18px] leading-[30px] w-full text-left md:text-center lg:text-left">
                Out of school  and school break programs for Aurovillians and
                 bioregion kids.
              </p>
            </div>
            <div className="flex flex-row gap-x-4 md:gap-y-[65px] gap-y-8 lg:w-[49%] items-center flex-wrap lg:flex-nowrap justify-center w-full">
              <Image
                src="/images/bridge/bridge-icon3.png"
                alt=""
                width={104}
                height={104}
              />
              <p className="font-secondary font-medium text-black text-[18px] leading-[30px] w-full text-left md:text-center lg:text-left">
                A more personalised learning with low mentor-student ratio with
                about 4 Yuvabe youth assigned to each class.
              </p>
            </div>
            <div className="flex flex-row gap-x-4 md:gap-y-[65px] gap-y-8 lg:w-[49%] items-center flex-wrap lg:flex-nowrap justify-center w-full">
              <Image
                src="/images/bridge/bridge-icon4.png"
                alt=""
                width={104}
                height={104}
              />
              <p className="font-secondary font-medium text-black text-[18px] leading-[30px] w-full text-left md:text-center lg:text-left">
                Partnership with various STEAM  and Experiential learning
                organisations like Agastya Foundation, ThinkTac etc.
              </p>
            </div>

            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {/* Our Programs */}
      <div className="bg-white py-16 lg:py-32 md:py-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <h2 className="text-black text-[40px]  md:text-[62px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary">
            Our Program
          </h2>
          {/* Main Image */}
          <div className="flex flex-col justify-center">
            <div className="relative flex flex-col justify-center items-center">
              <Image
                src="/images/steam/steam3-hires.png"
                alt=""
                width={841}
                height={672}
                className="relative z-5"
              />

              {/* Programs */}
              <div className="flex flex-row gap-x-16 gap-y-8 mt-8 md:mt-[-100px] z-10 xl:min-w-[1220px] lg:flex-nowrap flex-wrap justify-center">
                <div className="flex flex-col border-[1.5px] rounded-[15px] border-[#9688C0] bg-[#F4F3F9] gap-y-[13px] w-full md:w-1/4 md:grow-1 lg:grow-0 lg:w-1/5 justify-center items-center pt-8 pb-[22px] px-[28px] box-shadow-card">
                  <Image
                    src="/images/bridge/calendar.svg"
                    alt=""
                    width={90}
                    height={90}
                  />
                  <h3 className="font-primary text-[16px] lg:text-2xl leading-[30px] font-semibold text-black text-center">
                    Program Calendar
                  </h3>
                  <div className="bg-[#9688C0] rounded-full p-[6px] w-[31.5px] self-end">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25 5.36523L14.7959 5.36523L14.7959 14.9112"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.7959 5.36617L5.25 14.9121"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col border-[1.5px] rounded-[15px] border-[#F8A91E] bg-[#FEF6E8] gap-y-[13px] w-full md:w-1/4 md:grow-1 lg:grow-0 lg:w-1/5 justify-center items-center pt-8 pb-[22px] px-[28px] box-shadow-card">
                  <Image
                    src="/images/bridge/matrimandir-oultine.svg"
                    alt=""
                    width={90}
                    height={90}
                  />
                  <h3 className="font-primary text-[16px] lg:text-2xl leading-[30px] font-semibold text-black text-center">
                    Auroville Program
                  </h3>
                  <div className="bg-[#F8A91E] rounded-full p-[6px] w-[31.5px] self-end">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25 5.36523L14.7959 5.36523L14.7959 14.9112"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.7959 5.36617L5.25 14.9121"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col border-[1.5px] rounded-[15px] border-[#91C644] bg-[#F4F9EC] gap-y-[13px] w-full md:w-1/4 md:grow-1 lg:grow-0 lg:w-1/5 justify-center items-center pt-8 pb-[22px] px-[28px] box-shadow-card">
                  <Image
                    src="/images/bridge/laptop.svg"
                    alt=""
                    width={90}
                    height={90}
                  />
                  <h3 className="font-primary text-[16px] lg:text-2xl leading-[30px] font-semibold text-black text-center">
                    Visitor Program
                  </h3>
                  <div className="bg-[#91C644] rounded-full p-[6px] w-[31.5px] self-end">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25 5.36523L14.7959 5.36523L14.7959 14.9112"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.7959 5.36617L5.25 14.9121"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* Add Impact Report from Homepage */}

      {/* Donation */}
      <div className="bg-[#592AC7] py-16 lg:py-32 md:py-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16">
          <h2 className="text-white text-[40px]  md:text-[62px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary">
            Your Support Matters!
          </h2>
          {/* Donate From.... */}
          <div className="flex flex-row gap-x-[72px] flex-wrap md:flex-nowrap  py-16 lg:py-32 md:py-24">
            {/* Donate from India */}
            <div className="flex flex-col gap-y-16  w-full md:w-1/2">
              {/* Text */}
              <div className="flex flex-col gap-y-6">
                <p className="font-secondary font-bold text-[18px] leading-[30px] text-white">
                  The success of our STEAM Lab is made possible by the
                  generosity of donors like you. Your support can help us reach
                  more children, create lasting change, and bring dreams to
                  life.
                  <br />
                  <br />​ Join hands with Yuvabe to empower our future
                  innovators and leaders to uncover the potential of every
                  child. Your donation can light up a child's future, one life
                  at a time.
                </p>
                <p className="font-secondary font-bold text-2xl md:text-4xl leading-[40px] text-[#FFCA2D]">
                  Donate Today and <br className="hidden lg:block" /> Be
                  a Changemaker!
                </p>
              </div>
              {/* Donate Button */}
              <div className="flex flex-col gap-y-8 py-12 px-8 md:py-24 md:px-16 bg-white rounded-[50px] justify-center items-center">
                <p className="font-secondary font-normal text-[18px] leading-[30px] text-black">
                  To donate from India, kindly use this link:
                </p>
                <Link href={"https://donate.auroville.org/"}>
                  <div className="py-[18px] px-8 md:px-[61px] rounded-[15px] bg-[#592AC7] justify-center items-center">
                    <p className="font-secondary font-semibold text-[18px] leading-[150%] text-white">
                      Donate from India
                    </p>
                  </div>
                </Link>
                <p className="font-secondary font-normal text-[18px] leading-[30px] text-black">
                  Please follow these steps on the donation page:
                  <br />
                  <br />
                  <ul>
                    <li>
                      Select <strong>'Others'</strong> under Projects to donate,
                    </li>
                    <li>
                      Mention Project name as
                      <strong>'Yuvabe STEAM Lab'</strong>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            {/* Donate from Abroad */}

            <div className="w-full md:w-1/2">{/* Import Component  */}</div>
          </div>
        </div>
      </div>
    </>
  );
}
