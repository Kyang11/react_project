import apiClientNoAuth from './clientNoAuth';
import apiClientTokenAuth from './clientTokenAuth';
import apiClientBasicAuth from './clientBasicAuth';

const endpoint ='/user'; 

const post= async (data, cancelToken)=>{
    let error;
    let user; 

    const response = await apiClientNoAuth(cancelToken).post(endpoint, data);
        if (response.ok){
        user = response.data
    }else{
        error = "An Unexpected Error has Occured. Please Try again later."
    }
    return {
        error,
        user
    }

}



const put= async (token, cancelToken)=>{
    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint);
    return response.ok
}

const del= async (token, cancelToken)=>{
    const response = await apiClientTokenAuth(token, cancelToken).del(endpoint);
    return response.ok
}

export default {
    post,
    put,
    del
}