import { configureStore } from '@reduxjs/toolkit';
import auctionReducer from './auction';

export default configureStore({
  reducer: {
    auction: auctionReducer,
  }
});
