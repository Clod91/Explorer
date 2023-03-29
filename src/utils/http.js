const BASE_URL = "https://fakestoreapi.com/products";

export const GET = async (path) => {
  const res = await fetch(BASE_URL + path);
  const data = await res.json();

  return data;
};
