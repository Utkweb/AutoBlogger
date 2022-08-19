import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Main from "./components/main";
import Admin from './components/admin';
import User from "./components/user";
import Login from "./components/main/Login";
import SignUp from "./components/main/SignUp";
import Dashboard from "./components/admin/Dashboard";
import ManageUser from "./components/admin/ManageUser";
import AdminProfile from "./components/admin/AdminProfile";
import Userprofile from "./components/user/Userprofile";
import Blog from "./components/blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="main">
          <Route element={<Login />} path="login" />
          <Route element={<SignUp />} path="signup" />
        </Route>

        <Route element={<Admin />} path="admin">
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<ManageUser />} path="manageuser" />
          <Route element={<AdminProfile />} path="adminprofile" />
        </Route>

        <Route element={<User />} path="user">
          <Route element={<Userprofile />} path="userprofile" />
        </Route>

        <Route element={<Blog />} path="blog">

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
