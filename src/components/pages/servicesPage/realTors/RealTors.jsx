import REALATOR from "./realtor.jpg";
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
                    <Grid item mb={3} xs={12} md={6} >
                        <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                            Realtors
                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>

                        Redwood Marketing and Developers (Pvt.) Ltd. has established a strong foothold in all the major property hubs of Pakistan. Our head office is located in Islamabad. We have two branch offices in Lahore and one each in Rawalpindi and Multan.<br />

                            We have dedicated professionals at each of our branch offices. They constantly monitor the trends in the real estate sector. This puts Redwood in a much better position to recommend the buying and selling of real estate. <br />

                            Our experts will ensure that you invest your hard-earned money in only reputable projects, where not only your principal amount is secure, but you also stand to make handsome gains from this investment.<br />

                            Whether it’s buying or selling, residential or commercial properties, Redwood Marketing and Developers (Pvt.) Ltd. is just a call or meeting away from providing you invaluable advice before you actually make an investment decision.<br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box component={'img'} src={REALATOR} width={'100%'} maxWidth='635px' margin='auto' />
                    </Grid>

                    <Grid item xs={12} mt={7}>

                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}