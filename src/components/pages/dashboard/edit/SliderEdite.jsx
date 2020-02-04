import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { allData } from '../../../../RTK/Reducers/Reducers';
import { MyToast } from '../../../commonComponents/myToast/MyToast';
import { useNavigate } from 'react-router-dom';



export default () => {

    const dispatch = useDispatch()
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
    const navigate = useNavigate();
    if (!adminIsActive) {
        navigate("/login");
    }






    const fileUploader = async (file) => {
        let updatedData = new FormData();
        updatedData.append("upload_file", file);
        // console.log(file);
        let Updater = await axios.post('/imageuploader', updatedData);
        return `/images/${Updater.data}`;
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let dr = [
            {
                background: await fileUploader(data.get('slider1_background')),
                link: "/park-view-city-islamabad",
                logos: [
                    await fileUploader(data.get('slider1_logo1')),
                    await fileUploader(data.get('slider1_logo2')),
                ],
                text: [
                    { title: data.get('slider1_heading1'), color: '#F5B315' },
                    { title: data.get('slider1_heading2'), color: '#FFFFFF' },
                    { title: data.get('slider1_heading3'), color: '#FFFFFF' },
                ],
            },

            {
                background: await fileUploader(data.get('slider2_background')),
                link: "/park-view-city-islamabad",
                logos: [
                    await fileUploader(data.get('slider2_logo1')),
                    await fileUploader(data.get('slider2_logo2')),
                ],
                text: [
                    { title: data.get('slider2_heading1'), color: '#F5B315' },
                    { title: data.get('slider2_heading2'), color: '#FFFFFF' },
                    { title: data.get('slider2_heading3'), color: '#FFFFFF' },
                ],
            },


            {
                background: await fileUploader(data.get('slider3_background')),
                link: "/park-view-city-islamabad",
                logos: [
                    await fileUploader(data.get('slider3_logo1')),
                    await fileUploader(data.get('slider3_logo2')),
                ],
                text: [
                    { title: data.get('slider3_heading1'), color: '#F5B315' },
                    { title: data.get('slider3_heading2'), color: '#FFFFFF' },
                    { title: data.get('slider3_heading3'), color: '#FFFFFF' },
                ],
            },
        ]
        let sender = await axios.post('/updater', {
            section: 'sliderSection',
            data: dr,
        });

        if (sender.data.success) {
            dispatch(allData())
            MyToast.fire({
                icon: 'success',
                title: 'Updated Successfully'
            })
            document.getElementById('sliderUpdate').reset();
        } else {
            MyToast.fire({
                icon: 'error',
                title: 'Something went wrong ! Please try again'
            })
        }





    };

    return (
        <Box sx={{ boxShadow: '0px 2px 57px #e2e2e2', }} mb={10}>
            <Box textAlign='center' pt={10} sx={{ color: '#010101' }}>
                <Box sx={{ display: 'inline-block' }} mb={2}>
                    <Container>
                        <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important' }}>
                            Update Slider All Fileds are required
                        </Typography>

                    </Container>
                </Box>
            </Box >
            <Container sx={{ padding: '10px 10px 80px 10px', }}>
                <CssBaseline />

                <Box
                    sx={{
                        paddingTop: 3,
                        paddingBottom: 3,
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: '1px solid #4B0606',
                        borderRadius: '5px',
                    }}
                >
                    <Box component="form" id='sliderUpdate' enctype="multipart/form-data" method="post" onSubmit={handleSubmit} sx={{ mt: 3, fontSize: '10px' }}>
                        <Container>
                            <Grid container spacing={2} mb={5} >
                                <Grid item xs={12} >
                                    <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', fontFamily: 'Rubik !important' }}>
                                        Slider 1 Data
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="slider1_logo1"
                                        required
                                        fullWidth
                                        id="slider1_logo1"
                                        boxShadow={3}
                                        type="file"
                                        helperText="Slider 1 Logo 1"
                                    // defaultValue={sliderSection[0].logos[0]}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="slider1_logo2"
                                        required
                                        fullWidth
                                        id="slider1_logo2"
                                        boxShadow={3}
                                        type="file"
                                        helperText="Slider 1 Logo 2"
                                    // defaultValue={sliderSection[0].logos[1]}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="slider1_background"
                                        required
                                        fullWidth
                                        id="slider1_background"
                                        boxShadow={3}
                                        type="file"
                                        helperText="Slider 1 background Image"
                                    // defaultValue={sliderSection[0].background}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="slider1_heading1"
                                        label="Enter Heading 1..."
                                        name="slider1_heading1"
                                        defaultValue={sliderSection[0].text[0].title}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="slider1_heading2"
                                        label="Enter Heading 2..."
                                        name="slider1_heading2"
                                        defaultValue={sliderSection[0].text[1].title}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="slider1_heading3"
                                        label="Enter Heading 3..."
                                        defaultValue={sliderSection[0].text[2].title}
                                        name="slider1_heading3"
                                    />
                                </Grid>


                                {/* Slider 2 Data */}


                                <Grid item xs={12} >
                                    <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', fontFamily: 'Rubik !important' }}>
                                        Slider 2 Data
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="slider2_logo1"
                                        required
                                        fullWidth
                                        id="slider2_logo1"
                                        boxShadow={3}
                                        type="file"
                                        helperText="Slider 2 Logo 1"
                                    // defaultValue={sliderSection[0].logos[0]}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="slider2_logo2"
                                        required
                                        fullWidth
                                        id="slider2_logo2"
                                        boxShadow={3}
                                        type="file"
                                        helperText="Slider 2 Logo 2"
                                    // defaultValue={sliderSection[0].logos[1]}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="slider2_background"
                                        required
                                        fullWidth
                                        id="slider2_background"
                                        boxShadow={3}
                                        type="file"
                                        helperText="Slider 2 background Image"
                                    // defaultValue={sliderSection[0].background}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="slider2_heading1"
                                        label="Enter Heading 1..."
                                        name="slider2_heading1"
                                        defaultValue={sliderSection[1].text[0].title}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="slider2_heading2"
                                        label="Enter Heading 2..."
                                        name="slider2_heading2"
                                        defaultValue={sliderSection[1].text[1].title}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="slider2_heading3"
                                        label="Enter Heading 3..."
                                        defaultValue={sliderSection[1].text[2].title}
                                        name="slider2_heading3"
                                    />
                                </Grid>

                                {/* Slider 3 Data */}


                                <Grid item xs={12} >
                                    <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', fontFamily: 'Rubik !important' }}>
                                        Slider 3 Data
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="slider3_logo1"
                                        required
                                        fullWidth
                                        id="slider3_logo1"
                                        boxShadow={3}
                                        type="file"
                                        helperText="Slider 3 Logo 1"
                                    // defaultValue={sliderSection[0].logos[0]}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="slider3_logo2"
                                        required
                                        fullWidth
                                        id="slider3_logo2"
                                        boxShadow={3}
                                        type="file"
                                        helperText="Slider 3 Logo 2"
                                    // defaultValue={sliderSection[0].logos[1]}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="slider3_background"
                                        required
                                        fullWidth
                                        id="slider3_background"
                                        boxShadow={3}
                                        type="file"
                                        helperText="Slider 3 background Image"
                                    // defaultValue={sliderSection[0].background}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="slider3_heading1"
                                        label="Enter Heading 1..."
                                        name="slider3_heading1"
                                        defaultValue={sliderSection[2].text[0].title}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="slider3_heading2"
                                        label="Enter Heading 2..."
                                        name="slider3_heading2"
                                        defaultValue={sliderSection[2].text[1].title}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="slider3_heading3"
                                        label="Enter Heading 3..."
                                        defaultValue={sliderSection[2].text[2].title}
                                        name="slider3_heading3"
                                    />
                                </Grid>
                            </Grid>

                            <Button variant='contained' type='submit'
                                sx={{
                                    trnasition: '.5s',
                                    backgroundColor: '#480610',
                                    color: 'white',
                                    lineHeight: '15px',
                                    fontSize: '15px',
                                    fontFamily: 'Rubik',
                                    borderRadius: '30px',
                                    padding: '0px 38px',
                                    height: '40px',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: '#4B444C',
                                    },
                                }} color='primary'>
                                Update Now
                            </Button>
                        </Container>
                    </Box>
                </Box>
            </Container>
        </Box >
    );
}