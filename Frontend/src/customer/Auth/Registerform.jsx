import { Button, Grid2, TextField } from '@mui/material'
import React, { useEffect, useRef } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { getUser, register } from '../../State/Action';

const Registerform = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const jwt = localStorage.getItem("jwt");
    const auth = useSelector(store => store.auth);

    useEffect(() => {
        if(jwt){
            dispatch(getUser(jwt))
        }
    }, [jwt,auth.jwt]);


    const handleSubmit=(event)=>{
        event.preventDefault()

        const data=new FormData(event.currentTarget);

        const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")
        }
        dispatch(register(userData))
        console.log("userData ", userData)

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
    <Grid2 container spacing={3}>
        <Grid2 item size={{ xs: 12, lg: 6 }}>
            <TextField
                required
                id='firstName'
                name='firstName'
                label="Tên"
                fullWidth
                autoComplete='given-name'
            />
        </Grid2>
        <Grid2 item size={{ xs: 12, lg: 6 }}>
            <TextField
                required
                id='lastName'
                name='lastName'
                label="Họ"
                fullWidth
                autoComplete='given-name'
            />
        </Grid2>
        <Grid2 size={{ xs: 12}}>
            <TextField
                required
                id='email'
                name='email'
                label="Email"
                fullWidth
                autoComplete='email'
            />
        </Grid2>
        <Grid2 item size={{ xs: 12}}>
            <TextField
                required
                id='password'
                name='password'
                label="Mật khẩu"
                type="password"
                fullWidth
                autoComplete='new-password'
            />
        </Grid2>
        <Grid2 item size={{ xs: 12}}>
            <Button
                className='bg-[#9155FD] w-full'
                type='submit'
                variant='contained'
                size='large'
                sx={{ padding: ".8rem 0",bgcolor:"#9155FD"}}
            >
                ĐĂNG KÝ
            </Button>
        </Grid2>
    </Grid2>
      </form>
      <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
                <p>Bạn đã có tài khoản ?</p>
                <Button onClick={() => navigate("/login")} className='ml-5 ' size='small'>Đăng nhập</Button>
            </div>
        </div>
    </div>
  )
}

export default Registerform
