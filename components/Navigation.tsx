"use client";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <>
      <div>
        <div
          className={`
            grid grid-cols-2 gap-2 h-28
            pt-5 justify-items-center items-center
          `}
        >
          <Link href={`/`}>
            <div
              className={`
              ${styles.pencilHatching}
              flex justify-center items-center
              w-40 h-20 pr-70 rounded-full
              ${path === "/" && styles.pencilHatchingDefault}
            `}
            >
              <span className="text-3xl">Home</span>
            </div>
          </Link>
          <Link href={`/about`}>
            <div
              className={`
              ${styles.pencilHatching}
              flex justify-center items-center
              w-40 h-20 pl-70 rounded-full
              ${path === "/about" && styles.pencilHatchingDefault}
            `}
            >
              <span className="text-3xl">About</span>
            </div>
          </Link>
        </div>
        <div className={styles.pencilLine}></div>
      </div>
    </>
  );
}
