import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Forget from "./pages/Forget/Forget";
import Reset from "./pages/Reset/Reset";
import BoardView from "./components/BoardPagesComps/BoardView";

function App() {
  return (
    <div className="font-dana">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<BoardView />} />
          <Route path="listview" element={<div>list view</div>} />
          <Route path="calendarview" element={<div>calendar view</div>} />
          <Route path="profile" element={<div>profile</div>} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </div>
  );
}

export default App;
