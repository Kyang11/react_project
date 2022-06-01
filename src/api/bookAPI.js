import apiClientNoAuth from "./clientNoAuth";

const endpoint = '/book'

const getbook = async(cancelToken)=>{
    let error;
    let books;

    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    if(response.ok){
        items=response.data.books
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        books
    }
}


const getbookbyid = async(id, cancelToken)=>{
    let error;
    let book;

    const response = await apiClientNoAuth(cancelToken).get(endpoint+'/'+id);
    if(response.ok){
        book=response.data
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        book
    }
}

export default {
    getbook,
    getbookbyid
}