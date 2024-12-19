import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  // Check for user credentials in localStorage
  const isAuthenticated = !!localStorage.getItem('userCredentials'); // Replace 'userCredentials' with your key

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children (protected component)
  return children;
}
