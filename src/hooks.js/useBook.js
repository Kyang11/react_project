import {useEffect, useState} from 'react';
import bookAPI from '../api/bookAPI';
import {CancelToken} from 'apisauce';

export default function useBook(){
    const [books, setBooks]=useState([])

    useEffect(
        ()=>{
            const source=CancelToken.source();
            const getBooks=async()=>{
                const response = await bookAPI.get(source.token)
                setBooks(response)
            }
            getBooks()
            return ()=>{source.cancel();}

        },
        []
    )

    return books
}