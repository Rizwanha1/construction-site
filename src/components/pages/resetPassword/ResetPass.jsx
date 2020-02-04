import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Hypnosis } from "react-cssfx-loading";
import { InputAdornment } from '@mui/material';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { resetDone } from '../../../RTK/Reducers/Reducers';

export default () => {
    const { token } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const ErrorText = text => <Typography sx={{ fontSize: '9px', color: 'red', marginBottom: '8px' }}>{text}</Typography>
    const myHandleSubmit = (data) => {
        if (data.resetNewPassword && data.confirmPassword) {
            if (data.resetNewPassword === data.confirmPassword) {
                dispatch(resetDone({
                    newPassword: data.resetNewPassword,
                    token: token,
                }));
                alert('Password Changed Successfully');
                document.getElementById('restForm').reset();
            } else {
                toast.error('password does not match');
            }
        } else {
            toast.error('Please enter password');
        }
    };

    return (
        <Box maxWidth={'xl'} margin='auto'>
            <Grid container alignItems={'center'} justifyContent={'center'}>
                <Grid item xs={false} md={5} mb={5}>
                    <Container component="main" maxWidth="xs">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography fontSize={{ xs: '20px', sm: '25px', md: '30px' }}
                                sx={{ fontWeight: 'bolder' }}>
                                Rest Password
                            </Typography>
                            <Box component="form" id='restForm' onSubmit={handleSubmit(myHandleSubmit)} sx={{ mt: 1 }}>
                                <TextField
                                    sx={{ backgroundColor: '#FFF6DB' }}
                                    margin="normal"
                                    fullWidth
                                    id="resetNewPassword"
                                    label="Enter New Password"
                                    name="resetNewPassword"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <VisibilityIcon sx={{ cursor: 'pointer' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    {...register('resetNewPassword', { required: true, minLength: 7 })}
                                />
                                {errors.resetNewPassword && <>{errors.resetNewPassword.type === 'minLength' ? ErrorText("Minimum 7 Characters!") : ErrorText("New Password is Required!")}</>}

                                <TextField
                                    sx={{ backgroundColor: '#FFF6DB' }}
                                    margin="normal"
                                    fullWidth
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <VisibilityIcon sx={{ cursor: 'pointer' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    {...register('confirmPassword', { required: true })}
                                />
                                {errors.confirmPassword && <>{errors.confirmPassword.type === 'minLength' ? ErrorText("Minimum 7 Characters!") : ErrorText("New Password is Required!")}</>}
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, pr: 2, pl: 2, borderRadius: '30px', background: '#2D454F', color: 'white' }}
                                >
                                    Proceed
                                </Button>

                            </Box>
                        </Box>
                    </Container>
                </Grid>
                {/* image  */}
                <Grid item xs={false} md={5} mb={5}>
                    <center> <Hypnosis color="#2D454F" width="150px" height="150px" duration="3s" /></center>
                </Grid>
            </Grid>
        </Box>
    );
}