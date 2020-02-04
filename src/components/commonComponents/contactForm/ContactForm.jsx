

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrownButton } from '../button/Buttons';
import { Paper } from '@mui/material';


export default function SignUp() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

    };

    return (
        <Box sx={{ boxShadow: '0px 2px 57px #e2e2e2', }} mb={10}>
            <Box textAlign='center' pt={10} sx={{ color: '#010101' }}>
                <Box sx={{ display: 'inline-block' }} mb={2}>
                    <Container>
                        <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important' }}>
                            Leave Us Your Info
                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '15px' }}>
                            Contact Us for any further queries or details, and one of our experts will be glad to assist you
                        </Typography>
                    </Container>
                </Box>
            </Box >
            <Container sx={{ padding: '10px 10px 80px 10px', }}>
                <CssBaseline />

                <Box
                    sx={{
                        paddingTop: 3,
                        paddingBottom: 3,
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: '1px solid #4B0606',
                        borderRadius: '5px',

                    }}
                >
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, fontSize: '10px' }}>
                        <Container>
                            <Grid container spacing={2} mb={5} >
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="name"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        boxShadow={3}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="number"
                                        label="Contact Number"
                                        name="number"
                                        autoComplete="number"
                                        type={'tel'}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="query"
                                        label="Enter Query"
                                        name="query"
                                        autoComplete="query"
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        required
                                        fullWidth
                                        name="message"
                                        label="Enter Your Message here ..."
                                        type="text"
                                        id="message"
                                        multiline
                                        rows={4}
                                        minRows={3}
                                        maxRows={4}
                                    />
                                </Grid>
                            </Grid>
                            <BrownButton mt={5} type='submit' link={''} text={'submit'} />
                        </Container>
                    </Box>
                </Box>
            </Container>
        </Box >
    );
}