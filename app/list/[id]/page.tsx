import { getDetail } from "@/api/data";
import LinkBox from "@/components/LinkBox";
import { IDetail } from "@/types/DetailType";
import Image from "next/image";

interface IParams {
  params: Promise<{
    id: string;
  }>;
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

// main
export default async function List(props: IParams) {
  const params = await props.params;

  if (!params?.id) return <div>Invalid ID</div>;

  const detail: IDetail = await getDetail(params.id);
  const books = detail.books;

  if (!books) return <div>Not Found...</div>;

  return (
    <>
      <div
        className={`grid grid-cols-4 gap-4 justify-items-center items-center`}
      >
        {books.map((book) => (
          <div
            key={book.rank}
            className="
                w-60 h-960 max-w-sm
                rounded-e-md shadow-lg
                bg-stone-100
            "
          >
            <Image
              className="rounded-t-lg w-screen h-90"
              src={`${book.book_image}`}
              width={`${book.book_image_width}`}
              height={`${book.book_image_height}`}
              alt={`${book.title}`}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-800">
                {book.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
                {book.author}
              </p>

              <LinkBox content="Buy now" link={`${book.amazon_product_url}`} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
