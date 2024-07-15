import {createContext} from 'react'

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
    const contextData = {name:'Rakib'}
    return <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
}
export default ContextProvider