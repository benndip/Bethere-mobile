import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: async (state, action) => {
      try {
        const jsonValue = JSON.stringify(action.payload);
        await AsyncStorage.setItem('USER', jsonValue);
      } catch (e) {
        console.log('Could not save to storage');
      }
      state.user = action.payload;
    },
    setToken: async (state, action) => {
      try {
        const jsonValue = JSON.stringify(action.payload);
        await AsyncStorage.setItem('TOKEN', jsonValue);
      } catch (e) {
        console.log('Could not save to storage');
      }
      state.token = action.payload;
    },
    removeUserAndToken: async state => {
      const keys = ['USER', 'TOKEN'];
      try {
        await AsyncStorage.multiRemove(keys);
      } catch (e) {
        console.log('Could not remove from storage');
      }
      state.user = null;
      state.token = null;
    },
  },
});

export const {setUser, setToken, removeUserAndToken} = authSlice.actions;

export default authSlice.reducer;
