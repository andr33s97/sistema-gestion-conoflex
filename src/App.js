import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavPrincipal from "./components/NavPrincipal";
import Customers from "./components/Customers";
import Providers from "./components/Providers";
import Home from "./components/Home";
import Products from "./components/Products";


function App() {
  return (
    <BrowserRouter>
      <NavPrincipal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/products" element={<Products />} />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App;