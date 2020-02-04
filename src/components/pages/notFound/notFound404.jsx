import { CropSquare } from "@mui/icons-material"
import { Box, Divider, Grid, Typography } from "@mui/material"
import { BrownButton } from "../../commonComponents/button/Buttons"
import ErrorImage from "./404ErrorImage.png"

import React from "react";
export default () => {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <Box sx={{
            backgroundColor: '#0F161E',
        }}  >
            <Grid height='100vh' container alignItems='center' justifyContent={'center'}>
                <Grid item xs={12} md={5} mt={5} textAlign='center'>
                    <Box component='img' src={ErrorImage} width='100%' maxWidth='333px' margin='auto' alt='404 Error' />
                </Grid>
                <Grid item xs={12} md={5} mt={5} textAlign='center'>
                    <Typography mb={3} sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important', color: '#FFFFFF' }}>
                        Oops! Page Not Found
                    </Typography>
                    <Divider sx={{
                        maxWidth: '250px',
                        margin: 'auto',
                        '&::before': {
                            borderColor: '#FFFFFF',
                        },
                        '&::after': {
                            borderColor: '#FFFFFF',
                        }
                    }}>
                        <CropSquare sx={{
                            transform: 'rotate(45deg)',
                            fontSize: '15px',
                            color: '#FFFFFF'
                        }} />
                    </Divider>
                    <Box mt={5}>
                        <BrownButton mt={8} link='/' text='Go to Home' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
