import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthenticatedLayout from "./component/AuthenticatedLayout";
import ReduxPage from "./pages/ReduxPage";
import {Provider} from "react-redux";
import store from "./redux-toolkit/stroe";
import CartPage from "./pages/CartPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route element={<AuthenticatedLayout />}>
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/profile"} element={<Profile />} />
            </Route>
              <Route path={"/redux"} element={<ReduxPage />}/>
              <Route path={"/cart"} element={<CartPage />}/>
              <Route path={"/posts"} element={<PostPage />}/>
            <Route path={"/login"} element={<Login />}/>
            <Route path={"/Register"} element={<Register />}/>

          </Routes>
        </Provider>
    </>
  );
}

export default App;
