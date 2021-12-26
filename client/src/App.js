import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path={"/"} />
      <Route element={<LoginPage />} path={"/login"} />
      <Route element={<RegisterPage />} path={"/register"} />
      <Route element={<ShopPage />} path={"/shop"} />
      <Route element={<ProductPage />} path={"/product"} />
      <Route element={<CartPage />} path={"/cart"} />
      <Route element={<SearchPage />} path={"/search"} />
    </Routes>
  );
}

export default App;
