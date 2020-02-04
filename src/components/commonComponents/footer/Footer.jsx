import { DoubleArrow, Email, FacebookOutlined, Instagram, LocationOn, Phone } from "@mui/icons-material";
import { Box, Container, Divider, Fab, Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BG from "./background.jpg";
export default () => {
    return (
        <Box sx={{
            backgroundImage: `url(${BG})`,
            backgroundSize: 'cover',
        }} mt={10}>
            <Container sx={{ color: 'white' }}>
                <Grid container spacing={4} alignItems='flex-start'>
                    <Grid item xs={12} md={4}>
                        <List
                            subheader={
                                <ListSubheader sx={{ background: 'transparent', color: 'white' }}>
                                    <Typography mb={2} sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '20px' }, fontFamily: 'Poppins !important' }}>
                                        About Us
                                    </Typography>
                                    <Divider sx={{
                                        borderColor: '#4B0606',
                                        borderBlockEndWidth: '5px',
                                        width: '38px',
                                        marginBottom: '20px',
                                    }} />
                                </ListSubheader>
                            }
                        >
                            <ListItem >
                                <ListItemText>
                                    <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '15px', minHeight: { xs: 'auto', md: '330px' }, textAlign: 'justify' }}>
                                        Build your dream home with our professional team of experts. Redwood is a team of highly qualified and experienced professionals who are committed to providing the best service to our clients.
                                        doing our research and homework and arranging things accordingly.
                                        With sustainable and systematic development we will produce more with less investment.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>


                    <Grid item xs={12} md={4}>
                        <List
                            subheader={
                                <ListSubheader sx={{ background: 'transparent', color: 'white' }}>
                                    <Typography mb={2} sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '20px' }, fontFamily: 'Poppins !important' }}>
                                        Important Links
                                    </Typography>
                                    <Divider sx={{
                                        borderColor: '#4B0606',
                                        borderBlockEndWidth: '5px',
                                        width: '38px',
                                        marginBottom: '20px',
                                    }} />
                                </ListSubheader>
                            }
                        >
                            <Grid container spacing={0} justifyContent={'space-between'}>

                                {
                                    [
                                        {
                                            label: 'Bahria Town',
                                            link: '/Bahria-Town',
                                        },
                                        {
                                            label: 'Capital Smart City',
                                            link: '/Capital-Smart-City',
                                        },
                                        {
                                            label: 'Lahore Smart City',
                                            link: '/Lahore-Smart-City',
                                        },
                                        {
                                            label: 'Park City Islamabad',
                                            link: '/Park-View-City-Islamabad',
                                        },
                                        {
                                            label: 'Park City Lahore',
                                            link: '/Park-View-City-Lahore',
                                        },
                                    ].map((item, index) => <Grid key={index} mb={2} item xs={6}>
                                        <ListItem sx={{ padding: '0px' }}>
                                            <ListItemIcon sx={{ minWidth: '20px', textAlign: 'center' }}>
                                                <DoubleArrow sx={{ color: 'white', fontSize: '10px' }} />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '15px', }}>
                                                    <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>{item.label}</Link>
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>)
                                }

                            </Grid>

                        </List>
                    </Grid>





                    <Grid item xs={12} md={4} >
                        <List
                            subheader={
                                <ListSubheader sx={{ background: 'transparent', color: 'white' }}>
                                    <Typography mb={2} sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '20px' }, fontFamily: 'Poppins !important' }}>
                                        Get In Touch
                                    </Typography>
                                    <Divider sx={{
                                        borderColor: '#4B0606',
                                        borderBlockEndWidth: '5px',
                                        width: '38px',
                                        marginBottom: '20px',
                                    }} />
                                </ListSubheader>
                            }
                        >
                            <ListItem sx={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                <ListItemIcon sx={{ minWidth: '40px', textAlign: 'center' }}>
                                    <LocationOn sx={{ color: 'white', fontSize: '20px' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '15px', }}>
                                        B3-Third Floor Box Park Opposite to Green Valley,Theme Park Avenue Bahria Springs Phase 7 Bahria Town Rawalpindi
                                    </Typography>
                                </ListItemText>
                            </ListItem>



                            <ListItem sx={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                <ListItemIcon sx={{ minWidth: '40px', textAlign: 'center' }}>
                                    <Phone sx={{ color: 'white', fontSize: '20px' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '15px', }}>
                                        Phone: +92-313-8397222
                                    </Typography>
                                    <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '15px', }}>
                                        Phone: +92-317-7007708
                                    </Typography>
                                </ListItemText>
                            </ListItem>



                            <ListItem sx={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                <ListItemIcon sx={{ minWidth: '40px', textAlign: 'center' }}>
                                    <Email sx={{ color: 'white', fontSize: '20px' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '15px', }}>
                                        Email: redwoodassetmanagment@gmail.com
                                    </Typography>
                                </ListItemText>
                            </ListItem>


                            <ListItem sx={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                <ListItemText>
                                    <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '15px', }}>
                                        Working Hours:  Mon-Sat, 10:30AM-6:30PM
                                    </Typography>
                                </ListItemText>
                            </ListItem>


                            <ListItem sx={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                <ListItemText>
                                    <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '18px', fontWeight: 'bold' }}>
                                        Social Media Links
                                    </Typography>
                                </ListItemText>
                            </ListItem>




                            <Grid container spacing={4} justifyContent={'flex-start'}>
                                <Grid item>
                                    <Fab variant="extended" aria-label="Delete" sx={{ '&:hover': { background: '#1778F2', height: '80px' }, background: '#1778F2', fontSize: '15px', fontWeight: 'bold', width: '20px', height: '70px', transition: '.5s', borderTopRadius: '40%', alignItems: 'flex-start' }}>
                                        <a href='https://www.facebook.com' target={'_blank'}>
                                            <FacebookOutlined sx={{ marginTop: '10px', color: 'white', }} />
                                        </a>
                                    </Fab>

                                </Grid>
                                <Grid item>
                                    <Fab variant="extended" aria-label="Delete" sx={{ '&:hover': { background: '#F00075', height: '80px' }, background: '#F00075', fontSize: '15px', fontWeight: 'bold', width: '20px', height: '70px', transition: '.5s', borderTopRadius: '40%', alignItems: 'flex-start' }}>
                                        <a href='https://www.instagram.com' target={'_blank'}>
                                            <Instagram sx={{ marginTop: '10px', color: 'white', }} />
                                        </a>
                                    </Fab>
                                </Grid>
                            </Grid>
                        </List>
                    </Grid>
                </Grid>

            </Container>
            <Divider sx={{
                borderColor: '#282C35',
                borderBlockEndWidth: '2px',
                marginTop: '30px',
            }} />
            <Container sx={{ padding: '20px 0px' }}>
                <Typography sx={{ fontStyle: 'normal', fontFamily: 'Rubik !important', fontSize: '14px', color: 'white' }}>
                    All Right Reserved by REDWOOD. © 2022
                </Typography>
            </Container>

        </Box>
    );
}