import consultation from "./consultation.jpg";
import { Box, Container, Grid, Typography } from "@mui/material";
import Crums from "../../../commonComponents/crumsDispalyer/Crums";
import ContactForm from "../../../commonComponents/contactForm/ContactForm";
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
                <Grid container spacing={3} mt={10} alignItems='flex-start' justifyContent='center'>
                    <Grid item xs={12} md={6}>
                        <Typography mb={3}  sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                            Consultation
                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                            The real estate sector of Pakistan is very vibrant. Every day, countless new real estate projects are launched and advertised all across the country. However, a person not in touch with the market is not in a suitable position to ascertain the true value of a project. <br />

                            This is where the role of an expert like Redwood Marketing and Developers (Pvt.) Ltd. comes into play. Before you take any decision with your hard-earned money, why not seek the professional consultative services of Redwood? <br />

                            We have dedicated and highly professional property consultants, who constantly monitor notable real estate projects across Pakistan. Our experts will guide you about real estate decisions, based upon your unique investing needs and preferences. <br />

                            It is always better to consult an expert in the field, before making any actual financial commitment. We constantly monitor the top real estate projects of Pakistan and craft unique opportunities for our valuable clients and investors. <br />

                        </Typography>
                    </Grid>
                    <Grid item  xs={12} md={6} >
                        <Box component={'img'} src={consultation} width={'100%'} maxWidth='635px' margin='auto' />
                    </Grid>
                    <Grid item xs={12} mt={7}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}