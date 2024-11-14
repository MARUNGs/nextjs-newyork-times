import { getDetail } from "@/api/data";

interface IParams {
  params: {
    id: string;
  };
}

export default async function List({ params: { id } }: IParams) {
  await getDetail(id);
  return (
    <>
      <p>detail</p>
    </>
  );
}
