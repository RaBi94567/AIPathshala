import { createContext, useState, useContext } from "react"

const GlobalContext = createContext();

export const GlobalPrev = ({children}) => {
    const [address, setAddress] = useState('');
    
    return (
        <GlobalContext.Provider value={{address, setAddress}}>
        {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext);
