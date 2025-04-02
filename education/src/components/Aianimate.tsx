"use client";

import * as animationData from "public/images/join-us/data.json";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";

const Aianimate = () => <Lottie animationData={animationData} loop={false} />;

export default Aianimate;
