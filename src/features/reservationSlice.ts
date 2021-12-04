import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Customer, customerArrived } from "./customerSlice";

export interface Reservation {
  id: string;
  name: string;
}

export interface ReservationState {
  value: Reservation[];
}

const initialState: ReservationState = {
  value: [],
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: {
      reducer(state, action: PayloadAction<Reservation>) {
        state.value.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name,
          },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      customerArrived,
      (state, action: PayloadAction<Customer>) => {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.reservationId
        );
      }
    );
  },
});

export const { addReservation } = reservationsSlice.actions;

export const selectAllReservation = (state: RootState) =>
  state.reservations.value;

export default reservationsSlice.reducer;
