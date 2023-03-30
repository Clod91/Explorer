const BASE_URL = "https://failteireland.azure-api.net/opendata-api/v1/";

export const GET = async (path) => {
  const res = await fetch(BASE_URL + path);
  const data = await res.json();

  return data;
};
