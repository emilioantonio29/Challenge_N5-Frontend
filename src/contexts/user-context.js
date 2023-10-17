import { createContext, useState, useEffect } from "react";

// memory space created
export const UserGlobalContextMemorySpace = createContext();

export const UserGlobalContext = ({children}) =>{

    const [user, setUser] = useState(null);
    const [mainLoader, setMainLoader] = useState(true);
    const [fireSearch, setFireSearch] = useState(false);

    const logout = () =>{
        setUser(null);
    }

    useEffect(()=>{
        //Mount: 
        setTimeout(() => {
            setMainLoader(false);
        }, 1200);

        return () =>{
        //Unmount

        }
      }, [])

    return(
        <UserGlobalContextMemorySpace.Provider 
            value={
                {
                    user, setUser, 
                    mainLoader, setMainLoader,
                    logout,
                    fireSearch, setFireSearch
                }}>
            {children}
        </UserGlobalContextMemorySpace.Provider>
    );
}