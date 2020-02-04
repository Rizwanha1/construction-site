import { Box, Container, Grid, Typography } from "@mui/material"
import Crums from "../../commonComponents/crumsDispalyer/Crums"
import ContactForm from '../../commonComponents/contactForm/ContactForm'
import { Link } from "react-router-dom";

import React from "react";
export default () => {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <Box >
            <Crums />
            <Container>
                <Grid container justifyContent='center' mt={10}>
                    <Grid item xs={12} md={7} textAlign='center'>
                        <ContactForm />
                    </Grid>
                    <Grid item pl={2} pr={2} mb={10} xs={12} md={5} container direction="column" justifyContent='space-evenly' textAlign='center' sx={{ background: '#F4F4F4' }}>
                        <Grid item textAlign='left'>
                            <Typography mb={3} sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '24px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                                Our Office Address
                            </Typography>
                        </Grid>



                        <Grid item textAlign='center' sx={{ overFlow: 'hidden' }}>
                            <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                                Islamabad Office:
                            </Typography>
                            <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                                B3-Third Floor Box Park Opposite to Green Valley,Theme Park Avenue Bahria Springs Phase 7 Bahria Town Rawalpindi
                            </Typography>
                        </Grid>


                        <Grid item textAlign='center'>
                            <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                                Talk to Us:
                            </Typography>
                            <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                                +92-313-8397222
                            </Typography>
                            <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                                +92-317-7007708
                            </Typography>
                        </Grid>



                        <Grid item textAlign='center'>
                            <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                                Email Address:
                            </Typography>
                            <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                                redwoodassetmanagment@gmail.com
                            </Typography>
                        </Grid>



                        <Grid item textAlign='center'>
                            <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                                <Link to='/Bank-Details' style={{
                                    textDecoration: 'none', color: 'inherit'
                                }}>
                                    Bank Details
                                </Link>
                            </Typography>
                            <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                                Bank Details
                            </Typography>
                        </Grid>



                        <Grid item textAlign='left'>
                            <Typography mb={3} sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '24px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                                Working Times:
                            </Typography>
                            <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                                Mon - Sat : 10:30AM - 6:30PM
                            </Typography>
                        </Grid>


                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}