const API_URL = "https://books-api.nomadcoders.workers.dev";

// 베스트셀러 리스트 조회
export async function getList() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json.results;
}

// 베스트셀러 정보 조회
export async function getDetail(id: string) {
  const response = await fetch(`${API_URL}/list?name=${id}`);
  const json = await response.json();
  console.log(json.results);
  return json.results;
}
