import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MobileLists from '../../commonComponents/navBar/MobileLists';
import { ListItem } from '@mui/material';
import { ArrowUpwardRounded, CardMembership, CommentBank, Construction, Dashboard, DesignServices, Directions, FacebookOutlined, Home, HomeMaxOutlined, HomeRepairServiceOutlined, Instagram, LocationCityOutlined, Login, Park, QueryBuilder, TourSharp, Upgrade, WaterDamageOutlined, WorkHistory } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import GroupsIcon from '@mui/icons-material/Groups';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { LOG_OUT } from '../../../RTK/Reducers/Reducers';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const dataSet = [
  {
    title: 'Dashboard',
    link: '/dashboard/slideredite',
    children: [],
    icon: <Dashboard sx={{ color: '#4B0606' }} />
  },
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
        link: '/dashboard/ourteamedit',
        icon: <CardMembership sx={{ color: '#4B0606' }} />
      },
      {
        label: 'Branch Office',
        link: '/dashboard/branchofficeedit',
        icon: <QueryBuilder sx={{ color: '#4B0606' }} />
      },
    ],
  },
  {
    title: 'Contact Us',
    link: '/dashboard/contactusedit',
    children: [],
    icon: <LiveHelpIcon sx={{ color: '#4B0606' }} />
  },
]
const drawerWidth = 270;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default () => {
  const { adminIsActive } = useSelector(state => state.mainReducer);
  const navigate = useNavigate();
  if (!adminIsActive) {
    navigate("/");
  }
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = (open) => () => {
    setOpen(open);
  };


  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Redwood Assets Managment &amp; Services &reg;
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={toggleDrawer(false)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {
            dataSet.map((item) => {
              return (
                <MobileLists toggleDrawer={toggleDrawer} item={item} />
              );
            })
          }
          {
            true ? <><ListItem button key={'dashboard'} onClick={
              () => {
                toggleDrawer(false);
                dispatch(LOG_OUT());
              }
            }>
              <ListItemIcon>
                <Login />
              </ListItemIcon>
                <ListItemText primary={'Log Out'} />
            </ListItem></> : <><ListItem button key={'Login'} onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <Login />
              </ListItemIcon>
              <Link to={'/login'} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={'Login'} />
              </Link>
            </ListItem></>
          }
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
