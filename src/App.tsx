import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { SingIn } from "./pages/sing-in/sing-in";
import { SinUp } from "./pages/sin-up/sin-up";
import { AddCategory } from "./pages/Addcategory/addcategory";
import { Category } from "./pages/category/category";

const App = () => {
  return (
    <Routes>
      {/* Kirish sahifasi */}
      <Route path="/" element={<SingIn />} />
      {/* Ro'yxatdan o'tish sahifasi */}
      <Route path="register" element={<SinUp />} />
      {/* Layout ichidagi sahifalar */}
      <Route path="app" element={<Layout/>}>
        <Route index element={<Home />} /> {/* Default sahifa */}
        <Route path="category" element={<Category/>} />
        <Route path="add-category" element={<AddCategory />} />
      </Route>
    </Routes>
  );
};

export default App;
