import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Home";
import Cafe from "./pages/Cafe";
import { Toaster } from "react-hot-toast";
import About from "./pages/About";
import Salon from "./pages/Salon";
import Fashion from "./pages/Fashion";
import ProductPage from "./pages/ProductPage";
import Combos from './pages/Combos';
import Footer from './components/Footer';
import DesktopNavbar from "./components/basics/DesktopNavbar";
import ScrollToTopOnRouteChange from "./utils/ScrollToTopOnRouteChange";
import WhatsAppComponent from "./components/basics/WhatsAppComponent";
import MobileNavbar from "./components/basics/MobileNavbar";
import Nailarts from "./pages/Nailarts";
import ProductDetails from './pages/ProductDetails';
import NailArtsPage from "./pages/NailArtsPage";

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}>
      <div className="min-h-screen flex flex-col">
        <ScrollToTopOnRouteChange />
        <DesktopNavbar />
        <MobileNavbar />
        <WhatsAppComponent />

        <div className="flex-1 bg-primary-bg xl:pt-0">
          <Suspense fallback={<div className="text-center py-10 text-lg text-white">Loading...</div>}>
            <Routes>
              <Route path='/' element={<Home />} />

              {/* cafe routes */}
              <Route path='/cafe' element={<Cafe />} />
              <Route path='/combos' element={<Combos />} />

              {/* salon routes */}
              <Route path='/salon' element={<Salon />} />
              <Route path='/nailarts' element={<NailArtsPage />} />

              {/* store routes */}
              <Route path='/store' element={<Fashion />} />
              <Route path='/fashion-store/s/:filterSearch' element={<ProductPage />} />
              <Route path='fashion-store/c/:cat/:subcat' element={<ProductPage />} />
              <Route path='fashion-store/c/:cat' element={<ProductPage />} />
              <Route path='fashion-store/new/:whatsnew' element={<ProductPage />} />
              <Route path='fashion-store/:type' element={<ProductPage />} />
              <Route path='/product/:productId' element={<ProductDetails />} />

              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<About />} />
              <Route path='/lander' element={<Navigate to="/" replace />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
