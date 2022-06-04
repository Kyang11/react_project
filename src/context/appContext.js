import {createContext, useState} from "react";

export const AppContext = createContext();

const AppContextProvider=({children})=>{
    
    const getUserFromLS = ()=>{
        let user = localStorage.getItem('user')
        if (user){
            return JSON.parse(user)
        }
    }
    const [user, _setUser] = useState(getUserFromLS())
    const [alert, setAlert]=useState({});


    const setUser = (user)=>{
        localStorage.setItem('user', JSON.stringify(user))
        _setUser(user)
    }



    const getBookFromLS = ()=>{
        let book = localStorage.getItem('book')
        if (book){
            return JSON.parse(book)
        }
    }
    const [book, _setBook] = useState(getBookFromLS())


    const setBook = (book)=>{
        localStorage.setItem('book', JSON.stringify(book))
        _setBook(book)
    }

    const values = {
        user,
        setUser,
        alert,
        setAlert,
        book,
        setBook
    }

    




    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider