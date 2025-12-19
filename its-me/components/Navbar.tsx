"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, Laptop, Moon, Text } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function Navbar({light, setLight}: {light: boolean, setLight: Dispatch<SetStateAction<boolean>>}) {
  return (
    <nav className="fixed w-full z-10 py-4 px-4">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            scaleX: 1,
            opacity: 100,
            transition: { duration: 1, delay: 0.4, type: "spring" },
          }}
          className="flex justify-between py-2 px-5 max-w-6xl mx-auto backdrop-blur-xl bg-transparent border-2 border-(--borderColor) shadow-[4px_4px_0px_var(--shadowColor)]"
        >
          <div className="">
            <Link
              href={"/"}
              className="font-extrabold italic text-2xl text-(--effect) underline-animation bg-transparent"
            >
              flickz
            </Link>
          </div>
          <div className="flex gap-4">
            <div className="hover:cursor-pointer hover:bg-(--navHoverColor) transition-all duration-300 p-1 rounded-md group">
              <Link href={"#skills"}>
                <Brain className="stroke-(--navHoverColor) group-hover:stroke-(--navHoverStroke) transition-all duration-300" />
              </Link>
            </div>
           <div className="hover:cursor-pointer hover:bg-(--navHoverColor) transition-all duration-300 p-1 rounded-md group">
              <Link href={"#resume"}>
                <Text className="stroke-(--navHoverColor) group-hover:stroke-(--navHoverStroke) transition-all duration-300" />
              </Link>
            </div>
            <div onClick={() => setLight(!light)} className="hover:cursor-pointer hover:bg-(--navHoverColor) transition-all duration-300 p-1 rounded-md group">
                <Moon className="stroke-(--navHoverColor) group-hover:stroke-(--navHoverStroke) transition-all duration-300 " />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </nav>
  );
}
