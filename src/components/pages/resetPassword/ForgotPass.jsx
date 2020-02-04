import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BarWave from "react-cssfx-loading/lib/BarWave";
import { useDispatch, useSelector } from 'react-redux';
import { forgotpasswordHandler } from '../../../RTK/Reducers/Reducers';

export default () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ErrorText = text => <Typography sx={{ fontSize: '9px', color: 'red', marginBottom: '8px' }}>{text}</Typography>
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { status,
        adminIsActive,
        loader,
        ourServicesSection,
        weDealInSection,
        upCommingSection,
        reviewsSection,
        BuildRealBrickSection,
        teamSection,
        groupSection,
        branchSection,
        sliderSection, } = useSelector(state => state.mainReducer);
    if (status === 'success') {
        navigate('/login');
    }

    const myHandleSubmit = data => {
        if (data.email) {
            dispatch(forgotpasswordHandler({
                email: data.email,
            }));
        } else {
            toast.error('please enter email');
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
                            <Typography fontSize={{ xs: '25px', sm: '27px', md: '32px' }}
                                sx={{ fontWeight: 'bolder' }}>
                                Enter Your Mail
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit(myHandleSubmit)} sx={{ mt: 1 }}>
                                <TextField
                                    sx={{ backgroundColor: '#FFF6DB' }}
                                    margin="normal"
                                    fullWidth
                                    error={errors.email}
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    {...register('email', { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
                                />
                                {errors.email && <>{errors.email.type === 'pattern' ? ErrorText("Enter a Vlid Patteren !") : ErrorText("Field is Required !")}</>}
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
                    {/* <img src={sectionPhoto} alt="ad" /> */}
                    <center> <BarWave color="#2D454F" width="150px" height="150px" duration="3s" /></center>
                </Grid>
            </Grid>
        </Box>
    );
}