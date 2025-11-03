import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import HowPage from './HowPage';
import ShopPage from './ShopPage';
import ImpactPage from './ImpactPage';
import FAQPage from './FAQPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import CheckoutPage from './CheckoutPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/how" element={<HowPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/impact" element={<ImpactPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
