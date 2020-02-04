import marketing from "./marketing.jpg";
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
                        <Typography mb={3} sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                            Marketing
                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                            In today’s real estate market, it is easier to complete a project but way more difficult to market it. Unless you reach out to the right target audience, you won’t be able to generate the returns that you had expected within the planned timelines. <br />

                            Redwood Marketing and Developers (Pvt.) Ltd. has a large footprint of branch offices across all the major real estate hubs of Pakistan. These include Islamabad, Rawalpindi, Multan, and Lahore. Why not engage the services of Redwood to market your project?<br />

                            Further, we have a large network of sub-dealers associated with our brand. This gives you access to a wide range of potential end clients and investors. We deal in the marketing activities of land, residential and commercial structures.<br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component={'img'} src={marketing} width={'100%'} maxWidth='635px' margin='auto' />
                    </Grid>
                    <Grid item xs={12} mt={7}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}