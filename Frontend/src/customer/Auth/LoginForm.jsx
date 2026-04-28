import { Button, Grid2, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { login } from '../../State/Action';

const LoginForm = () => {
    const dispatch=useDispatch();
  const navigate=useNavigate();

      
  

    const handleSubmit=(event)=>{
        event.preventDefault()

        const data=new FormData(event.currentTarget);

        const userData={
            
            email:data.get("email"),
            password:data.get("password")
        }

        dispatch(login(userData))
        console.log("userData ", userData)

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
    <Grid2 container spacing={3}>
        
        
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
                Đăng nhập
            </Button>
        </Grid2>
    </Grid2>
      </form>
       <div className='flex justify-center flex-col items-center'>
                  <div className='py-3 flex items-center'>
                      <p>Bạn chưa có tài khoản ?</p>
                      <Button onClick={() => navigate("/register")} className='ml-5 ' size='small'>Đăng ký</Button>
                  </div>
              </div>
    </div>
  )
}

export default LoginForm
