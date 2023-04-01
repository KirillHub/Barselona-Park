import { AllIcons } from "@/share/allicons";
import styles from "./style.module.scss";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import useMedia from "use-media";

const ServiceIcons = () => {
  const icons = AllIcons();

  const isTablet = useMedia({ maxWidth: 992 });

  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  const variants = {
    hidden: isTablet ? { x: -100 } : { x: -400 },
    visible: { x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      initial={inView ? { x: 0 } : { x: -400 }}
    >
      <div className={styles.service}>
        <h2>Услуги</h2>
        <AnimatePresence>
          <div className={styles.service__icons}>
            {icons.map((icon, index) => (
              <motion.div
                key={icon.title}
                className={styles.service__icons_icon}
                initial={{ opacity: 0, y: -10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: Math.random() * 2 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div>{icon.jsx}</div>
                <span>{icon.title}</span>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ServiceIcons;
