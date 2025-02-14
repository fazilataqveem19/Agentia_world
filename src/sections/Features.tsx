"use client"
import slackLogo from "../assets/images/slack-logo.png";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import jiraLogo from "../assets/images/jira-logo.png";
import gcpLogo from "../assets/images/gcp-logo.png";
import { Button } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "@/components/Logo";
import Image from "next/image";
import { motion } from "framer-motion";

export const features = [
  "Effortless Integration",
  "Intelligent Automation",
  "Robust Security",
];

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];
 

export const Features = () => {
  return (
    <section id="features" className="pb-[30px] mt-[-30px]">
      <div className="container mx-auto px-4 lg:px-0 xl:px-16">
        <div className="border-l border-r border-t border-[var(--color-border)] relative">
          <>
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faPlus} className="size-3 text-gray-200" />
            </div>
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faPlus} className="size-3 text-gray-200" />
            </div>
          </>
          <div className="container py-24 md:py-40 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-200 leading-tight">
                  Your AI-powered collaboration companion
                </h2>
                <ul className="mt-12 flex flex-col gap-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4">
                      <FontAwesomeIcon icon={faCircleCheck} className="size-6 text-violet-400" />
                      <span className="text-xl font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-16 w-32 whitespace-nowrap">Try it now</Button>
              </div>
              {/* Orbit Circle and Logos */}
              <div className="flex justify-center items-center relative mt-2 md:mt-0">
                <div className="size-[220px] md:size-[450px] relative">
                  <div className="absolute inset-0">
                    <Orbit className="size-full" />
                  </div>
                  <div className="absolute-center">
                    <Orbit className="size-[130px] md:size-[300px]" />
                  </div>
                  <div className="absolute-center">
                    <Logo className="size-16 md:size-[120px]" />
                  </div>

                  {/* Animated Orbit with Logos */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }} // Rotate 360 degrees
                    transition={{
                      duration: 8, // Rotation takes 8 seconds
                      ease: "linear", // Smooth linear rotation
                      repeat: Infinity, // Repeat infinitely
                      repeatType: "loop", // Loop the animation
                    }}
                  >
                    {logos.map(({ src, alt, rotate }) => (
                      <div
                        className="absolute inset-0"
                        style={{
                          transform: `rotate(${rotate}deg)`,
                        }}
                        key={alt}
                      >
                        <div
                          className="inline-flex size-10 items-center justify-center border border-[var(--color-border)] rounded-lg absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-0 bg-gray-950"
                          style={{
                            transform: `translate(-50%,-50%)rotate(-${rotate}deg)`,
                          }}
                        >
                          <Image src={src} alt={alt} className="size-6" />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};