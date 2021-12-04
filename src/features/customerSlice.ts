import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface Customer {
  id: string;
  name: string;
  food: string[];
  reservationId: string;
}

interface CustomerState {
  value: Customer[];
}

interface AddFoodPayload {
  food: string;
  id: string;
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addFood: (state, action: PayloadAction<AddFoodPayload>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
    customerArrived: {
      reducer(state, action: PayloadAction<Customer>) {
        state.value.push(action.payload);
      },
      prepare(name: string, food: string[], reservationId: string) {
        return {
          payload: {
            id: nanoid(),
            name,
            food,
            reservationId,
          },
        };
      },
    },
  },
});

export const { customerArrived, addFood } = customerSlice.actions;

export const selectAllCustomer = (state: RootState) => state.customers.value;

export default customerSlice.reducer;
