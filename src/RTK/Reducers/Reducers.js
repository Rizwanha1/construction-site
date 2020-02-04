import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

// ------------------All Asyn Reducers are below ------------------//

let initialState = {
  status: null,
  adminIsActive: false,
  loader: true,
  upDater: false,
  ourServicesSection: false,
  weDealInSection: false,
  restDoneRes: false,
  upCommingSection: false,
  reviewsSection: false,
  BuildRealBrickSection: false,
  teamSection: false,
  groupSection: false,
  branchSection: false,
  sliderSection: false,
  resetRequest: false,
}

// ------------------All data Getter Setter Reducers ------------------//

// asyn forgotpasswordHandler
export const forgotpasswordHandler = createAsyncThunk(
  'mainSlice/forgotpasswordHandler',
  async ({ email }) => {
    const data = await axios.post('/forgotpassword', { adminEmail: email });
    console.log('payload Forgot', data.data);
    return await data.data;
  }
)







// resetDone
export const resetDone = createAsyncThunk(
  'mainSlice/resetDone',
  async ({ newPassword, token }) => {
    const data = await axios.post('/restpassword', { newPassword, token })
    return data.data;
  }
)





// asyn New Actor Registration
export const allData = createAsyncThunk(
  'mainSlice/allData',
  async () => {
    const data = await axios.get('/allData')
    return data.data;
  }
)


// asyn Login
export const adminLogin = createAsyncThunk(
  'mainSlice/adminLogin',
  async ({ email, password }) => {
    const data = await axios.post('/login', { email, password })
    return data.data;
  }
)







// asyn setter
const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    LOG_OUT: (state) => {
      state.status = null;
      state.adminIsActive = false;
    },
  },
  extraReducers: {

    // ------------------Response Login ------------------//
    [adminLogin.pending]: (state, action) => {
      state.status = 'loading';
      Toast.fire({
        icon: 'info',
        title: 'Loading...'
      })
    },
    [adminLogin.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        Toast.fire({
          icon: 'success',
          title: 'Logged In Successfully'
        })
        state.adminIsActive = true;
        console.log('adminLogin', state.adminIsActive);

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
      }
    },
    [adminLogin.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check Your Internet Connection!',
      })
    },


    // ------------------Response Alldata ------------------//

    [allData.pending]: (state) => {
      state.status = 'loading';
    },
    [allData.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.ourServicesSection = payload.message.ourServicesSection;
        state.weDealInSection = payload.message.weDealInSection;
        state.upCommingSection = payload.message.upCommingSection;
        state.reviewsSection = payload.message.reviewsSection;
        state.BuildRealBrickSection = payload.message.BuildRealBrickSection;
        state.teamSection = payload.message.teamSection;
        state.groupSection = payload.message.groupSection;
        state.branchSection = payload.message.branchSection;
        state.sliderSection = payload.message.sliderSection;
        state.loader = false;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
      }
    },
    [allData.rejected]: (state) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check Your Internet Connection!',
      })
    },


    // ------------------Response Reset Password ------------------//
    [resetDone.pending]: (state, action) => {
      state.status = 'loading';
      Toast.fire({
        icon: 'info',
        title: 'Loading...'
      })
    },
    [resetDone.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        Toast.fire({
          icon: 'success',
          title: 'Logged In Successfully'
        })
        state.resetRequest = true;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
      }
    },
    [resetDone.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check Your Internet Connection!',
      })
    },

    // Forgort handler
    [forgotpasswordHandler.pending]: (state, action) => {
      Toast.fire({
        icon: 'success',
        title: '...Loading!',
      })
      state.status = 'loading';
    },
    [forgotpasswordHandler.fulfilled]: (state, { payload }) => {
      if (payload.success === true) {
        state.sendMail = payload.message;
        Toast.fire({
          icon: 'success',
          title: 'Email !',
          text: `${payload.message}`,
        })
        console.log('payload Forgot', payload.message);
        state.status = 'success';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
        state.status = 'failed';
      }
    },
    [forgotpasswordHandler.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ` Rejected! Failed to Send Mail`,
      })
    },


    // Reset Done 
    [resetDone.pending]: (state, action) => {
      state.status = 'loading';
      Toast.fire({
        icon: 'success',
        title: 'Loading ... !',
      })
      state.restDoneRes = false;
    },
    [resetDone.fulfilled]: (state, { payload }) => {
      if (payload.success === true) {
        state.restDoneRes = true;
        Toast.fire({
          icon: 'success',
          title: 'Reset !',
          text: `${payload.message}`,
        })
        state.status = 'success';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
        state.status = 'failed';
        state.restDoneRes = false;
      }
    },
    [resetDone.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ` Rejected! Failed to Reset Password`,
      })
    },










    // end of all Extra Reducers reducers
  },
})











export const { LOG_OUT } = mainSlice.actions;



// ------------------All Asyn Getter Setter Reducers Exporter ------------------//

export const mainReducer = mainSlice.reducer;

