import lahoresmartcity from "./lahoresmartcity.jpg";
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

                            Based on the immense success of Pakistan’s first-ever smart city, the Lahore Smart City (LSC) project is all set to become the country’s second smart city. LSC will transform the real estate landscape of Lahore, one of the largest metropolitan cities of Pakistan.

                            The project is located on the prime location of Lahore Ring Road. It also connects with M-11 Lahore Sialkot Motorway, not far off from the M2 Lahore – Islamabad Motorway as well. LSC is designed in a way that it is a fully sustainable city in itself.

                            This feat is achieved through well-thought-out and proper planning. Surbana Jurong, which is a Singapore-based development consultancy firm, is the Master Planner of the LSC project. Habib Rafiq (Pvt.) Ltd. (HRL) is the principal developer of this project.
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component={'img'} src={lahoresmartcity} width={'100%'} maxWidth='635px' margin='auto' />
                    </Grid>

                    <Grid item xs={12} mt={5} >
                        <Typography mb={3} textAlign='center' sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '32px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>

                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>

                            HRL has a proven track record of delivering a lot of mega projects in a wide range of sectors across Pakistan. LSC is a fully planned community, with all the amenities that one can think of. The development work is in full swing and ahead of schedule in some cases.

                            As a leading real estate company, Redwood Marketing, and Developers (Pvt.) Ltd. is a registered dealer of the Lahore Smart City (LSC) project. We have attractive opportunities for you in LSC, across a wide range of products. Our experts will give you professional advice, based on your investing needs.

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