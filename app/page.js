"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./components/ui/aurora-background";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";

import { keyFeatures } from "../data/keyFeatures.js";

export default function Home() {
  return (
    <main className="flex flex-col lg:gap-14 gap-6">
      <section id="above-the-fold">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <h1 className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Seamless Digital Recruitment Solutions for MNCs
            </h1>
            <p className="font-extralight text-center text-base md:text-4xl dark:text-neutral-200 py-4">
              Streamline hiring, reduce time-to-hire, enhance productivity.
            </p>
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Get Started
            </button>
          </motion.div>
        </AuroraBackground>
      </section>

      <section id="features" className="max-w-7xl mx-auto">
        <div className="mx-6">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-left mb-6">
            Key Features
          </h2>
          <BentoGrid className="max-w-4xl mx-auto">
            {keyFeatures.map((item, i) => (
              <BentoGridItem
                key={i}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
    </main>
  );
}
