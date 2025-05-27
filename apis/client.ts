import axios from "axios"

export const generateClient= () =>{
  return axios.create({ baseURL: "http://127.0.0.1:8000" })
}

export const generateProducts= () =>{
  return axios.create({ baseURL: "https://dummyjson.com/" })
}