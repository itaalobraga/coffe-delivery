import { Route, Routes } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
import { Finish } from "./pages/Checkout/Finish";
import { Home } from "./pages/Home";
import { HomeTemplate } from "./template/HomeTemplate";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/finish" element={<Finish />} />
      </Route>
    </Routes>
  );
}
