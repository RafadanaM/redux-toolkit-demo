import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { CustomerCard } from "./components/CustomerCard";
import { ReservationCard } from "./components/ReservationCard";
import { selectAllCustomer } from "./features/customerSlice";
import {
  addReservation,
  selectAllReservation,
} from "./features/reservationSlice";

function App() {
  const [reservationName, setReservationName] = useState("");
  const dispatch = useDispatch();
  const reservations = useSelector(selectAllReservation);

  const customers = useSelector(selectAllCustomer);

  const handleAddReservation = () => {
    if (!reservationName) return;
    dispatch(addReservation(reservationName));
    setReservationName("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((reservation) => (
                <ReservationCard
                  key={reservation.id}
                  reservationId={reservation.id}
                  name={reservation.name}
                />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard
              key={customer.id}
              id={customer.id}
              name={customer.name}
              foods={customer.food}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
