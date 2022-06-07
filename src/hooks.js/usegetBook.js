import {useEffect, useState} from 'react';
import bookAPI from '../api/bookAPI';
import {CancelToken} from 'apisauce';

export default function usegetBook(bookid=null){
    const [books, setBooks]=useState([])

    useEffect(
        () => {
            const source = CancelToken.source()
            // Do we have a book ID
            bookid ?
            // If so...
            (async()=>{
                const response = await bookAPI.getbyid(bookid, source.token);
                setBooks(response)
            })()
            :
            // If no book ID
            (async()=>{
                const response = await bookAPI.getallbooks(source.token)
                setBooks(response)
            })()
            return () => (source.cancel())
        },
        [bookid]
    )
    return books
    
}