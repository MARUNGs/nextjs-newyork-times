const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

// 베스트셀러 리스트 조회
export async function getList() {
  const response = await fetch(`${API_URL}`);
  const json = await response.json();
  return json.results;
}

export async function getDetail(id: string) {
  const response = await fetch(`${API_URL}/list?name=${id}`);
  const json = await response.json();
  return json.results;
}
