"use client";
import robotImg from "@/assets/images/robot.jpg";
import underlineImage from "@/assets/images/underline.svg?url";
import Loader from "@/assets/images/loader-animated.svg";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const useMousePosition = () => {
  const [innerWidth, setInnerWidth] = useState(1);
  const [innerHeight, setInnerHeight] = useState(1);
  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);
  const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]);
  const yProgress = useTransform(clientY, [0, innerHeight], [0, 1]);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);

    const handleResize = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [clientX, clientY]); // Add clientX and clientY as dependencies

  return { xProgress, yProgress };
};

export const Hero = () => {
  const { xProgress, yProgress } = useMousePosition();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end start", "start end"],
  });

  const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const translateLargeX = useTransform(xProgress, [0, 1], ["-25", "25"]);
  const translateLargeY = useTransform(yProgress, [0, 1], ["-25", "25"]);

  return (
    <section ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-0 xl:px-16">
        <div className="border-l border-r border-[var(--color-border)]">
          <div
            className="container py-12 md:py-36 relative isolate overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {/* Background Gradient */}
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>

            {/* Orbit Elements */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                style={{
                  x: translateLargeX,
                  y: translateLargeY,
                }}
              >
                {/* First Orbit */}
                <div className="absolute-center">
                  <Orbit className="size-[270px]" />
                </div>
              </motion.div>

              {/* Second Orbit with Circles */}
              <div className="absolute-center">
                <Orbit className="size-[520px]" />
                {/* Existing Circle */}
                <div className="absolute left-1/2 top-0 -translate-x-[1450%] -translate-y-[32px] hidden md:block">
                  <div className="bg-gradient-to-b from-violet-400 to-gray-950 w-8 h-8 rounded-full"></div>
                </div>

                {/* Adjusted Tiny Circle inside 2nd Orbit */}
                <div className="absolute right-[10%] bottom-[10%] translate-y-[25px] hidden md:block">
                  <div className="bg-gradient-to-b from-violet-400 to-gray-950 w-5 h-5 rounded-full"></div>
                </div>

                {/* New Circle inside 2nd Orbit with slight color change */}
                <div className="absolute left-[40%] bottom-[20%] translate-x-[40px] translate-y-[10px] hidden md:block">
                  <div className="bg-gradient-to-b from-indigo-400 to-gray-950 w-7 h-7 rounded-full"></div>
                </div>
              </div>

              {/* Third Orbit with Circles */}
              <div className="absolute-center">
                <Orbit className="size-[770px]" />
                {/* Tiny Circle inside 3rd Orbit */}
                <div className="absolute left-[25%] bottom-0 translate-x-[-10px] translate-y-[30px] hidden md:block">
                  <div className="bg-gradient-to-b from-violet-400 to-gray-950 w-12 h-12 rounded-full"></div>
                </div>

                {/* New Circle inside 3rd Orbit with slight color change */}
                <div className="absolute right-[30%] bottom-[20%] translate-x-[40px] translate-y-[40px] hidden md:block">
                  <div className="bg-gradient-to-b from-blue-400 to-gray-950 w-9 h-9 rounded-full"></div>
                </div>
              </div>

              {/* Fourth Orbit with Circles */}
              <div className="absolute-center">
                <Orbit className="size-[1020px]" />
                {/* Existing Circle inside 4th Orbit */}
                <div className="absolute left-1/2 top-0 -translate-x-[-150%] -translate-y-[30px] hidden md:block">
                  <div className="bg-gradient-to-b from-violet-400 to-gray-950 w-8 h-8 rounded-full"></div>
                </div>

                {/* Tiny Circle inside 4th Orbit */}
                <div className="absolute right-[30%] top-[50%] -translate-x-[10px] -translate-y-[10px] hidden md:block">
                  <div className="bg-gradient-to-b from-violet-400 to-gray-950 w-4 h-4 rounded-full"></div>
                </div>
              </div>

              {/* Fifth Orbit with Circles */}
              <div className="absolute-center">
                <Orbit className="size-[1270px]" />
                {/* Tiny Circle inside 5th Orbit */}
                <div className="absolute left-[70%] top-[30%] -translate-x-[5px] -translate-y-[5px] hidden md:block">
                  <div className="bg-gradient-to-b from-violet-400 to-gray-950 w-3 h-3 rounded-full"></div>
                </div>
              </div>

              {/* New Circles for Desktop (Large Screens) */}
              <div className="hidden lg:block">
                {/* Additional Circle for Desktop */}
                <div className="absolute left-[80%] top-[20%] translate-x-[-20px] translate-y-[10px]">
                  <div className="bg-gradient-to-b from-pink-400 to-gray-950 w-6 h-6 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Hero Heading */}
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-100 text-center leading-tight">
              Unlock the Future of AI Conversations with{" "}
              <span className="relative">
                <span>Agentia</span>
                <span
                  className="absolute w-full left-0 top-full -translate-y-1/2 h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h1>

            {/* Hero Subtext */}
            <p className="text-center text-lg md:text-xl mt-8 max-w-3xl mx-auto">
              Discover the limitless potential of AI with Agentia World. Elevate
              your productivity and streamline your workflow with your
              cutting-edge AI chat platform.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-10">
                Start Chatting
              </Button>
            </div>

            {/* Image and AI Status Box */}
            <div className="mt-16 rounded-2xl border-2 overflow-hidden border-gradient relative max-w-5xl mx-auto">
              {/* Gradient Circle */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <div className="bg-gradient-to-b from-violet-400 to-gray-950 w-16 h-16 rounded-full -translate-x-[235px] -translate-y-[68px]"></div>
              </div>

              <div className="relative">
                {/* Text Box - User Message */}
                <div className="absolute top-[35%] left-1/2 z-[50] -translate-x-1/2 lg:-translate-x-[50%] lg:left-[20%] hidden lg:block">
                  <motion.div
                    className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72 lg:w-80"
                    style={{
                      y: transformedY,
                    }}
                  >
                    <div>Can you generate an incredible frontend dev video tutorial?</div>
                    <div className="text-right text-gray-400 text-sm font-semibold">1m ago</div>
                  </motion.div>
                </div>
                {/* Text Box - AI Response */}
                <div className="absolute top-[55%] right-1/2 z-[50] translate-x-1/2 lg:translate-x-[60%] lg:right-[20%] hidden lg:block">
                  <motion.div
                    className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72 lg:w-80"
                    style={{
                      y: transformedY,
                    }}
                  >
                    <div>
                      <strong>Brainwave:</strong> I created one based on videos from Frontend Tribe!
                    </div>
                    <div className="text-right text-gray-400 text-sm font-semibold">
                      Just now
                    </div>
                  </motion.div>
                </div>

                {/* Robot Image */}
                <Image
                  src={robotImg}
                  alt="Robot Image"
                  className="z-[10] relative"
                  priority
                  layout="intrinsic"
                />

                <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 w-full max-w-xs z-[20]">
                  <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                    <Loader className="text-violet-400" />
                    <div className="font-semibold text-sm md:text-xl text-gray-100">
                      AI is generating <span className="animate-cursor-blink">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;