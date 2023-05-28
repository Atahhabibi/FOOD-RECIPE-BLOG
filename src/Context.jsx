import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const contextValue = {
    setFoods,
    foods,
    setIsSidebarOpen,
    isSidebarOpen,
    setIsLoading,
    isLoading,
    isSidebarOpen,
    setIsSidebarOpen,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
