import PropTypes from 'prop-types';

const totalCost = (destination, details) => {
  const {total_days: days, total_people: people, include_meals} = details;
  const {price_per_night, price_per_meal} = destination
  return (days * price_per_night) + (include_meals ? (days * people * price_per_meal) : 0)
}

const Reservation = ({details, destination}) => {
  const intlNumberToFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const intlDateTimeFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' });

  return (
  <tr className="reservation">
    <td className="cell">{destination.name}</td>
    <td className="cell right">{intlDateTimeFormat.format(new Date(details.start_date))}</td>
    <td className="cell center">{details.total_days}</td>
    <td className="cell center">{details.total_people}</td>
    <td className="cell center">{details.include_meals ? 'yes' : 'no'}</td>
    <td className="cell right">{intlNumberToFormat.format(destination.price_per_night)}</td>
    <td className="cell center">{details.include_meals ? intlNumberToFormat.format(destination.price_per_meal) : 'n/a'}</td>
    <td className="cell right">{intlNumberToFormat.format(totalCost(destination, details))}</td>
  </tr>
)};

Reservation.propTypes = {
  details: PropTypes.shape({
    start_date: PropTypes.string.isRequired,
    total_days: PropTypes.number.isRequired,
    total_people: PropTypes.number.isRequired,
    include_meals: PropTypes.bool.isRequired
  }),
  destination: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price_per_night: PropTypes.number.isRequired,
    price_per_meal: PropTypes.number.isRequired
  })
};

export default Reservation;
