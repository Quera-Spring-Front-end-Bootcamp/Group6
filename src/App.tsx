import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index/Index";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Forget from "./pages/Forget/Forget";
import Reset from "./pages/Reset/Reset";
import { AppRouteProps } from "./types/types"; // update the import statement for AppRouteProps

function App() {
  const exampleElement = <div>Example component</div>; // define example element here

  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/example" element={<Route {...{ path: "/example", element: exampleElement }} />} /> // example route using the Route component
      </Routes>
    </div>
  );
}

export default App;