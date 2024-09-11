import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from './UI/Layout/AppLayout';
import Login from './Pages/LoginPage';
import DeleteUser from './Pages/DeleteUser';
import CreateUser from './Pages/CreateUser';
import Dashboard from './Pages/Dashboard';
import Verification from './Pages/Verification';
import OnboardedDrivers from './Pages/OnboardedDrivers';
import BusinessInsights from './Pages/BusinessInsights';
import PageNotFound from './Pages/PageNotFound';
import EditUser from './Pages/EditUser';
import AIMLModels from './Pages/AIMLModels';
// import Check from '../Check';
import MLFormPage from './Pages/MLFormPage';
import Testing from '../Testing';
import RiskVerification from './Pages/RiskVerification';
import VehicleVerification from './Pages/VehicleVerification';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="verification" element={<Verification />} />
          <Route path="onboardedDrivers" element={<OnboardedDrivers />} />
          <Route path="businessInsights" element={<BusinessInsights />} />
          <Route path="AI-ML-models" element={<AIMLModels />} />

          {/* <Route path="check" element={<Check />} /> */}
        </Route>
        <Route path="/riskVerification" element={<RiskVerification />} />
        <Route path="/vehicleVerification" element={<VehicleVerification />} />
        <Route path="/ML-form/:formName" element={<MLFormPage />} />

        <Route path="login" element={<Login />} />
        <Route path="createUser" element={<CreateUser />} />
        <Route path="editUser" element={<EditUser />} />
        <Route path="deleteUser" element={<DeleteUser />} />
        <Route path="testing" element={<Testing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
