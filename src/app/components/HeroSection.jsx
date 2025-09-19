"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

const withBase = (p) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${p}`


const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Harshita Poojary", 1000, "a Software Developer", 1000, "a Data Scientist", 1000, "a Tech Enthusiast", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my portfolio website!
          </p>
          <div>
            <Link
              href={`${withBase("/") }#contact`}
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/docs/Harshita Poojary Resume.pdf"  
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6 mt-6">
          <a href="https://www.linkedin.com/in/harshitapoojary/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-5xl hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://github.com/HarshitaDPoojary/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-5xl hover:text-gray-500 transition-colors" />
          </a>
        </div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden border-4 border-pink-300">
            <Image
              src={withBase("/images/Harshita-Headshot.jpg")}
              alt="hero image"
              className="w-full h-full object-cover rounded-full border-4 border-[#FF1493]"
              layout="fill"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
