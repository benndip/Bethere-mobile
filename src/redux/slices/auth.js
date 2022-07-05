import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: async (state, action) => {
      storage.save({
        key: 'USER',
        data: action.payload,
        expires: 1000 * 3600 * 24 * 365,
      });
      return {
        ...state,
        user: action.payload,
      };
    },
    setToken: async (state, action) => {
      storage.save({
        key: 'TOKEN',
        data: action.payload,
        expires: 1000 * 3600 * 24 * 365,
      });
      return {
        ...state,
        token: action.payload,
      };
    },
    removeUserAndToken: async state => {
      const keys = ['USER', 'TOKEN'];
      storage.remove({
        key: keys[0],
      });
      storage.remove({
        key: keys[1],
      });
      state.user = null;
      state.token = null;
    },
  },
});

export const {setUser, setToken, removeUserAndToken} = authSlice.actions;

export default authSlice.reducer;
