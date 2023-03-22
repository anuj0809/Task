/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import {sendQuery} from '../APIs/contactUsApi';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    isLoading: false,
    name: '',
    mobile: '',
    email: '',
    message: '',
    alert: '',
    success: false,
  },
  reducers: {
    // set contact us query
    setQuery(state, action) {
      state.name = action.payload.name;
      state.mobile = action.payload.mobile;
      state.email = action.payload.email;
      state.message = action.payload.message;
    },
    // set alert message for positive or negative events
    setAlert(state, action) {
      state.alert = action.payload.message;
      state.success = action.payload.success;
    },
  },
  extraReducers: builder => {
    // send contact request
    builder.addCase(sendQuery.pending, state => {
      state.success = false;
      state.isLoading = true;
    });
    builder.addCase(sendQuery.fulfilled, (state, action) => {
      state.alert = action.payload.message;
      state.success = true;
      state.isLoading = false;
    });
    builder.addCase(sendQuery.rejected, (state, action) => {
      state.alert = action.payload.message;
      state.success = false;
      state.isLoading = false;
    });
  },
});

export const {setQuery, setAlert} = contactSlice.actions;
export default contactSlice.reducer;
