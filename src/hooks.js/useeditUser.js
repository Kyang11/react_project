import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiItem from '../api/apiItem'
import { AppContext } from '../context/AppContext'

export default function useEditItem(book, bookID) {
    const {user, setAlert} = useContext(AppContext)

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (book?.name){
                (async()=>{
                    response = await apiItem.put(user.token, bookID, book, source.token)
                    if (response){
                         setAlert({msg:`Item: ${book.name} Editted`,'cat':'success'})
                    }else if(response === false && response !== undefined){
                         setAlert({msg:`Please reauthorize you account`,'cat':'warning'})
                    }
                })()
            }
            return ()=>{source.cancel()}
        },[book, bookID, user.token]
    )
}