import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Links from './Links';
import Login from './Login';
import Signup from './Signup';
import Reservations from './Reservations';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Links />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="destinations" >
        <Route path=":id" element={<h3>Destination</h3>} />
      </Route>
      <Route path="reservations" element={<Reservations />} />
    </Routes>
  </BrowserRouter>
);

export default App;
