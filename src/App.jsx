import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

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
import MLFormPage from './Pages/MLFormPage';
import Testing from '../Testing';
import RiskVerification from './Pages/RiskVerification';
import VehicleVerification from './Pages/VehicleVerification';
import CreditVerification from './Pages/CreditVerification';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="verification" element={<Verification />} />
            <Route path="onboardedDrivers" element={<OnboardedDrivers />} />
            <Route path="businessInsights" element={<BusinessInsights />} />
            <Route path="AI-ML-models" element={<AIMLModels />} />
          </Route>
          <Route path="/riskVerification" element={<RiskVerification />} />
          <Route
            path="/vehicleVerification"
            element={<VehicleVerification />}
          />
          <Route path="/creditVerification" element={<CreditVerification />} />
          <Route path="/ML-form/:formName" element={<MLFormPage />} />

          <Route path="login" element={<Login />} />
          <Route path="createUser" element={<CreateUser />} />
          <Route path="editUser" element={<EditUser />} />
          <Route path="deleteUser" element={<DeleteUser />} />
          <Route path="testing" element={<Testing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
