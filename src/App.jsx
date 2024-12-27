import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import WorkInProgress from './pages/WorkInProgress';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<WorkInProgress />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

// import { useAuthStore } from './store/authStore';
// import { Layout } from './components/layout/Layout';
// import { LoginForm } from './components/auth/LoginForm';
// import { ProductList } from './components/dashboard/ProductList';
// import { OrderList } from './components/dashboard/OrderList';

// function App() {
//   const user = useAuthStore((state) => state.user);

//   if (!user) {
//     return <LoginForm />;
//   }

//   return (
//     <Layout>
//       <div className="space-y-8">
//         <ProductList />
//         <OrderList />
//       </div>
//     </Layout>
//   );
// }

