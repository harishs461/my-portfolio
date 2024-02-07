"use client"
import { useState, createContext } from "react"
import { ReactNode } from "react";

interface IsSideBarVisibleContextValue {
    isSideBarVisible: boolean;
    toggleSidebar: () => void;
}

// Create the context with the defined type
export const IsSideBarVisibleContext = createContext<IsSideBarVisibleContextValue>({
    isSideBarVisible: false,
    toggleSidebar: () => { "" }
});

// Create the context provider
export const IsSideBarVisibleContextProvider = ({ children }: { children: ReactNode }) => {
    const [isSideBarVisible, setSideBarVisible] = useState(false);

    const toggleSidebar = () => {
        console.log("clicked")
        console.log(isSideBarVisible)
        setSideBarVisible(!isSideBarVisible);
    };

    const contextValue: IsSideBarVisibleContextValue = {
        isSideBarVisible,
        toggleSidebar,
    };

    return (
        <IsSideBarVisibleContext.Provider value={contextValue}>
            {children}
        </IsSideBarVisibleContext.Provider>
    );
};