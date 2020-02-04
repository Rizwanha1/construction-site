import React from "react";
import { CropSquare } from "@mui/icons-material";
import { Box, Container, Divider, Grid, Typography } from "@mui/material"
import { BrownButton, WhiteButton } from "../../commonComponents/button/Buttons";
import Crums from "../../commonComponents/crumsDispalyer/Crums"
import CGIF from './cgif.gif';
let upCommingDataSet = [
    {
        title: "MUREE SPRINGS",
        link: '/',
        text: ""
    },
    {
        title: "BMIT CORNER",
        link: '/',
        text: ""
    },
]



export default () => {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <Box    >
            <Crums />
            <Container>
                <Grid container spacing={3} justifyContent='center'>
                    <Grid item xs={12} textAlign='center' mt={10}>
                        <Box sx={{ display: 'inline-block' }} mb={5}>
                            <Typography mb={3} sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                                Our Upcoming Projects
                            </Typography>
                            <Divider sx={{
                                maxWidth: '250px',
                                margin: 'auto',
                                '&::before': {
                                    borderColor: '#000000',
                                },
                                '&::after': {
                                    borderColor: '#000000',
                                }
                            }}>
                                <CropSquare sx={{
                                    transform: 'rotate(45deg)',
                                    fontSize: '15px',
                                    color: '#000000'
                                }} />
                            </Divider>
                        </Box>
                    </Grid>
                    {
                        upCommingDataSet && upCommingDataSet.map((place, indx) => {
                            return <Grid item container key={indx} xs={12} md={5} mt={5}>
                                {/* <img src={place.image} width='100%' /> */}
                                <Box sx={{
                                    backgroundImage: `url(${CGIF})`,
                                    backgroundSize: '100% 100%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '5px',
                                    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
                                    minHeight: '452px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                    spacing: '40px'
                                }} >
                                    <Box sx={{
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        padding: '30px 20px',
                                        textAlign: 'center',
                                        width: '100%',
                                    }}
                                    >
                                        {/* <Typography mb={2} sx={{ fontStyle: 'normal', fontFamily: 'Poppins !important', fontSize: '19px', fontWeight: 'bold', color: '#fff', textTransform: 'uppercase' }}>
                                                {place.title}
                                            </Typography> */}
                                        <BrownButton link={place.link} text={'more details'} height={{ xs: '50px', md: '50px' }} />
                                    </Box>
                                </Box>
                            </Grid >
                        })
                    }


                </Grid>
            </Container>
            <Box backgroundColor='#4B0606' mt={5}>
                <Container>
                    <Grid container height={'148px'} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems='center' >
                        <Grid item xs={9} textAlign='left'>
                            <Typography sx={{ fontStyle: 'normal', fontWeight: '400', letterSpacing: '1px', fontFamily: 'Poppins !important', fontSize: { xs: '16px', md: '20px' }, fontWeight: 'bold', color: '#fff', letterSpacing: '1px', }}>
                                We are ready to build your dream, contact us today!
                            </Typography>
                        </Grid>
                        <Grid item xs={3} textAlign='right'>
                            <WhiteButton link='/contact-us' text={'contact us'} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Box>
    );
}