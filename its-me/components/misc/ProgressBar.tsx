"use client"
import { motion, useScroll } from "framer-motion";

export default function ProgressBar(){
    const {scrollYProgress} = useScroll()

    return (
        <motion.div style={{scaleX: scrollYProgress, position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#f59e0b",}}>
        </motion.div>
    )
}