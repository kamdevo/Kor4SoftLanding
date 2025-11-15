"use client";

import { motion, useInView, type UseInViewOptions } from "framer-motion";
import { useRef, ReactNode } from "react";

interface InViewProps {
  children: ReactNode;
  variants?: {
    hidden: any;
    visible: any;
  };
  transition?: any;
  viewOptions?: UseInViewOptions;
  className?: string;
}

export function InView({
  children,
  variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  viewOptions = { once: true, margin: "0px 0px -100px 0px" },
  className = ""
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
