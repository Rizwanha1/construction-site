import * as React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Fade, Slide, Zoom } from "react-reveal";
import { Grid, Typography } from "@mui/material";
import { BrownButton } from "../../commonComponents/button/Buttons";


export default () => {
    const { status,
        adminIsActive,
        loader,
        ourServicesSection,
        DealInSection,
        upCommingSection,
        reviewsSection,
        BuildRealBrickSection,
        teamSection,
        groupSection,
        branchSection,
        sliderSection, } = useSelector(state => state.mainReducer);




    return (
        <>
            {
                sliderSection && <Carousel
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                    infiniteLoop={true}
                    autoPlay={true}
                    axis="vertical"
                    showArrows={false}
                    transitionTime={1000}
                >
                    {
                        sliderSection.map((section, indx) => <div key={indx}>
                            <Zoom opposite big>
                                <Box sx={{
                                    position: 'relative',
                                    backgroundImage: `url(${section.background})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center cener',
                                    backgroundRepeat: 'no-repeat',
                                    width: '100%',
                                    height: { xs: '500px', md: '695px' },
                                }}
                                    pt={10}
                                    pb={10}
                                >
                                    <Box style={{ width: '100%' }} >
                                        <Grid container justifyContent='center'
                                            alignItems='center'
                                            width={{ xs: '100%', md: '80%' }}
                                            margin='auto'
                                            maxWidth='lg'
                                        >
                                            {/* logos */}
                                            <Grid item container mt={{ xs: 0, md: 6 }} xs={12} justifyContent='space-between' >
                                                {
                                                    section.logos.map((logo, indxLogo) => <Grid key={indxLogo} xs={3} sm={'auto'} item align='center'  >
                                                        <Fade top big>
                                                            <Box component='img' src={logo || '/images/logoNew.png'} width='150px' maxHeight='100px' />
                                                        </Fade>
                                                    </Grid>
                                                    )
                                                }
                                            </Grid>
                                            {/* text and button */}
                                            <Grid item mt={4} container alignItems='center' justifyContent='center' xs={12}>
                                                <Grid item xs={10} md={8}>
                                                    <Box sx={{ backgroundColor: 'rgb(0,0,0,.5)', padding: { xs: '18px 10px', md: '38px 20px' } }}>
                                                        <Fade bottom big>
                                                            <Typography fontSize={{ xs: '18px', sm: '30px', md: '50px' }} fontWeight='bold' color='white' textTransform={'uppercase'}>
                                                                {
                                                                    section.text.map((content, indx) => <Slide bottom big key={indx}><span style={{ color: content.color }}> {content.title} </span><br /></Slide >)
                                                                }
                                                            </Typography>
                                                        </Fade>
                                                    </Box>
                                                    <Box pt={3} width={'220px'} margin='auto' textAlign='left' >
                                                        <BrownButton link={section.link} text={'learn more'} />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Zoom>
                        </div>
                        )
                    }

                </Carousel>

            }
            {window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })}
        </>
    )
}