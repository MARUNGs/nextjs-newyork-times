import { getList } from "@/api/data";

interface ISeller {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

export default async function Home() {
  const bestSellerList: ISeller[] = await getList();

  return (
    <>
      {bestSellerList?.map((seller: ISeller, i: number) => (
        <div key={i}>{seller.list_name}</div>
      ))}
    </>
  );
}
