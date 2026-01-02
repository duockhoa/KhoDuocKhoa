"use client";
import { useContext, createContext, useState } from "react";

type TokenContextType = {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (accessToken: string, refreshToken: string) => void;
};

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const useTokens = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useTokens must be used within a TokenProvider");
  }
  return context;
};

export const TokenProvider = ({
  children,
  initalToken,
}: {
  children: React.ReactNode;
  initalToken: { accessToken: string | null; refreshToken: string | null };
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    initalToken.accessToken
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    initalToken.refreshToken
  );
  const setTokens = (accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  };

  return (
    <TokenContext.Provider value={{ accessToken, refreshToken, setTokens }}>
      {children}
    </TokenContext.Provider>
  );
};
