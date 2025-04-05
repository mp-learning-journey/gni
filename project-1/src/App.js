import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthenticatedLayout from "./component/AuthenticatedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route element={<AuthenticatedLayout />}>
            <Route path={"/dashboard"} element={<Dashboard />} />
            <Route path={"/profile"} element={<Profile />} />
        </Route>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/Register"} element={<Register />}/>

      </Routes>
    </>
  );
}

export default App;
