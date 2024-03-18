import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Links from './Links';
import Login from './Login';
import Signup from './Signup';
import Reservations from './Reservations';
import OffcanvasLayout from './OffcanvasLayout';


const App = () => (
  <BrowserRouter>
   <OffcanvasLayout>
    <Routes>
      <Route index element={<h2>Splash Screen</h2>} />
      <Route element={<Links />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="destinations" >
      <Route path=":id" element={<h3>Destination</h3>} />
      </Route>
      <Route path="reservations" element={<Reservations />} />
    </Routes>
    </OffcanvasLayout>
    </BrowserRouter>
)

export default App;
