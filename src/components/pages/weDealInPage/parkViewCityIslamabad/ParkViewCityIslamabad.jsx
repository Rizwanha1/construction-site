import parkviewcity from "./parkviewcity.jpg";
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
                            Park View City Islamabad
                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                            Islamabad is one of the most beautiful capitals of the world. It is every Pakistani’s dream to own a home or property in Islamabad. Park View City (PVC) Islamabad delivers on exactly this dream with flying colors.

                            Park View City (PVC) Islamabad is located adjacent to the Bahria Enclave project. When you compare the locations of these two projects, the location of PVC Islamabad is way better than the Bahria Enclave project.

                            This housing society is located within the beautiful hills of Islamabad, not too far away from Rawal Dam. PVC Islamabad’s prime location is further enhanced by a botanical garden, which surrounds the housing project.
                        </Typography>


                        <Typography mb={3} mt={3} sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '32px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                            NOC
                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                            Till date, PVC Islamabad is the only housing project with Capital Development Authority (CDA) approval in Zone IV of Islamabad. The project has been planned with underground wiring, to ensure maximum safety and aesthetic beauty.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component={'img'} src={parkviewcity} width={'100%'} maxWidth='635px' margin='auto' />
                    </Grid>

                    <Grid item xs={12} mt={5} >
                        <Typography mb={3} textAlign='center' sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '32px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                            Commercial Area Downtown
                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                            The project comes with a 200 feet wide main boulevard, with a dedicated commercial area called Downtown. This is all set to become the hub of commercial activities within the community-style living being offered by Park View City (PVC) Islamabad.

                            Redwood Marketing and Developers (Pvt.) Ltd. is a registered dealer of the Park View City Islamabad project. We have a wide range of PVC Islamabad products, depending on your investing needs.
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