import Reservation from './Reservation';

const mockDestinations = [
  {
    id: 1,
    name: 'Rome',
    image_url: 'http://getty.com/rome.jpg',
    description: 'Enjoy the best place',
    price_per_night: 30,
    price_per_meal: 15 
  },
  {
    id: 2,
    name: 'Venice',
    image_url: 'http://getty.com/venice.jpg',
    description: 'Enjoy a tour in Venice',
    price_per_night: 20,
    price_per_meal: 10 
  },
  {
    id: 3,
    name: 'Berlin',
    image_url: 'http://getty.com/berlin.jpg',
    description: 'Enjoy Berlin at night',
    price_per_night: 40,
    price_per_meal: 15 
  }
];

const mockReservations = [
  {
    id: 1,
    total_people: 2,
    start_date: '2024-3-15',
    total_days: 3,
    include_meals: false,
    user_id: 1,
    destination_id: 1
  },
  {
    id: 2,
    total_people: 2,
    start_date: '2024-3-1',
    total_days: 5,
    include_meals: false,
    user_id: 1,
    destination_id: 2
  },
  {
    id: 3,
    total_people: 3,
    start_date: '2024-4-5',
    total_days: 2,
    include_meals: true,
    user_id: 1,
    destination_id: 3
  }
];
const reservationsHeader = () => (
  <thead>
    <tr className="reservations__header">
      <td className="cell">Name</td>
      <td className="cell">Date</td>
      <td className="cell">Total Days</td>
      <td className="cell">Total People</td>
      <td className="cell">Meals included</td>
      <td className="cell">Price per Night</td>
      <td className="cell">Price per Meal</td>
      <td className="cell">Total Cost</td>
    </tr>
  </thead>
);

const reservationsList = (reservations) => reservations.map(r => (
  <Reservation key={r.id} details={r} destination={mockDestinations.find(d => d.id === r.destination_id)}/>
))

const Reservations = () => {
  return (
    <div className="content">
      <h2>My Reservations</h2>
      <table className="reservations">
        {reservationsHeader()}
        <tbody>
          {reservationsList(mockReservations)}
        </tbody>        
      </table>
    </div>
  );
}

export default Reservations;
