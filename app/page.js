"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./components/ui/aurora-background";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import { HoverEffect } from "./components/ui/card-hover-effect.js";

import { keyFeatures } from "../data/keyFeatures.js";
import { benefitsData } from "../data/benefitsData.js";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col lg:gap-40 gap-20 overflow-x-hidden">
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
            className="relative flex flex-col gap-4 items-center justify-center px-4 max-w-7xl"
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

      <section id="about-us" className="max-w-7xl mx-auto">
        <div className="mx-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            variants={{
              visible: { x: 0 },
              hidden: { x: "-100%" },
            }}
            className="text-3xl font-medium tracking-tight text-white sm:text-left lg:mb-6 mb-3"
          >
            About us
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                variants={{
                  visible: { x: 0 },
                  hidden: { x: "-100%" },
                }}
                className="text-xl lg:text-6xl font-bold dark:text-white"
              >
                TalentSync is Transforming Recruitment with Innovative Solutions Since 2020
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                variants={{
                  visible: { x: 0 },
                  hidden: { x: "-100%" },
                }}
                className="max-w-2xl text-base lg:text-xl lg:mt-8 mt-4 dark:text-neutral-200"
              >
                At TalentSync, we're dedicated to revolutionizing the recruitment process with
                innovative digital solutions. Founded 2020, our mission is to empower organizations
                to build exceptional teams faster and smarter. From intelligent candidate matching
                to seamless applicant tracking, we're committed to delivering cutting-edge
                technology and personalized support to our clients. Join us as we continue to
                innovate and shape the future of recruitment.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0.5, scale: 0.5 },
              }}
            >
              <Image
                src="/about-us.jpg"
                className="aspect-video md:aspect-auto object-cover object-center w-full h-full rounded"
                width={500}
                height={500}
                alt="about us image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        variants={{
          visible: { x: 0 },
          hidden: { x: "100%" },
        }}
        id="key-features"
        className="max-w-7xl mx-auto"
      >
        <div className="mx-6">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-left lg:mb-6 mb-4">
            Key Features
          </h2>
          <BentoGrid className="max-w-7xl mx-auto">
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
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        variants={{
          visible: { x: 0 },
          hidden: { x: "-100%" },
        }}
        id="benefits"
        className="max-w-7xl w-full mx-auto"
      >
        <div className="mx-6">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-left lg:mb-6 mb-3">
            Benefits
          </h2>

          <HoverEffect items={benefitsData} />
        </div>
      </motion.section>
    </main>
  );
}
