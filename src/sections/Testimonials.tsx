"use client"
import Image from "next/image";
import React, { useState } from "react";
import AshwinSantiago from "@/assets/images/ashwin-santiago.jpg";
import AlecWhitten from "@/assets/images/alec-whitten.jpg";
import ReneWells from "@/assets/images/rene-wells.jpg";
import MollieHall from "@/assets/images/mollie-hall.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export const testimonials = [
  {
    quote:
      "Agentia World has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: "Ashwin Santiago",
    title: "Operations Manager",
    image: AshwinSantiago,
  },
  {
    quote:
      "Agentia integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: "Alec Whitten",
    title: "Lead Developer",
    image: AlecWhitten,
  },
  {
    quote:
      "Agentia's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: "Rene Wells",
    title: "Customer Success Manager",
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like this. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: "Mollie Hall",
    title: "Product Designer",
    image: MollieHall,
  },
];


export const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  return (
    <section id="testimonials">
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
            <LayoutGroup>
            <motion.div
            layout
            className="border-gradient rounded-3xl px-6 py-16 lg:py-24 md:px-10 lg:px-16 relative flex flex-col md:flex-row gap-12 md:mx-10 lg:max-20">
              <FontAwesomeIcon icon={faQuoteLeft}
              className="absolute size-20 text-violet-400 top-0 left-6 md:left-10 lg:left-16 -translate-y-1/2" />
              <AnimatePresence mode="wait" initial={false}>
              {testimonials.map((testimonial, index) =>
              testimonialIndex === index ? (
                  <motion.blockquote
                  initial={{opacity: 0, y: 25}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y:25}}
                  transition={{duration: 0.5}}
                  key={testimonial.name} className="flex flex-col lg:flex-row gap-12">
                <p className="text-xl md:text-2xl font-medium">{testimonial.quote}</p>
                <cite className="non-italic lg:text-right">
                  <Image src={testimonial.image} alt={testimonial.name} className="rounded-xl size-28 max-w-none" />
                  <div className="font-bold mt-4">{testimonial.name}</div>
                  <div className="text-xs text-gray-400 mt-2">{testimonial.title}</div>
                </cite>
              </motion.blockquote>
                ) : null
              )}
              </AnimatePresence>
              <motion.div layout="position" className="flex gap-2 md:flex-col">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.name} className="size-6 relative isolate inline-flex items-center justify-center"
                  onClick={() => setTestimonialIndex(index)}
                  >
                    {testimonialIndex === index && (
                    <motion.div className="absolute border-gradient size-full rounded-full -z-10"
                    layoutId="testimonial-dot"
                    >
                    </motion.div>
                    )}
                    
                    <div className="size-1.5 bg-gray-200 rounded-full"></div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            </LayoutGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
