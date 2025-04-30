"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const queryClient= new QueryClient();

interface IChildren{
  children: React.ReactNode | React.JSX.Element | React.JSX.Element[]
}

export const QueryClintProvider: React.FC<IChildren>= ({ children }) =>{
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}