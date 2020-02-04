

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
    const { branchSection, adminIsActive } = useSelector(state => state.mainReducer);
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
        let branches = [
            {
                branch: data.get('branch1_Area'),
                address: data.get('branch1_Address'),
            },
        ]
        let sender = await axios.post('/updater', {
            section: 'branchSection',
            data: branches,
        });

        if (sender.data.success) {
            dispatch(allData())
            MyToast.fire({
                icon: 'success',
                title: 'Updated Successfully'
            })
            document.getElementById('teamupdator').reset();
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
                            Branch Section
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
                                        Branch 1
                                    </Typography>
                                </Grid>
                                {/* Branch1 */}
                                <Grid item xs={12}>
                                    <TextField
                                        name="branch1_Area"
                                        required
                                        fullWidth
                                        boxShadow={3}
                                        type="text"
                                        helperText="Branch Location"
                                        defaultValue={branchSection[0].branch}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        multiLine
                                        minRows={3}
                                        label="Enter Address"
                                        name="branch1_Address"
                                        defaultValue={branchSection[0].address}
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