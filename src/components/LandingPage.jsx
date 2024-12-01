import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Mission from "./Mission";

const images = [
  {
    src: "/images/bg4.jpg",
    heading: "Welcome to Amazing Grace Comprehensive College",
    subheading: "A place where excellence meets opportunity, inspiring greatness in every student.",
  },
  {
    src: "/images/bg2.jpg",
    heading: "Integrity | Discipline | Spirituality",
    subheading: "Building a foundation of character, commitment, and faith for a brighter tomorrow.",
  },
  {
    src: "/images/bg3.jpg",
    heading: "Nurturing Nation Builders Through Scientific Innovation",
    subheading: "Empowering minds to explore, innovate, and transform the world through science.",
  },
  {
    src: "/images/bg1.jpg",
    heading: "Quality at its Best",
    subheading: "Delivering world-class education that shapes future leaders and innovators.",
  },
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative">

       {/* <Mission /> */}
      <section className="h-screen w-full  overflow-hidden">
       
        <AnimatePresence>
          {images.map(
            (image, index) =>
              index === currentIndex && (
                <motion.div
                  key={image.src}
                  className={`absolute inset-0 bg-cover bg-center bg-primary bg-opacity-25`}
                  style={{ backgroundImage: `url(${image.src})`, backgroundColor:'#1A2741' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                ></motion.div>
              )
          )}
        </AnimatePresence>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[currentIndex].heading}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4 md:max-w-[95%] mx-auto">
                {images[currentIndex].heading}
              </h1>
              <p className="text-lg md:text-2xl font-light font-open">
                {images[currentIndex].subheading}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
