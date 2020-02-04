import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import BG from './CBG.jpg';


export default () => {
    const location = useLocation();
    const breadcrumbs = useBreadcrumbs();
    return (<>
        <Grid
            sx={{
                backgroundImage: `url(${BG})`,
                backgroundSize: 'cover',
            }}
            container
            alignItems="center"
            justifyContent={'center'}
            height='297px'
        >
            <Grid item xs={12}>
                <Container>
                    <Box>
                        {
                            ["/Real-Tors", "/Consultation", "/Construction", "/Marketing"].find(item => item === location.pathname) ?
                                <>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            lineHeight: '50px',
                                            fontWeight: 700,
                                            fontStyle: 'normal',
                                            color: '#ffffff',
                                            fontSize: {xs: '30px', sm: '40px'},
                                        }}
                                        mb={1}
                                    >
                                        RedWood 
                                    </Typography> <Typography
                                        sx={{
                                            fontFamily: 'Rubik',
                                            lineHeight: '50px',
                                            fontWeight: 700,
                                            fontStyle: 'normal',
                                            color: '#ffffff',
                                            fontSize: '18px',
                                        }}
                                        mb={1}
                                    >
                                        RedWood Assets Management
                                    </Typography>
                                </>
                                :
                                <>
                                    {location.pathname.split('/').map((item, index) => <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            lineHeight: '50px',
                                            fontWeight: 700,
                                            fontStyle: 'normal',
                                            color: '#ffffff',
                                            fontSize: {xs: '30px', sm: '40px'},
                                        }}
                                        key={index}
                                        mb={3}
                                    >
                                        {item.replace(/-/g, ' ')}
                                    </Typography>
                                    )}
                                </>
                        }

                    </Box>


                    {breadcrumbs.map(({
                        match,
                        breadcrumb
                    }, indx) => (
                        <span key={match.pathname}>
                            {
                                indx ? <span className='sep'> </span> : null
                            }
                            <NavLink style={{
                                color: 'white',
                                fontSize: '12px',
                                fontFamily: 'Poppins',
                                textDecoration: 'none',
                            }} to={match.pathname}> {breadcrumb}  </NavLink>

                        </span>
                    ))}
                </Container>
            </Grid>
        </Grid>













    </>
    );
}