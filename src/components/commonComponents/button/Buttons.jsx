import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { ArrowRightAlt } from "@mui/icons-material";


export const BrownButton = ({ link, text, height = { xs: '40px', md: '60px' } }) => {
    const [icon, seticon] = React.useState(false);
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <Button variant='contained'
                onMouseOver={() => seticon(true)}
                onMouseOut={() => seticon(false)}
                endIcon={<ArrowRightAlt sx={{
                    display: icon ? 'block' : 'none',
                }} />}
                sx={{
                    trnasition: '.5s',
                    backgroundColor: '#480610',
                    color: 'white',
                    lineHeight: '15px',
                    fontSize: '15px',
                    fontFamily: 'Rubik',
                    borderRadius: '30px',
                    padding: '0px 38px',
                    height: height,
                    '&:hover': {
                        backgroundColor: 'white',
                        color: '#4B444C',
                    },
                }} color='primary'>
                {text}
            </Button>
        </Link>
    )
}



export const WhiteButton = ({ link, text, height = { xs: '40px', md: '60px' } }) => {
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <Button variant='contained'
                sx={{
                    trnasition: '.5s',
                    backgroundColor: '#FFFFFF',
                    color: '#4B444C',
                    lineHeight: '15px',
                    fontSize: { xs: '10px', md: '15px' },
                    height: height,
                    fontFamily: 'Rubik',
                    borderRadius: '30px',
                    padding: { xs: '0px 10px', md: '0px 38px' },
                    textTransform: 'uppercase',
                    '&:hover': {
                        backgroundColor: 'white',
                        color: '#4B444C',
                    },
                }} color='primary'>
                {text}
            </Button>
        </Link>
    )
}