import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from '../pages/Dashboard/Dashboard';
import UsersPage from '../pages/UsersPage/UsersPage';
import SingleUserPage from '../pages/SingleUserPage/SingleUserPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import SingleProductPage from '../pages/SingleProductPage/SingleProductPage';
import ReportsPage from '../pages/ReportsPage/ReportsPage';
import PromotionsPage from '../pages/PromotionsPage/PromotionsPage';

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="layout">
        <div className="layout__side-bar">
          <Sidebar />
        </div>
        <div className="layout__main-section">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/user/:id" element={<SingleUserPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/promotions" element={<PromotionsPage />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
