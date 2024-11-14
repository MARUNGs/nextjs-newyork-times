import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <Link href={`/`}>
        <button>Home</button>
      </Link>
      <Link href={`/about`}>
        <button>About</button>
      </Link>
    </>
  );
}
