import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 800); // ⚡ faster

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            y: 0,
            scaleY: 1.15,
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%",
          }}
          animate={{
            y: 0,
            scaleY: 1,
          }}
          exit={{
            y: "-100%",
            scaleY: 0.7, // compress for stronger motion
            borderBottomLeftRadius: "100%", // 🌊 full curve
            borderBottomRightRadius: "100%", // 🌊 full curve
            transition: {
              duration: 0.4, // ⚡ faster exit
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-[9999] bg-[#B2F6E3] origin-top"
        />
      )}
    </AnimatePresence>
  );
}