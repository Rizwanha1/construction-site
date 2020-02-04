import { Divider, Fab, Grid, Hidden, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Typography } from '@mui/material';
import Container from '@mui/material/Container'
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import Logo from './logoNew.png';
import React from 'react';
import DropDown from './DropDown';
import MenuIcon from '@mui/icons-material/Menu';
import List from "@mui/material/List";
import { ArrowUpwardRounded, CardMembership, CommentBank, Construction, Dashboard, DesignServices, Directions, FacebookOutlined, Home, HomeMaxOutlined, HomeRepairServiceOutlined, Instagram, LocationCityOutlined, Login, Park, QueryBuilder, TourSharp, Upgrade, WaterDamageOutlined, WorkHistory } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import GroupsIcon from '@mui/icons-material/Groups';
import MobileLists from './MobileLists';
import { useSelector } from 'react-redux';
import HeaderBackground from './headerBackground.png'





const dataSet = [
    {
        title: 'Home',
        link: '/',
        children: [],
        icon: <HomeMaxOutlined sx={{ color: '#4B0606' }} />
    },
    {
        title: 'About Us',
        icon: <InfoIcon sx={{ color: '#4B0606' }} />,
        children: [
            {
                label: 'Our Team',
                link: '/Our-Team',
                icon: <CardMembership sx={{ color: '#4B0606' }} />
            },
            {
                label: 'Branch Office',
                link: '/Branch-Office',
                icon: <QueryBuilder sx={{ color: '#4B0606' }} />
            },
            {
                label: 'Bank Details',
                link: '/Bank-Details',
                icon: <CommentBank sx={{ color: '#4B0606' }} />
            },
        ],
    },
    {
        title: 'Services',
        link: '/services',
        icon: <DesignServices sx={{ color: '#4B0606' }} />,
        children: [
            {
                label: "Real Tors",
                link: "/Real-Tors",
                icon: <TourSharp sx={{ color: '#4B0606' }} />
            },
            {
                label: "Consultation",
                link: "/Consultation",
                icon: <Directions sx={{ color: '#4B0606' }} />
            },
            {
                label: "Construction",
                link: "/Construction",
                icon: <Construction sx={{ color: '#4B0606' }} />
            },
            {
                label: "Marketing",
                link: "/Marketing",
                icon: <ArrowUpwardRounded sx={{ color: '#4B0606' }} />
            },
        ],
    },
    {
        title: 'We deal in',
        icon: <WaterDamageOutlined sx={{ color: '#4B0606' }} />,
        children: [
            {
                label: 'Bahria Town',
                link: '/Bahria-Town',
                icon: <HomeRepairServiceOutlined sx={{ color: '#4B0606' }} />
            },
            {
                label: 'Park View City Islamabad',
                link: '/Park-View-City-Islamabad',
                icon: <Park sx={{ color: '#4B0606' }} />
            },
            {
                label: 'Park View City Lahore',
                link: '/Park-View-City-Lahore',
                icon: <Park sx={{ color: '#4B0606' }} />
            },
            {
                label: 'Capital Smart City',
                link: '/Capital-Smart-City',
                icon: <LocationCityOutlined sx={{ color: '#4B0606' }} />
            },
            {
                label: 'Lahore Smart City',
                link: '/Lahore-Smart-City',
                icon: <LocationCityOutlined sx={{ color: '#4B0606' }} />
            },
        ],
    },
    {
        title: 'Portfolio',
        icon: <WorkHistory sx={{ color: '#4B0606' }} />,
        children: [
            {
                label: 'Upcoming Projects',
                link: "/Upcoming-Projects",
                icon: <Construction sx={{ color: '#4B0606' }} />
            },
        ],
    },
    {
        title: 'Contact Us',
        link: '/Contact-Us',
        children: [],
        icon: <LiveHelpIcon sx={{ color: '#4B0606' }} />
    },

]
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
    let dir = "left";
    const [state, setState] = React.useState({});
    const toggleDrawer = (open) => () => {
        setState({ [dir]: open });
    };



    return (
        <Box sx={{ fontFamily: 'Rubik !important', position: 'sticky', top: '0px', zIndex: '55', backgroundImage: `url(${HeaderBackground})`, backgroundSize: 'cover' }}>

            <Container sx={{ padding: '12px 0px 5px 0px' }}>
                <Grid container alignItems='center' justifyContent={'space-between'} sx={{ textTransform: 'uppercase', color: '#010101' }}>
                    <Grid item xs={2} mb={0}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box component={'img'} src={Logo} maxWidth={'170px'} />
                        </Link>
                    </Grid>
                    <Hidden smDown>
                        <Grid item container spacing={3} xs={12} md={10} lg={9} mb={2} fontSize={'12px'} alignItems='center' justifyContent={'flex-end'}>
                            {
                                dataSet.map((section, index) => <Grid item key={index}>
                                    {
                                        section.children.length
                                            ?
                                            <DropDown section={section.title} children={section.children} />
                                            : <Link to={section.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <Typography fontSize='inherit'
                                                    sx={{ fontWeight: 'bold', fontStyle: 'normal', borderLeft: '2px solid transparent', '&:hover': { borderLeft: '2px solid #4B0606', transition: '.8s', }, paddingLeft: '5px', lineHeight: 1, transition: '.5s', }}
                                                >
                                                    {section.title}
                                                </Typography>
                                            </Link>
                                    }
                                </Grid>)
                            }
                            <Grid item >
                                {
                                    adminIsActive ? <Link to='/dashboard/slideredite' style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography fontSize='inherit'
                                            sx={{ fontStyle: 'normal', borderLeft: '2px solid transparent', '&:hover': { borderLeft: '2px solid #4B0606', transition: '.8s', }, paddingLeft: '5px', lineHeight: 1, transition: '.5s', }}
                                        >
                                            Dashboard
                                        </Typography>
                                    </Link> : <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography fontSize='inherit'
                                            sx={{ fontStyle: 'normal', borderLeft: '2px solid transparent', '&:hover': { borderLeft: '2px solid #4B0606', transition: '.8s', }, paddingLeft: '5px', lineHeight: 1, transition: '.5s', }}
                                        >
                                            Login
                                        </Typography>
                                    </Link>
                                }
                            </Grid>
                        </Grid>{/* SubGrid Container */}
                    </Hidden>
                    <Hidden smUp>
                        <Grid item pr={4}>
                            <MenuIcon sx={{
                                fontSize: '40px',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: '#4B0606',
                                    transition: '.8s',
                                }
                            }}
                                onClick={toggleDrawer(dir, true)}
                            />

                            <SwipeableDrawer
                                anchor={dir}
                                open={state[dir]}
                                onClose={toggleDrawer(false)}
                                onOpen={toggleDrawer(true)}
                            >
                                <Box
                                    sx={{
                                        width: 200,
                                        marginLeft: "1vw",
                                        marginRight: "1vw",
                                        marginTop: "5vh",
                                    }}
                                    role="presentation"
                                // onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}
                                >
                                    <img src={Logo} alt={Logo} width="90%" />
                                    <List>
                                        {
                                            dataSet.map((item) => {
                                                return (
                                                    <MobileLists toggleDrawer={toggleDrawer} item={item} />
                                                );
                                            })
                                        }
                                        {
                                            adminIsActive ?
                                                <Link to={'/dashboard/slideredite'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    <ListItem button onClick={toggleDrawer(false)}>
                                                        <ListItemIcon>
                                                            <Dashboard />
                                                        </ListItemIcon>
                                                        <ListItemText primary={'Dashboard'} fontWeight='bold' />
                                                    </ListItem>
                                                </Link>
                                                :
                                                <Link to={'/login'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    <ListItem button key={'Login'} onClick={toggleDrawer(false)}>
                                                        <ListItemIcon>
                                                            <Login />
                                                        </ListItemIcon>
                                                        <ListItemText primary={'Login'} fontWeight='bold' />
                                                    </ListItem>
                                                </Link>
                                        }
                                    </List>
                                    <Divider
                                        sx={{
                                            marginTop: '10px',
                                            marginBottom: '10px',
                                        }}
                                    >
                                    </Divider>
                                    <Grid container spacing={4} mb={4} justifyContent={'center'}>
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
                                </Box>
                            </SwipeableDrawer>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container >
        </Box >
    );
}