"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Banner() {
  return (
    <div className="relative overflow-hidden w-full h-full">
      {/* Background Image */}
      <motion.div
        className="absolute bottom-0 w-full h-full"
        whileHover={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        <Image
          className="w-full h-full object-cover object-center"
          src="/images/channel_Bg.jpg"
          alt="banner"
          layout="fill"
          priority
        />
      </motion.div>

      {/* Effect Images */}
      <motion.div
        className="absolute right-60"
        whileHover={{ x: 10 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        <Image
          className="object-cover object-center"
          src="/images/channel_effect2.jpg"
          alt="effect"
          width={120}
          height={120}
          priority
        />
      </motion.div>

      <motion.div
        className="absolute left-60"
        whileHover={{ x: -10 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        <Image
          className="object-cover object-center"
          src="/images/channel_effect3.jpg"
          alt="effect"
          width={120}
          height={120}
          priority
        />
      </motion.div>

      <motion.div
        className="absolute left-0"
        whileHover={{ x: -10 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        <Image
          className="object-cover object-center"
          src="/images/channel_effect1.jpg"
          alt="effect"
          width={120}
          height={120}
          priority
        />
      </motion.div>
    </div>
  );
}
