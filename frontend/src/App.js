import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Admin from "./components/admin";
import User from "./components/user";
import Login from "./components/main/Login";
import SignUp from "./components/main/SignUp";
import Dashboard from "./components/admin/Dashboard";
import ManageUser from "./components/admin/ManageUser";
import AdminProfile from "./components/admin/AdminProfile";
import Userprofile from "./components/user/Userprofile";
import Blog from "./components/blog";
import { useState } from "react";
import { UserProvider } from "./components/main/UseContext";
import AddVideo from "./components/user/AddVideo";
import VideoManager from "./components/user/VideoManager";
import UserManager from "./components/main/UserManager";
import AddBlog from "./components/blog/AddBlog";
import BlogManager from "./components/blog/BlogManager";
import ContactUs from "./components/main/ContactUs";
import NotFound from "./components/main/NotFound";


function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  return (
    <UserProvider user={currentUser}>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/">
            <Route element={<Login />} path="login" />
            <Route element={<SignUp />} path="/" />
            <Route element={<UserManager />} path="usermanager" />
            <Route element={<ContactUs />} path="contact" />
            <Route element={<NotFound/>} path="error"/>

          </Route>

          <Route element={<Admin />} path="admin">
            <Route element={<Dashboard />} path="dashboard" />
            <Route element={<ManageUser />} path="manageuser" />
            <Route element={<AdminProfile />} path="adminprofile" />
          </Route>

          <Route element={<User />} path="user">
            <Route element={<Userprofile />} path="userprofile" />
            <Route element={<AddVideo />} path="addvideo" />
            <Route element={<VideoManager />} path="videomanager" />
          </Route>

          <Route element={<Blog />} path="blog">
            <Route element={<AddBlog/>} path="addblog"/>
            <Route element={<BlogManager/>} path="blogmanager"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
