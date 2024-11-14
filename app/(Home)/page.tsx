import { getList } from "@/api/data";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

interface ISeller {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

export default async function Home() {
  const sellers: ISeller[] = await getList();

  return (
    <>
      <div className="gap-4">
        <h1 className="font-medium pl-6 pt-6 pb-6 text-center">
          The New York Times Best Seller Explorer
        </h1>
        {sellers?.map((seller: ISeller, i: number) => (
          <Link
            key={i}
            className={`${styles.pencilBox} inline-block`}
            href={`/list/${seller.list_name_encoded}`}
          >
            <span>{seller.list_name} 👉🏻</span>
          </Link>
        ))}
      </div>
    </>
  );
}
