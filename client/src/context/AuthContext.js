import {createContext, useEffect } from "react";
import AuthReducer from "../context/AuthReducer"
import { useReducer } from "react";

const userFromLocalStorage = localStorage.getItem("user");
const parsedUser = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
const INITIAL_STATE={
   user: parsedUser,
      // {"_id":"648a316b6099abdc78c36818",
      // "username":"charu",
      // "email":"charu@gmail.com",
      // "password":"$2b$10$4Bqdt1x.hBE1WDF.E3sX1uPkIYgkwUB/TITaN2cdlPb8cU.M2adrW",
      // "createdAt":{"$date":{"$numberLong":"1686778219820"}},
      // "updatedAt":{"$date":{"$numberLong":"1686778219820"}},
      // "__v":{"$numberInt":"0"}},
   isFetching: false,
   error: false,
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
   const[state, dispatch]=useReducer(AuthReducer,INITIAL_STATE)


   useEffect(() => {
      const userFromLocalStorage = localStorage.getItem("user");
      // console.log("userFromLocalStorage:", userFromLocalStorage);
  
      try {
         const parsedUser = JSON.parse(userFromLocalStorage);
         if (parsedUser && parsedUser.user) {
           dispatch({ type: "LOGIN_SUCCESS", payload: { user: parsedUser.user } });
         }
       } catch (error) {
         console.log("Error parsing user data from localStorage:", error);
       }
     }, []);

   useEffect(() => {
      localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);


   return (
       <AuthContext.Provider 
       value={{user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch,
        
        }}>
           {children}
       </AuthContext.Provider>
   )
}