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
import PromotionsPage from '../pages/PromotionsPage/PromotionsPage';
import ProductReportsPage from '../pages/ProductReportsPage/ProductReportsPage';
import UserReportsPage from '../pages/UserReportsPage/UserReportsPage';
import SingleProductReport from '../pages/SingleProductReport/SingleProductReport';
import PendingItemsPage from '../pages/PendingItemsPage/PendingItemsPage';
import SingleUserReport from '../pages/SingleUserReport/SingleUserReport';
import SinglePendingProduct from '../pages/SinglePendingProduct/SinglePendingProduct';

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
            <Route path="/user-reports" element={<UserReportsPage />} />
            <Route path="/product-reports" element={<ProductReportsPage />} />
            <Route path="/pending-product/:id" element={<SinglePendingProduct />} />
            <Route path="/product-report/details" element={<SingleProductReport />} />
            <Route path="/user-report/details" element={<SingleUserReport />} />
            <Route path="/promotions" element={<PromotionsPage />} />
            <Route path="/pending-items" element={<PendingItemsPage />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
