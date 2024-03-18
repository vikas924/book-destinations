import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Links from './Links';
import Login from './Login';
import Signup from './Signup';
import OffcanvasLayout from './OffcanvasLayout';

const App = () => (
  <BrowserRouter>
   <OffcanvasLayout>
    <Routes>
      <Route index element={<Links />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
    </OffcanvasLayout>
    </BrowserRouter>
);

export default App;
