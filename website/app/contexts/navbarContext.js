import { createContext, useContext, useState } from "react";

export const NavbarContext  = createContext();

export const NavbarProvider = ({children}) => {
    const [selectedPage, setSelectedPage] = useState("начало"); //where are we navigationwise
    const [isTopOfPage, setIsTopOfPage] = useState(true);


    return (
        <NavbarContext.Provider value={{
            selectedPage,
            setSelectedPage,
            isTopOfPage,
            setIsTopOfPage
        }}>
            {children}
        </NavbarContext.Provider>
    )
}


// Custom Hook to not repeat useContext in every Component
export const useNavbarContext = () => {
    const context = useContext(NavbarContext);
    return context;
}