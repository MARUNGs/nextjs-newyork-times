import { getList } from "@/api/data";
import LinkBox from "@/components/LinkBox";
import { ISeller } from "@/types/HomeType";

export default async function Home() {
  const sellers: ISeller[] = await getList();

  return (
    <>
      <div className="gap-4">
        <h1 className="font-medium pl-6 pt-6 pb-6 text-center">
          THE NEW YORK TIMES BEST SELLER EXPLORER
        </h1>
        {sellers?.map((seller: ISeller, i: number) => (
          <LinkBox
            key={i}
            content={seller.list_name}
            name={seller.list_name_encoded}
          />
        ))}
      </div>
    </>
  );
}
