import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index/Index";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Forget from "./pages/Forget/Forget";
import Reset from "./pages/Reset/Reset";

function App() {
  return (
    <div className="font-dana">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </div>
  );
}

export default App;