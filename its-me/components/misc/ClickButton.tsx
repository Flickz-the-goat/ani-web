"use client";
import Link from "next/link";
import {motion} from "framer-motion";

export default function ClickButton({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <motion.a
      initial={{opacity: 0}} animate={{opacity: 100, transition:{delay: 1.8,type: "spring"}}}
      href={`${link}`}
      target="_blank"
      className="border-2 border-(--borderColor) px-5 py-2 bg-(--background)
                     shadow-[4px_4px_0px_var(--shadowColor)]
                     hover:translate-x-1 hover:translate-y-1 hover:shadow-none
                     transition-all fill-animation"
    >
      {text}
    </motion.a>
  );
}
