"use client";

// NEXT COMPONENTS
import Image from "next/image";
import Link from "next/link";

// COMPONENTS
import { AuroraBackground } from "./components/ui/aurora-background";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import { HoverEffect } from "./components/ui/card-hover-effect.js";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards.js";
import { FloatingNav } from "./components/ui/floating-navbar.js";
import { Boxes } from "./components/ui/background-boxes.js";
import { motion } from "framer-motion";

// ICONS
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

// DATA
import { keyFeatures } from "../data/keyFeatures.js";
import { benefitsData } from "../data/benefitsData.js";
import { testimonials } from "../data/testimonials.js";
import { navItems } from "../data/navItems.js";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <FloatingNav navItems={navItems} />

      <section id="above-the-fold" className="lg:mb-20 mb-10">
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
            <h2 className="text-xs md:text-2xl font-medium dark:text-white text-center flex">
              <Image
                src="/logo.png"
                className="mr-1 sm:w-[30px] sm:h-[30px] w-[15px] h-[15px]"
                width={20}
                height={20}
                alt="logo"
              />
              TalentSync
            </h2>
            <h1 className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Seamless Digital Recruitment Solutions for MNCs
            </h1>
            <p className="font-extralight text-center text-base md:text-4xl dark:text-neutral-200 py-4">
              Streamline hiring, reduce time-to-hire, enhance productivity.
            </p>
            <Link
              href="/recruit"
              className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
            >
              Start Recruiting
            </Link>
          </motion.div>
        </AuroraBackground>
      </section>

      <section id="about-us" className="max-w-7xl mx-auto lg:my-20 my-10">
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
          visible: { x: 0, opacity: 1 },
          hidden: { x: "100%", opacity: 0 },
        }}
        id="key-features"
        className="max-w-7xl mx-auto lg:my-20 my-10"
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
          visible: { x: 0, opacity: 1 },
          hidden: { x: "-100%", opacity: 0 },
        }}
        id="benefits"
        className="max-w-7xl w-full mx-auto lg:my-20 my-10"
      >
        <div className="mx-6">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-left lg:mb-6 mb-3">
            Benefits
          </h2>

          <HoverEffect items={benefitsData} />
        </div>
      </motion.section>

      <section className="max-w-7xl mx-auto lg:my-20 my-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          variants={{
            visible: { x: 0 },
            hidden: { x: "-100%" },
          }}
          className="text-3xl font-medium tracking-tight text-white sm:text-left lg:mb-6 mb-3 mx-6"
        >
          Testimonials
        </motion.h2>

        <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </section>

      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div
          className="relative z-10 flex items-center flex-col justify-center px-2 md:px-10 py-4"
          style={{ pointerEvents: "none" }}
        >
          <h1 className="text-white text-2xl md:text-6xl font-bold text-center">
            Start Recruiting with TalentSync
          </h1>

          <div className="mt-10">
            <Link
              href="/recruit"
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
              style={{ pointerEvents: "auto" }}
            >
              Start Recruiting
            </Link>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-[hsla(0,0%,100%,.1)] bg-[hsla(0,0%,10%,.4)] py-14 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h2 className="max-h-8 text-2xl font-medium dark:text-white text-center flex max-w-[163px]">
            <Image src="/logo.png" className="w-full mr-1" width={20} height={20} alt="logo" />
            TalentSync
          </h2>
          <div className="sm:mt-0 mt-4">
            <p>
              Developed by{" "}
              <Link href="https://x.com/shareef_yahya1" className="text-[rgb(14,165,233)]">
                Yahya Shareef
              </Link>
            </p>

            <div className="flex justify-between mt-4 px-4">
              <Link href="https://x.com/shareef_yahya1">
                <IconBrandX />
              </Link>
              <Link href="https://www.linkedin.com/in/yahiya-shareef/">
                <IconBrandLinkedin />
              </Link>
              <Link href="https://www.instagram.com/yahya_shareef1/">
                <IconBrandInstagram />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61558586026851">
                <IconBrandFacebook />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
