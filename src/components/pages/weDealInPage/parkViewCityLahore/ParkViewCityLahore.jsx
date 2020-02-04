import parkviewcitylahore from "./parkviewcitylahore.jpg";
import { Box, Container, Grid, Typography } from "@mui/material";
import Crums from "../../../commonComponents/crumsDispalyer/Crums";
import ContactForm from "../../../commonComponents/contactForm/ContactForm";
import { useEffect } from "react";
export default () => {
    useEffect(() => {
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
                        <Typography mb={3} sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '32px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                            Park View City Lahore
                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                            Park View City Lahore is one of the best-planned housing societies of Lahore city. Park View City Lahore is the perfect blend of a luxurious, comfortable and secure lifestyle. Like all modern housing societies, you will get all amenities within the society.

                            Park View City (PVC) Lahore is located on the prime location of Multan Road. You can access this premier housing project via multiple approaches. The first approach to PVC Lahore is via Thokar Niaz Baig interchange, on M2 Lahore Islamabad Motorway.

                            You can also access Park View City Lahore through the signal-free Canal Road, the main artery of Lahore’s traffic. The moment you set foot in this housing project, you are treated to international standards of development and planning.

                            Special attention has been paid to the Security of the valuable residents of this project. Numerous parks have also been planned across the society, which add to the overall beauty and serenity of the project.

                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component={'img'} src={parkviewcitylahore} width={'100%'} maxWidth='635px' margin='auto' />
                    </Grid>

                    <Grid item xs={12} mt={5} >
                        <Typography mb={3} textAlign='center' sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '32px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                            Park View City Lahore Amenities
                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                            A dedicated Zoo has also been planned within Park View City Lahore, adding to its overall appeal for kids and the elderly alike. Additional amenities include a Sports Complex, School, Mosques, a Commercial Area, and an iMax Cinema.

                            Redwood Marketing and Developers (Pvt.) Ltd. is a registered dealer of Park View City Lahore.  We have a wide range of PVC Lahore products, depending on your investing needs.

                        </Typography>

                    </Grid>

                    <Grid item xs={12} mt={10}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}