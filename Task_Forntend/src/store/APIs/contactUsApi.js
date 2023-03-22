/* eslint-disable prettier/prettier */
import {createAsyncThunk} from '@reduxjs/toolkit';
import client from './API';

// API for sending the contact us query
const sendQuery = createAsyncThunk(
  'contacts/sendQuery',
  async (arg, {getState, rejectWithValue}) => {
    try {
      const {contact} = getState(); // getting the contact from the redux state
      const {data} = await client.post('/contact-us', {
        name: contact.name,
        mobile: contact.mobile,
        email: contact.email,
        message: contact.message,
      });
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error);
      }
    }
  },
);

export {sendQuery};
