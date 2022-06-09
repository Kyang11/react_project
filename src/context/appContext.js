import {createContext, useReducer, useState} from "react";
import { bookshopReducer, booklistActions } from "../reducers/bookshopReducer";

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
    const [readlist, dispatch] = useReducer(bookshopReducer,getUserFromLS()??[])


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
        addtoList:(book)=>{
            dispatch({type: booklistActions.addtoList, book})
        },
        addBulkTolist:(book)=>{
            dispatch({type: booklistActions.addBulkTolist, book})
        },
        removeFromlist:(book)=>{
            dispatch({type: booklistActions.removeFromlist, book})
        },

        removeAllFromlist:(book)=>{
            dispatch({type: booklistActions.removeAllFromlist, book})
        },
        addBulkTolist:()=>{
            dispatch({type: booklistActions.emptylist})
        }
    }


    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider