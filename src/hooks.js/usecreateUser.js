
import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import bookAPI from '../api/bookAPI'
import { AppContext } from '../context/AppContext'

export default function useCreateItem(book) {
    const {user, setAlert} = useContext(AppContext)

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (book?.name){
                (async()=>{
                    response = await bookAPI.post(user.token, book, source.token)
                    if (response){
                        setAlert({'msg':`Item: ${book.name} Created`, cat:'success'})
                    }else if(response === false && response !== undefined){
                        setAlert({'msg':`Please reauthorize you account`, cat:'warning'})
                    }
                })()
            }
            return ()=>{source.cancel()}
        },[book, user.token]
    )
}