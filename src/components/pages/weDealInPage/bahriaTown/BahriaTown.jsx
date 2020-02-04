import BahriaTown from "./BahriaTown.jpg";
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

                            The society is situated outside the main city in the heart of Rawalpindi district, near GT road. It is easily accessible from Islamabad Expressway, Faisal Avenue, and GT Road.

                            Moreover, the community has nine phases from Phase 1 to 9. The first six phases are located between two main highways of Rawalpindi and Islamabad. These are the Main GT Road and Express Highway Islamabad.

                            Phase 7 and 8 are situated off the Grand Trunk Road, next to DHA Phase 1 Islamabad. Lastly, Phase 9 is linked to GT Road by Expressway with a 10-minute drive.

                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component={'img'} src={BahriaTown} width={'100%'} maxWidth='635px' margin='auto' />
                    </Grid>

                    <Grid item xs={12} mt={5} >
                        <Typography mb={3} textAlign='center' sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '32px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>

                        </Typography>

                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', textAlign: 'justify' }}>
                            Bahria Town Islamabad - A Detailed Insight
                            Category Icon
                            Property
                            (Bahria Town Islamabad)
                            Share
                            Tweet
                            Whatsapp
                            Pinterest
                            Email
                            Email
                            Table Contents
                            Bahria Town Islamabad is the first-ever planned community development program in Pakistan. It is founded by a real estate business tycoon Malik Riaz Hussain. This society was initiated in the late 1990s and was undoubtedly a high return investment project.

                            Therefore, it rapidly became a favorite among people who were looking to invest in the real estate sector.

                            This planned gated community is considered as the most popular schemes in Islamabad, offering state-of-the-art facilities for the residents. Furthermore, it is one of the most searched areas in the city according to the buying trends.

                            This article will give you a brief account of all the perks that make it an attractive place for living.

                            However, let’s find out about its location first.

                            1. Location of Bahria Town Islamabad
                            The society is situated outside the main city in the heart of Rawalpindi district, near GT road. It is easily accessible from Islamabad Expressway, Faisal Avenue, and GT Road.

                            Moreover, the community has nine phases from Phase 1 to 9. The first six phases are located between two main highways of Rawalpindi and Islamabad. These are the Main GT Road and Express Highway Islamabad.

                            Phase 7 and 8 are situated off the Grand Trunk Road, next to DHA Phase 1 Islamabad. Lastly, Phase 9 is linked to GT Road by Expressway with a 10-minute drive.

                            Furthermore, this area is also surrounded by some other housing schemes like:

                            Defence Housing Authority (DHA) to the east
                            Askari 14 and Lalazar towards the north
                            PWD Housing Society
                            2. Bahria Town Islamabad Prices and Development Updates
                            Bahria Town Islamabad is a well-known real estate that is delivering and developing Asia’s biggest private housing scheme. This society has bought an ultra-modern lifestyle by benefiting locals through various economic and employment opportunities.

                            The first seven phases are completely developed. A large number of individuals are already residing there. It also has a wide variety of developed commercial areas.
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