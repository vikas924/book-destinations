import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reservations from './Reservations';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<h2>Splash Screen</h2>} />
      <Route path="login" element={<h2>Login</h2>} />
      <Route path="signup" element={<h2>Sign Up</h2>} />
      <Route path="destinations" >
        <Route path=":id" element={<h3>Destination</h3>} />
      </Route>
      <Route path="reservations" element={<Reservations />} />
    </Routes>
  </BrowserRouter>
);

export default App;
