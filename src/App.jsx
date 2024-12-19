import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Spinner from './UI/Spinner';
import toast, { Toaster } from 'react-hot-toast';
import ProtectedRoute from './ProtectedRoute';

const AppLayout = React.lazy(() => import('./UI/AppLayout'));
const Login = React.lazy(() => import('./Pages/LoginPage'));
// const UserManagement = React.lazy(() => import('./Pages/UserManagement'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard'));
const Verification = React.lazy(() => import('./Pages/Verification'));
const OnboardedDrivers = React.lazy(() => import('./Pages/OnboardedDrivers'));
const BusinessInsights = React.lazy(() => import('./Pages/BusinessInsights'));
const PageNotFound = React.lazy(() => import('./Pages/PageNotFound'));
const AIMLModels = React.lazy(() => import('./Pages/AIMLModels'));
const MLFormPage = React.lazy(() => import('./Pages/MLFormPage'));
const RiskVerification = React.lazy(() => import('./Pages/RiskVerification'));
const VehicleVerification = React.lazy(() =>
  import('./Pages/VehicleVerification')
);
const CreditVerification = React.lazy(() =>
  import('./Pages/CreditVerification')
);
const MyProfile = React.lazy(() => import('./Pages/MyProfile'));
const Signup = React.lazy(() => import('./Pages/SignupPage'));
const Driver = React.lazy(() => import('./Pages/Driver'));

export const toastWarning = (message) => {
  toast(message, {
    icon: '⚠️',
    duration: 5000,
    style: {
      fontSize: '16px',
      maxWidth: '500px',
      padding: '16px 24px',
      backgroundColor: '#FFF4E5', // Light orange
      color: '#7D4C00', // Dark orange
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    },
  });
};
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="verification" element={<Verification />} />
              <Route path="onboardedDrivers" element={<OnboardedDrivers />} />
              <Route path="businessInsights" element={<BusinessInsights />} />
              <Route path="AI-ML-models" element={<AIMLModels />} />
            </Route>

            <Route
              path="/riskVerification"
              element={
                <ProtectedRoute>
                  <RiskVerification />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vehicleVerification"
              element={
                <ProtectedRoute>
                  <VehicleVerification />
                </ProtectedRoute>
              }
            />
            <Route
              path="/creditVerification"
              element={
                <ProtectedRoute>
                  <CreditVerification />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ML-form/:formName"
              element={
                <ProtectedRoute>
                  <MLFormPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/driver/:id"
              element={
                <ProtectedRoute>
                  <Driver />
                </ProtectedRoute>
              }
            />

            <Route
              path="signup"
              element={
                <ProtectedRoute>
                  <Signup />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="userManagement"
              element={
                <ProtectedRoute>
                  <UserManagement />
                </ProtectedRoute>
              }
            /> */}
            <Route
              path="myProfile"
              element={
                <ProtectedRoute>
                  <MyProfile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />

            <Route path="login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12} // Default is 8
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          warning: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-gray-1)',
            color: 'var(--color-gray-700)',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
          },
        }}
      />
    </>
  );
}

export default App;
