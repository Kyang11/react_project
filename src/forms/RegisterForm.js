import React, { useContext, useState, useEffect } from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import { AppContext } from '../context/AppContext';
import Error from '../components/Error';
import usedeleteUser from '../hooks/usedeleteUser';
import usecreateUser from '../hooks/usecreateUser';
import useeditUser from '../hooks/useeditUser';


// Defining our yup validation
const FormSchema=Yup.object(
    {
        email:Yup.string().email("Must be a valid e-mail format").required(),
        first_name:Yup.string().required(),
        last_name:Yup.string().required(),
        password:Yup.string().required()
    }
)




export default function RegisterForm({
     user={id:1, email: "Ku@gmail.com", first_name:"Ku", last_name:"Yang", password:"abc123"}}){

        const [newUser, setNewUser] = useState({})
        const [editUser, setEditUser] = useState({})
        const [deleteUser, setDeleteUser] = useState({})
    
        usecreateUser(newUser)
        useeditUser(editUser)
        usedeleteUser(deleteUser)

    const initialValues={
        email:user?.email ?? '',
        first_name:user?.first_name ?? '',
        last_name:user?.last_name ?? '',
        password:user?.password ?? '',
    }
    
    const handleSubmit = (values, resetForm) => {
        if (!user) {
            setNewUser(values)
            console.log('Registering')
        } else {
            setEditUser({ ...values })
            console.log('Edit Profile')
        }
        console.log(values)
        resetForm(initialValues)
    }

    
    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values,  {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true

    })

    const handleDelete = (e) => {
        
        setDeleteUser(user)
        
        // console.log('test delete', user)
    }

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