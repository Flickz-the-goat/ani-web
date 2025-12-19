import Link from "next/link";

export default function ClickButton({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link
      href={`${link}`}
      className="border-2 border-neutral-900 px-5 py-2 bg-white
                     shadow-[4px_4px_0px_#000]
                     hover:translate-x-1 hover:translate-y-1 hover:shadow-none
                     transition-all fill-animation"
    >
      {text}
    </Link>
  );
}
