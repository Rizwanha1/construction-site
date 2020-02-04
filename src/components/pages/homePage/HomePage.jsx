import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography, Container, Divider, Stack } from "@mui/material";
import { BrownButton, WhiteButton } from "../../commonComponents/button/Buttons";
import { Link } from "react-router-dom";
import { AddIcCall, AutoGraph, ConnectWithoutContact, Construction, CropSquare, Home, People, SupportAgent } from "@mui/icons-material";
import LEADING from "./leading.jpg";
import CGIF from "./cgif.gif";
import { useSelector } from "react-redux";
import Slider from "../../commonComponents/slider/Slider";


export default () => {
    const weDealImages = [
        "/images/PVCI.jpg",
        "/images/CSC.jpg",
        "/images/LSC.jpg",
        "/images/PVCL.jpg",
        "/images/BTI.jpg",
    ]
    const servicesLogos = [
        <Home sx={{ color: '#4B0606', fontSize: '50px', }} />,
        <Construction sx={{ color: '#4B0606', fontSize: '50px', }} />,
        <People sx={{ color: '#4B0606', fontSize: '50px', }} />,
        <AutoGraph sx={{ color: '#4B0606', fontSize: '50px', }} />,
    ]
    const {
        ourServicesSection,
        weDealInSection,
        upCommingSection,
        BuildRealBrickSection, } = useSelector(state => state.mainReducer);
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    return (
        <Box>
            {/* Carousel */}
            <Box sx={{ backgroundColor: 'rgb(29, 29, 29)' }}>
                <Slider />
            </Box>
            {/* contact us */}
            <Box sx={{ backgroundColor: '#4B0606', color: 'white' }} >
                <Grid container width='85%' maxWidth='lg' margin='auto' height={'148px'} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems='center'>
                    <Grid item xs={9}>
                        <Typography sx={{ fontStyle: 'normal', fontWeight: '400', letterSpacing: '1px', fontFamily: 'Poppins !important', fontSize: { xs: '16px', md: '24px' }, fontWeight: 'bold', color: '#fff', letterSpacing: '1px', }}>
                            Invest in Your future with Redwood! Contact Us and start today.
                        </Typography>
                    </Grid>
                    <Grid item xs={3} textAlign='center'>
                        <WhiteButton link='/contact-us' text={'contact us'} />
                    </Grid>
                </Grid>
            </Box>


            <Container>
                <Grid container spacing={5} color='black' justifyContent='center' alignItems='center' >

                    {/* services */}
                    <Grid item xs={12} textAlign='center' mt={8} mb={7}>
                        <Box sx={{ display: 'inline-block' }} mb={5}>
                            <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                                Our Services
                            </Typography>
                            <Divider sx={{
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
                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#500101', fontSize: '15px' }}>
                            Redwood has an open, non-confined set of services. We don’t believe in limiting options, we strive to be the best.
                        </Typography>
                    </Grid>

                    {
                        ourServicesSection && ourServicesSection.map((service, indx) => {
                            return <Grid item container key={indx} xs={12} md={6} mt={2}>
                                <Grid item xs={2} textAlign='center'>
                                    {servicesLogos[indx]}
                                </Grid>
                                <Grid item xs={10} >
                                    <Typography sx={{ fontStyle: 'normal', fontFamily: 'Poppins !important', fontSize: { xs: '20px', md: '20px' }, fontWeight: 'bold', color: '#480610', textTransform: 'uppercase' }}>
                                        <Link to={service.link} style={{ textDecoration: 'none', color: 'inherit' }}>{service.title}</Link>
                                    </Typography>
                                    <Typography sx={{ textAlign: 'justify', fontStyle: 'normal', fontFamily: 'Rubik !important' }}>
                                        {service.text}
                                    </Typography>
                                </Grid>
                            </Grid >
                        })
                    }

                    {/* We deal in */}
                    <Grid item xs={12} textAlign='center' mt={8} mb={7}>
                        <Box sx={{ display: 'inline-block' }} mb={5}>
                            <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                                We Deal In
                            </Typography>
                            <Divider sx={{
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
                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#500101', fontSize: '15px' }}>
                            We are proudly working with some of the biggest and most reputable real estate projects in Pakistan. Our competent and committed team of professionals delivers competitive services in every field we work. Redwood’s clients include investors, marketers, businessmen and the general public.
                        </Typography>
                    </Grid>

                    {
                        weDealInSection && weDealInSection.map((place, indx) => {
                            return <Grid item container key={indx} xs={12} md={4} mt={5}>
                                {/* <img src={place.image} width='100%' /> */}
                                <Box sx={{
                                    backgroundImage: `url(${weDealImages[indx]})`,
                                    backgroundSize: 'cover',
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
                                    }}
                                    >
                                        <Typography mb={2} sx={{ fontStyle: 'normal', fontFamily: 'Poppins !important', fontSize: '19px', fontWeight: 'bold', color: '#fff', textTransform: 'uppercase' }}>
                                            {place.title}
                                        </Typography>
                                        <Typography mb={2} sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '14px', color: 'white' }}>
                                            {place.text}
                                        </Typography>
                                        <BrownButton link={place.link} text={'more details'} height={{ xs: '50px', md: '50px' }} />
                                    </Box>
                                </Box>
                            </Grid >
                        })
                    }

                    <Grid item xs={12} textAlign='center' mt={5} mb={5}>
                        <BrownButton link={'/view-more'} text={'view more'} height={{ xs: '50px', md: '60px' }} />
                    </Grid>

                </Grid >
            </Container >

            {/* Upcoming */}
            <Box sx={{
                backgroundColor: '#F7F3F3'
            }} pt={7} pb={10} >
                <Container>
                    <Grid spacing={5} container justifyContent='center' alignItems={'center'}>
                        <Grid item xs={12} textAlign='center'>
                            <Box sx={{ display: 'inline-block' }} mb={5}>
                                <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
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
                            upCommingSection && upCommingSection.map((place, indx) => {
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
            </Box>



            {/* Build Real Redwood By Redwood */}
            <Box sx={{
                backgroundImage: `url(${LEADING})`,
                backgroundSize: '100% 60%',
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#4B0606',
                padding: '120px 0px 30px 0px',
                textAlign: 'center',
            }}>

                {
                    BuildRealBrickSection && <Box>

                        <Box sx={{ display: 'inline-block' }} mb={5}>
                            <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important', color: 'white' }}>
                                {BuildRealBrickSection.title}
                            </Typography>
                        </Box>

                        <Container sx={{ backgroundColor: 'white' }}>
                            <Grid container spacing={0} alignItems='center'>
                                <Grid item xs={12} md={4} sx={{ borderRight: '1px solid #D9D9DB' }}>
                                    <Stack pt={15} pb={15} spacing={3} textAlign='center'>
                                        <Box textAlign={'center'}>
                                            <ConnectWithoutContact sx={{ color: '#4B0606', fontSize: '70px', }} />
                                        </Box>
                                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Poppins !important', fontSize: '19px', fontWeight: 'bold' }}>
                                            Our Address
                                        </Typography>
                                        <Typography sx={{ dispaly: 'inline-block', fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '15px', }}>
                                            {
                                                BuildRealBrickSection.OurAddress.map((obj, indx) => <Box key={obj} width={{ xs: '100%', md: '76%' }} margin='auto'>
                                                    {obj}
                                                </Box>)
                                            }


                                        </Typography>
                                    </Stack>
                                </Grid>


                                <Grid item xs={12} md={4} sx={{ borderRight: '1px solid #D9D9DB' }}>
                                    <Stack spacing={3} pt={15} pb={15} textAlign='center'>
                                        <Box textAlign={'center'}>
                                            <AddIcCall sx={{ color: '#4B0606', fontSize: '70px', }} />
                                        </Box>
                                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Poppins !important', fontSize: '19px', fontWeight: 'bold' }}>
                                            Contact Info
                                        </Typography>
                                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '15px', }}>
                                            <Box width={{ xs: '100%', md: '76%' }} margin='auto'>
                                                +92-313-8397222
                                            </Box>
                                            <Box width={{ xs: '100%', md: '76%' }} margin='auto'>
                                                +92-317-7007708
                                            </Box>
                                        </Typography>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} md={4} >
                                    <Stack spacing={3} pt={15} pb={15} textAlign='center'>
                                        <Box textAlign={'center'}>
                                            <SupportAgent sx={{ color: '#4B0606', fontSize: '70px', }} />
                                        </Box>
                                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Poppins !important', fontSize: '19px', fontWeight: 'bold' }}>
                                            Our Support
                                        </Typography>
                                        <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '15px', }}>
                                            {
                                                BuildRealBrickSection.OurSupport.map((obj, indx) => <Box key={obj} width={{ xs: '100%', md: '76%' }} margin='auto'>
                                                    {obj}
                                                </Box>)
                                            }

                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>

                        </Container>

                    </Box>
                }






                <Container>
                    <Grid container height={'148px'} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems='center'>
                        <Grid item xs={9} textAlign='left'>
                            <Typography sx={{ fontStyle: 'normal', fontWeight: '400', letterSpacing: '1px', fontFamily: 'Poppins !important', fontSize: { xs: '16px', md: '24px' }, fontWeight: 'bold', color: '#fff', letterSpacing: '1px', }}>
                                Invest in Your future with Redwood! Contact Us and start today.
                            </Typography>
                        </Grid>
                        <Grid item xs={3} textAlign='right'>
                            <WhiteButton link='/contact-us' text={'contact us'} />
                        </Grid>
                    </Grid>
                </Container>


            </Box>



        </Box >
    )
}
