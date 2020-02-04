import { Box, Container, Grid, Typography } from "@mui/material"
import Crums from "../../../commonComponents/crumsDispalyer/Crums"
import { useSelector } from "react-redux";

import React from "react";
export default () => {
    const { teamSection, } = useSelector(state => state.mainReducer);
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
                <Grid container spacing={3} mt={10} alignItems='flex-start' justifyContent='center'>
                    <Grid item xs={12} >
                        <Box textAlign={'center'}>
                            <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '32px' }, fontFamily: 'Poppins !important', color: '#4B0606' }}>
                                Our Professional Team
                            </Typography>
                        </Box>
                    </Grid>

                    {

                        teamSection && teamSection.map((member, indx) => <Grid key={member.name} mt={15} item xs={11} md={6}>
                            <Box sx={{
                                textAlign: 'center',
                                borderRadius: '70px 0px 70px 0px',
                                border: '1px solid #EBEBDF',
                                position: 'relative',
                                minHeight: '300px',
                                transition: 'all 0.3s ease-in-out',
                                cursor: 'pointer',
                                color: '#4B0606',
                                '&:hover': {
                                    backgroundColor: '#4B0606',
                                    color: 'white',
                                }
                            }}>
                                <Box width='150px' sx={{
                                    position: 'relative',
                                    margin: 'auto',
                                }}>
                                    <img src={member.image} alt={member.image} style={{
                                        width: '100%',
                                        position: 'absolute',
                                        top: '-100px',
                                        right: 0,
                                        bottom: 0,
                                        left: 0,
                                        zIndex: 2,
                                        content: " ",
                                        border: '10px #EAEAEC solid',
                                        borderRadius: '50%',
                                    }} />
                                </Box>
                                <Typography mt={14} sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '25px' }, fontFamily: 'Poppins !important' }}>
                                    {member.name}
                                </Typography>
                                <Typography sx={{ fontStyle: 'normal', fontSize: { xs: '15px' }, fontFamily: 'Rubik !important' }}>
                                    {member.post}
                                </Typography>
                                <Container>
                                    <Typography pb={2} pt={2} sx={{ fontStyle: 'normal', fontSize: { xs: '15px' }, fontFamily: 'Rubik !important' }}>
                                        {member.description}
                                    </Typography>
                                </Container>
                            </Box>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </Box>
    );
}