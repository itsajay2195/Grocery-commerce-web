import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(null);

export const AppcontextProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setSeller] = useState(false);
  const value: any = { navigate, user, setUser, isSeller, setSeller };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
