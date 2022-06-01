import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import userAPI from '../api/userAPI'
import {CancelToken} from 'apisauce'


// Defining our yup validation
const FormSchema=Yup.object(
    {
        email:Yup.string().email("Must be a valid e-mail format").required(),
        first_name:Yup.string().required(),
        last_name:Yup.string().required(),
        password:Yup.string().required()
    }
)




export default function RegisterForm({ user={id:1, email: "gizmo@yahoo.com", first_name:"Gizmo", last_name:"Taylor", password:"123"}}){

    const initialValues={
        email:user?.email ?? '',
        first_name:user?.first_name ?? '',
        last_name:user?.last_name ?? '',
        password:user?.password ?? '',
    }
    
    const handleSubmit= async (values, resetForm)=>{
        if (user){
            console.log('Editing Profile')
        }else{
            console.log('Registering')
        }
        console.log(values)

        const source = CancelToken.source();
       const respose= await userAPI.post(values, source.token)
       console.log(respose)
        resetForm(initialValues)
    }
    
    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values,  {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true

    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="email"
                name="email"
                fullWidth
                sx={{mb:2, mt:2}}
                label="Email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
                id="first_name"
                name="first_name"
                fullWidth
                sx={{mb:2}}
                label="First Name"
                placeholder="First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                helperText={formik.touched.first_name && formik.errors.first_name}
            />

        <TextField
                id="last_name"
                name="last_name"
                fullWidth
                sx={{mb:2}}
                label="Last Name"
                placeholder="Last name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
            />

            <TextField
                id="password"
                name="password"
                fullWidth
                sx={{mb:2}}
                label="Password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />

            <Button type="submit" sx={{width:"100%"}}>{user?"Edit Profile":"Register"}</Button>
        </form>
    )


}