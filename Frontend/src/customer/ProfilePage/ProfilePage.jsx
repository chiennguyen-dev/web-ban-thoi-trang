import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Paper, Typography, Avatar, Box } from '@mui/material';

const ProfilePage = () => {
    // Lấy thông tin user từ state auth trong Redux
    const auth = useSelector(store => store.auth);

    return (
        <Box className="p-10">
            <Paper elevation={3} className="p-8 max-w-2xl mx-auto">
                <Typography variant="h4" gutterBottom>Thông tin cá nhân</Typography>
                
                {auth.user ? (
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} sm={4} className="flex justify-center">
                            <Avatar 
                                sx={{ width: 100, height: 100, bgcolor: 'purple' }}
                            >
                                {auth.user.firstName[0].toUpperCase()}
                            </Avatar>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography variant="h6">Họ và tên: {auth.user.firstName} {auth.user.lastName}</Typography>
                            <Typography variant="body1" color="textSecondary">Email: {auth.user.email}</Typography>
                            <Typography variant="body1" color="textSecondary">Quyền hạn: {auth.user.role}</Typography>
                        </Grid>
                    </Grid>
                ) : (
                    <Typography>Đang tải thông tin hoặc bạn chưa đăng nhập...</Typography>
                )}
            </Paper>
        </Box>
    );
};

export default ProfilePage;