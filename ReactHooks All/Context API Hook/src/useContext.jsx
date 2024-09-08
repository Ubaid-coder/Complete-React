import { createContext} from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const userData = {
        name: "John Doe",
        age: 30,
        email: 'kgh1235@gmail.com'
    }
    return <AppContext.Provider value={userData}>{children}</AppContext.Provider>
}

export  {AppContext, AppProvider};

