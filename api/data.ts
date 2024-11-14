const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

// 베스트셀러 리스트 조회
export async function getList() {
  const response = await fetch(`${API_URL}`);
  const json = await response.json();
  return json.results;
}

export async function bestSellerInfo(name: string) {
  const response = await fetch(`${API_URL}/list?name=${name}`);
  const json = await response.json();
  return json;
}
