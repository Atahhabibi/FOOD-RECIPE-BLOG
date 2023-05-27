import { createContext ,useContext,useReducer,useState} from "react";
import { getItemsFromStorage } from "./LocalStorage";


const AppContext=createContext();


export const AppProvider=({children})=>{

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [foods, setFoods] = useState(getItemsFromStorage('foods'))
    const [isLoading, setIsLoading] = useState(true);

    

    const contextValue={
   
        setFoods,
        foods,
        setIsSidebarOpen,
        isSidebarOpen,
        setIsLoading,
        isLoading,
        isSidebarOpen,
        setIsSidebarOpen,

    }

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}



export const useAppContext=()=>{
    return useContext(AppContext)
}