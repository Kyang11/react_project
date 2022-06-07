import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import bookAPI from '../api/bookAPI'
import { AppContext } from '../context/AppContext'

export default function useDeleteItem(book) {
    const {user, setAlert} = useContext(AppContext)

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (book?.name){
                (async()=>{
                    response = await bookAPI.del(user.token, book.id, source.token)
                    if (response){
                         setAlert({msg:`Item: ${book.name} Editted`,cat:'success'})
                    }else if(response === false && response !== undefined){
                         setAlert({msg:`Please reauthorize you account`,cat:'warning'})
                    }
                })()
            }
            return ()=>{source.cancel()}
        },[book, user.token]
    )
}