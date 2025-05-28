export const urls= {
  account: {
    login: "accounts/api/token/",
    signup: "accounts/register/",
    refresh: "accounts/api/token/refresh/"
  },
  products: {
    list: (page: number, perPage: number) => `products?skip=${page}&limit=${perPage}`
  }
}