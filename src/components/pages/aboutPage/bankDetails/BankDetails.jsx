import Crums from "../../../commonComponents/crumsDispalyer/Crums"
import { CropSquare } from "@mui/icons-material";
import { Box, Container, Divider, Grid, Typography } from "@mui/material"

import React from "react";
import { useSelector } from "react-redux";
export default () => {
    const { adminIsActive } = useSelector(state => state.mainReducer);

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <Box    >
            <Crums />
            <Container>
                <Grid container spacing={3} alignItems='center' justifyContent='center'>
                    <Grid item xs={12} mb={5} textAlign='center'>
                        <Box sx={{ display: 'inline-block' }} mt={5} mb={5}>
                            <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                                Redwood Official Bank Accounts
                            </Typography>
                            <Divider sx={{
                                '&::before': {
                                    borderColor: '#000000',
                                },
                                '&::after': {
                                    borderColor: '#000000',
                                }
                            }}>
                                <CropSquare sx={{
                                    transform: 'rotate(45deg)',
                                    fontSize: '15px',
                                    color: '#000000'
                                }} />
                            </Divider>
                        </Box>
                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px' }}>
                            <span>B3-Third Floor Box Park Opposite to Green Valley,Theme Park Avenue Bahria Springs Phase 7 Bahria Town Rawalpindi.</span>
                            <center>
                                <p>TEL : +92-313-8397222</p>
                            </center>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} container justifyContent='center' alignItems={'center'}>
                        <Grid item xs={12} mb={5} md={6} p={2} border='1px solid black'>
                            <Typography mt={3} mb={3} sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '20px', md: '20px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                                BANK AL-FALAH LIMITED
                            </Typography>
                            <Typography mt={3} mb={3} sx={{ lineHeight: '30px', fontStyle: 'normal', fontSize: { xs: '15px' }, fontFamily: 'Poppins !important', color: '#010101' }}>
                                <b>NIFT Code:</b> 0530312 <br />
                                <b>Branch Code:</b> 0234 <br />
                                <b>Account Title:</b> REDWOOD ASSET MANAGEMENT <br />
                                <b>IBAN Format:</b> PK20ALFH 0234 0010 0741 2896 <br />
                                <b>Branch:</b> G-11 Markaz Branch, Islamabad <br />
                                <b>Cheque Number:</b> 68507651 &nbsp; &nbsp; &nbsp; &nbsp; 68507675 <br />
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} >
                        <Typography mt={3} mb={3} sx={{ lineHeight: '30px', fontStyle: 'normal', fontSize: { xs: '15px' }, fontFamily: 'Poppins !important', color: '#010101' }}>
                            <b>Note:-</b> <br />
                            All our valued customers are advised to make all payments such as Token, Booking, Confirmation,  <br />
                            MS Fee, Down Payment, Balance Payment etc. only in the above official bank accounts of Redwood.  <br />
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}