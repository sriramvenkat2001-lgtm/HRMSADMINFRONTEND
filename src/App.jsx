import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import MainLayout from './MainLayout';

import Employees from './pages/Employees';
import ViewEmployee from './navigation/viewEmployee';
import AddEmployee from './navigation/AddEmployee';
import Payroll from './pages/Payroll';

import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/employee" element={<Employees />} />
        <Route path="/viewEmployee/:id" element={<ViewEmployee />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/payroll" element={<Payroll />} />
      </Route>
    </Routes>
  );
}

export default App;
