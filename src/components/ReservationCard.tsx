import React from "react";
import { useDispatch } from "react-redux";
import { customerArrived } from "../features/customerSlice";

interface ReservationCardI {
  name: string;
  reservationId: string;
}

export const ReservationCard = ({ name, reservationId }: ReservationCardI) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(customerArrived(name, [], reservationId));
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};
