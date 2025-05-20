export const urls= {
  account: {
    login: "accounts/api/token/",
    signup: "accounts/register/"
  },
  products: {
    list: (page: number, perPage: number) => `products?skip=${page}&limit=${perPage}`
  }
}