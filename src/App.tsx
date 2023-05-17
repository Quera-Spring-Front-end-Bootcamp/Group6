import { Route } from "react-router-dom";
import Index from "./pages/Index/Index";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Forget from "./pages/Forget/Forget";
import Reset from "./pages/Reset/Reset";

function Routes() {
  return (
    <div className="font-dana">
      <Route path="/" Component={Index} />
      <Route path="/register" Component={Register} />
      <Route path="/login" Component={Login} />
      <Route path="/forget" Component={Forget} />
      <Route path="/reset" Component={Reset} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;