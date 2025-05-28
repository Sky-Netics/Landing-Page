import { urls } from "./urls"
import { generateProducts } from "./client"

export const fetchProductsList= async (page: number, perPage: number) =>{
  const client= generateProducts();
  const response= await client.get(urls.products.list(page, perPage));
  return response.data;
}