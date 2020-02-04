import construction from "./construction.jpg";
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
                            Construction
                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                            Whether it’s constructing your dream house, which normally happens once in a lifetime, or a commercial project which you may want to rent out or sell, let Redwood Marketing and Developers (Pvt.) Ltd. do all the hard work for you. <br />

                            Redwood Marketing and Developers (Pvt.) Ltd. has years of experience in the field of construction. Whether it’s design, construction, or monitoring of your construction activities, Redwood has you fully covered. <br />

                            We have established strong links with material suppliers, which enable us to procure construction materials both timely and cost-efficiently. You, on the other hand, will enjoy un-rivaled peace of mind by delegating the construction activities to Redwood. <br />

                            We also offer automation solutions for homes and commercial structures, which add a whole new value to your project. These days, automation can serve as a huge differentiator in today’s competitive real estate market. <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component={'img'} src={construction} width={'100%'} maxWidth='635px' margin='auto' />
                    </Grid>
                    <Grid item xs={12} mt={7}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}