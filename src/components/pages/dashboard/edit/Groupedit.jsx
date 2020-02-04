

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
import { toast } from 'react-toastify';
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

    // File/images uploder
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
        let team = [
            {
                description: data.get('member1_description'),
                image: await fileUploader(data.get('member1_image')),
                name: data.get('member1_name'),
                post: data.get('member1_post'),
            },
            {
                description: data.get('member2_description'),
                image: await fileUploader(data.get('member2_image')),
                name: data.get('member2_name'),
                post: data.get('member2_post'),
            },
            {
                description: data.get('member3_description'),
                image: await fileUploader(data.get('member3_image')),
                name: data.get('member3_name'),
                post: data.get('member3_post'),
            },
            {
                description: data.get('member4_description'),
                image: await fileUploader(data.get('member4_image')),
                name: data.get('member4_name'),
                post: data.get('member4_post'),
            },
        ]
        let sender = await axios.post('/updater', {
            section: 'teamSection',
            data: team,
        });
        dispatch(allData())
        MyToast.fire({
            icon: 'success',
            title: 'Updated Successfully'
        })
    };

    return (
        <Box sx={{ boxShadow: '0px 2px 57px #e2e2e2', }} mb={10}>
            <Box textAlign='center' pt={10} sx={{ color: '#010101' }}>
                <Box sx={{ display: 'inline-block' }} mb={2}>
                    <Container>
                        <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: { xs: '30px', md: '40px' }, fontFamily: 'Poppins !important' }}>
                            Our Group Section
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
                    <Box component="form" enctype="multipart/form-data" method="post" onSubmit={handleSubmit} sx={{ mt: 3, fontSize: '10px' }}>
                        <Container>
                            <Grid container spacing={2} mb={5} >
                                <Grid item xs={12} >
                                    <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', fontFamily: 'Rubik !important' }}>
                                        Group 1
                                    </Typography>
                                </Grid>
                                {/* group1 */}
                                <Grid item xs={12}>
                                    <TextField
                                        name="group1_image"
                                        required
                                        fullWidth
                                        boxShadow={3}
                                        type="file"
                                        helperText="group 1 Image"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        minRows={5}
                                        multiline
                                        label="Enter Description"
                                        name="group1_description"
                                        defaultValue={teamSection[0].description}
                                    />
                                </Grid>

                                {/* group2 */}
                                <Grid item xs={12} >
                                    <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', fontFamily: 'Rubik !important' }}>
                                        Group 2
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="group2_image"
                                        required
                                        fullWidth
                                        boxShadow={3}
                                        type="file"
                                        helperText="group 2 Image"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        minRows={5}
                                        multiline
                                        label="Enter Description"
                                        name="group2_description"
                                        defaultValue={teamSection[1].description}
                                    />
                                </Grid>

                                {/* group3 */}
                                <Grid item xs={12} >
                                    <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', fontFamily: 'Rubik !important' }}>
                                        Group 3
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="group3_image"
                                        required
                                        fullWidth
                                        boxShadow={3}
                                        type="file"
                                        helperText="group 3 Image"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        minRows={5}
                                        multiline
                                        label="Enter Description"
                                        name="group3_description"
                                        defaultValue={teamSection[2].description}
                                    />
                                </Grid>



                                {/* member4 */}
                                <Grid item xs={12} >
                                    <Typography sx={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', fontFamily: 'Rubik !important' }}>
                                        Group 4
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="group4_image"
                                        required
                                        fullWidth
                                        boxShadow={3}
                                        type="file"
                                        helperText="group 4 Image"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        minRows={5}
                                        multiline
                                        label="Enter Description"
                                        name="group4_description"
                                        defaultValue={teamSection[3].description}
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