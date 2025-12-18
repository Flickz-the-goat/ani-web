"use client"
import { AnimatePresence, motion } from "framer-motion";
import { Laptop, Moon, Text } from "lucide-react";
import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="fixed w-full z-10 py-4">
        <AnimatePresence>
            <motion.div initial={{opacity: 0, scaleX: 0}} animate={{scaleX: 1, opacity: 100, transition: {duration: 1, delay: 0.4, type: "spring"}}} className="flex justify-between py-2 px-5 max-w-6xl mx-auto backdrop-blur-2xl bg-transparent border border-gray-800 hard-shadow">
                <div className="">
                   <Link href={"/"} className="font-extrabold italic text-2xl text-orange-500 underline-animation bg-transparent">flickz</Link> 
                </div>
                <div className="flex gap-4">
                    <div className="hover:cursor-pointer hover:bg-gray-900 transition-all duration-300 p-1 rounded-md group">
                        <Link href={"#projects"}>
                                <Laptop  className="stroke-gray-900 group-hover:stroke-gray-200 transition-all duration-300"/>
                        </Link>
                    </div>
                    <div className="hover:cursor-pointer hover:bg-gray-900 transition-all duration-300 p-1 rounded-md group">
                        <Link href={"#projects"}>
                                <Text className="stroke-gray-900 group-hover:stroke-gray-200 transition-all duration-300"/>
                        </Link>
                    </div>
                    <div className="hover:cursor-pointer hover:bg-gray-900 transition-all duration-300 p-1 rounded-md group">
                                <Moon className="stroke-gray-900 group-hover:stroke-gray-200 transition-all duration-300 "/>
                    </div>
     

                </div>
            </motion.div>
        </AnimatePresence>
        </nav>
    )
}