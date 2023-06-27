import { useSelector } from "react-redux";
import BookingRow from "./BookingRow";


const ShowBookings = () => {
    const { bookingData } = useSelector((state) => state.flight);
   
  

    return (
      <div className="table-container">
        <table className="booking-table">
          <thead className="bg-gray-100/50">
            <tr className="text-black text-left">
              <th>#</th>
              <th>Destination From</th>
              <th>Destination To</th>
              <th className="text-center">Journey Date</th>
              <th className="text-center">Guests</th>
              <th className="text-center">Class</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
            {bookingData.length > 0 && (
              bookingData.map(item => <BookingRow detail={item} key={item.id} />)
            )}
          </tbody>
        </table>
      </div>
    );
};

export default ShowBookings;