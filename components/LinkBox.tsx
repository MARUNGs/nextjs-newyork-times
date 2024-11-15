import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ILinkBox } from "@/types/LinkBoxType";

export default function LinkBox({ content, name, link }: ILinkBox) {
  const href = name ? `/list/${name}` : link;

  return (
    <>
      <Link
        className={`
              ${styles.pencilBox}
              inline-block
              shadow-xl
              hover:shadow-lg hover:scale-95 
              transition duration-200
              ring ring-transparent
              focus:ring-gray-300
            `}
        href={`${href}`}
      >
        <span>{content} 👉🏻</span>
      </Link>
    </>
  );
}
