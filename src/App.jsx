import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/home";
import { Checkout } from "./pages/checkout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
