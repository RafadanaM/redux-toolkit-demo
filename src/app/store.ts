import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";
//configure store

const reducer = combineReducers({
  reservations: reservationsReducer,
  customers: customerReducer,
});
export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
