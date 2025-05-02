"use client"

import React from "react"
import Cookies from "js-cookie"
import { useQuery } from "@tanstack/react-query"
import { refreshToken } from "../apis/users.api"

interface RefreshContextType {
  error: Error | null
  isRefreshing: boolean
}

const RefreshContext = React.createContext<RefreshContextType | undefined>(undefined);

export const RefreshProvider = ({ children }: { children: React.ReactNode }) => {
  const [shouldRefresh, setShouldRefresh] = React.useState<boolean>(false);

  const refreshTokenQuery = useQuery({
    queryKey: ['refreshToken'],
    queryFn: async () => {
      const refreshTokenValue = Cookies.get('refreshToken');
      if (!refreshTokenValue) throw new Error('No refresh token available');
      return await refreshToken(refreshTokenValue);
    },
    enabled: shouldRefresh,
    staleTime: 5 * 60 * 1000,
    onSuccess: (data) => {
      Cookies.set('token', data.refresh);
      setShouldRefresh(false);
    },
    onError: () => {
      Cookies.remove('token');
    }
  })

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (Cookies.get('refreshToken')) setShouldRefresh(true);
    }, 5 * 60 * 1000)

    return () => clearInterval(interval);
  }, []);

  return (
    <RefreshContext.Provider
      value={{
        isRefreshing: refreshTokenQuery.isFetching,
        error: refreshTokenQuery.error as Error | null
      }}
    >
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh= () =>{
  return React.useContext(RefreshContext);
}