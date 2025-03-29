// // layouts/AuthLayout/AuthLayout.jsx
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '@/contexts/auth/useAuth';

// export const AuthLayout = ({ children }) => {
//     const { user } = useAuth();

//     if (user) {
//         return <Navigate to="/dashboard" replace />;
//     }

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50">
//             <div className="max-w-md w-full">{children}</div>
//         </div>
//     );
// };