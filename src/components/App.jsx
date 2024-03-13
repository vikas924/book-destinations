import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Links from './Links';
import Login from './Login';
import Signup from './Signup';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Links />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);

export default App;
