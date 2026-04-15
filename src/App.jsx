import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from '@/pages/Home';
import V1Page from '@/pages/V1Page';
import V2Page from '@/pages/V2Page';
import V3Page from '@/pages/V3Page';
import V4Page from '@/pages/V4Page';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/v1" element={<V1Page />} />
        <Route path="/v2" element={<V2Page />} />
        <Route path="/v3" element={<V3Page />} />
        <Route path="/v4" element={<V4Page />} />
      </Routes>
    </BrowserRouter>
  );
}
