import React, {useContext, createContext} from 'react'

// Create context for authentication data
const AuthContext = createContext();

// Define a function to get data from Auth context

export function useAuth() {
    return useContext(AuthContext);
}

const AuthContextProvider = () => {
  return (
    <div>AuthContextProvider</div>
  )
}

export default AuthContextProvider;