import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;
