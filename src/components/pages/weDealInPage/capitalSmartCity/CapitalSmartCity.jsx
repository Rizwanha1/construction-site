import capitalsmartcity from "./capitalsmartcity.jpg";
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
                            Location and Developer
                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                            The concept of smart cities is new to Pakistan. Capital Smart City (CSC), Islamabad is proudly the first-ever smart city of Pakistan. It is located on the ideal location of M-2 Motorway, with easy access to the New Islamabad International Airport and the proposed ring road.

                            Very soon, it is expected that CSC will also be directly connected to the M-2 Motorway through a dedicated Interchange. This will further enhance the accessibility of this otherwise ideally located project.

                            As the name suggests, CSC is much more than a residential project. It aims to be a fully independent and sustainable smart city of Pakistan. The project is being developed by Future Development Holdings (Pvt.) Ltd. (FDH).

                            FDH is one of the largest real estate developers of Pakistan. Surbana Jurong, a Singapore-based consultancy firm, is the Master Planner of the Capital Smart City project. One of Pakistan’s leading construction firms, Habib Rafiq (Pvt.) Ltd. are its developers.

                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component={'img'} src={capitalsmartcity} width={'100%'} maxWidth='635px' margin='auto' />
                    </Grid>

                    <Grid item xs={12} mt={5} >
                        <Typography mb={3} textAlign='center' sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '32px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                            Capital Smart City Features
                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>

                            Due to its prime location and inclusion of some of the best names in the real estate sector, Capital Smart City is a great opportunity for both living as well as investment. This project is likely to become a crown jewel of the twin cities of Rawalpindi and Islamabad.

                            As a leading real estate company, Redwood Marketing and Developers (Pvt.) Ltd. is one of the registered dealers of Capital Smart City. Our experts will provide you highly professional investing advice, based on your investment objectives.
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