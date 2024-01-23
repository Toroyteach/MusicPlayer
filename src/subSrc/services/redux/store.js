import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/reducer/appReducer';
import musicReducer from './music/reducer/musicReducer';
import userReducer from './user/reducer/userReducer';

const store = configureStore({
  reducer: {
    app: appReducer,
    music: musicReducer,
    user: userReducer,
  },
});

export default store;