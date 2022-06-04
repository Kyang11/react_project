import { useEffect, useContext } from 'react'
import { CancelToken } from 'apisauce'
import userAPI  from '../api/userAPI';
import { AppContext } from '../context/AppContext'


export default function useCreateUser(users) {   
    let response
    const {user, setAlert} =useContext(AppContext)

    useEffect(
        ()=>{
            const source = CancelToken.source()
            // console.log('useCreateUser useEffect: ',user.token)

            const createUsers=async()=>{
                
                console.log('useCreateUser createUsers: ',users)
                // console.log('useCreateUser createUsers: ',source.token)

                response = await userAPI.post(users, source.token);
                console.log('useCreateUser createUsers: ',response)
                if (response){
                    setAlert({msg:`Item: ${users.name} Created`, cat:'success'})
                    console.log('register success', response)
                }else if(response!==undefined && response ===false){
                    setAlert({msg:`Please Reauthorize Your Account`, cat:'warning'})
                    ///redirect to the login page
                }
            }
            if(users?.first_name){
                createUsers();
            };
            return ()=>{source.cancel()}
        },[users]
    )
  
}