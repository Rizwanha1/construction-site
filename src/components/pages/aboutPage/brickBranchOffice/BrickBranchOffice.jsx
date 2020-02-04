import Crums from "../../../commonComponents/crumsDispalyer/Crums"
import { CropSquare } from "@mui/icons-material";
import { Box, Container, Divider, Grid, Typography } from "@mui/material"

import { useSelector } from "react-redux";
import React from "react";
export default () => {
    const { status,
        adminIsActive,
        loader,
        ourServicesSection,
        weDealInSection,
        upCommingSection,
        reviewsSection,
        BuildRealBrickSection,
        teamSection,
        groupSection,
        branchSection,
        sliderSection, } = useSelector(state => state.mainReducer);

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);


    return (
        <Box    >
            <Crums />
            <Container sx={{paddingBottom:'50px'}}>
                <Grid container spacing={3} alignItems='center' justifyContent='center'>
                    <Grid item xs={12} >
                        <Box sx={{ display: 'inline-block' }} mt={5} mb={5}>
                            <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                                Our Branch
                            </Typography>
                            <Divider sx={{
                                '&::before': {
                                    borderColor: '#000000',
                                    display: 'none',
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
                    <Grid item xs={12}>
                        {
                            branchSection && branchSection.map((branch, index) => <div key={index}>
                                <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px', fontWeight: 'bold' }}>
                                    {branch.branch}
                                </Typography>

                                <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', color: '#010101', fontSize: '15px', lineHeight: '30px' }}>
                                    {branch.address}
                                </Typography>
                            </div>)
                        }

                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}