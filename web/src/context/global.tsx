import { createContext, useState, ReactNode } from "react";

interface ChildrenProps {children: ReactNode}
interface AuthContextData {
  loadingAPI: Boolean,
  setLoadingAPI: Function,

  asideMenu: Boolean,
  setAsideMenu: Function,
}

const initialState: AuthContextData = {
  loadingAPI: true,
  setLoadingAPI: Function,

  asideMenu: false,
  setAsideMenu: Function,
}

export const ContextGlobal = createContext<AuthContextData>(initialState);

const GlobalContext = ({children}:ChildrenProps) => {
  const [loadingAPI, setLoadingAPI] = useState(true);
  const [asideMenu, setAsideMenu] = useState(false);

  return (
    <ContextGlobal.Provider value={{
      loadingAPI, setLoadingAPI,
      asideMenu, setAsideMenu,
    }}>
      {children}
    </ContextGlobal.Provider>
  );
}

export default GlobalContext;