import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/system";


function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const theme1 = createTheme({
    palette: {
      mode: "dark",
      error: {
        main: "#f44336",
        contrastText: "#dea500",
      },
      background: {
        paper: "#001e3c",
      },
      text: {
        primary: "#dea500",
      },
    },
  });

  const theme2 = createTheme({
    palette: {
      mode: "light",
      secondary: {
        main: "#ff7b31",
        dark: "#30dde1",
      },
    },
  });
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  return (
    <div>
    <ThemeProvider theme={darkTheme ? theme1 : theme2}>
    <UserProvider user={currentUser}>
      <BrowserRouter>
        <Routes>
        <Route element={<Main />} path="/">
            <Route element={<Login />} path="login" />
            <Route element={<SignUp />} path="/" />
            <Route element={<UserManager />} path="usermanager" />
            <Route element={<ContactUs />} path="contact" />

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
          <Route element={<NotFound/>} path="*"/>

        </Routes>
      </BrowserRouter>
    </UserProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
