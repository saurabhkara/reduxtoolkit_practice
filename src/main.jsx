import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import Users from "./components/Users.jsx";
import Post from "./components/Posts.jsx";
import InternalLayout from "./components/InternalLayout.jsx";
import AddUser from "./components/AddUser.jsx";
import AddPost from "./components/AddPost.jsx";
import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="users" element={<InternalLayout />}>
        <Route path="" element={<Users />} />
        <Route path="adduser" element={<AddUser />} />
        <Route path="edit:/id" element={<Home />} />
      </Route>
      <Route path="posts" element={<InternalLayout />}>
        <Route path="" element={<Post />} />
        <Route path="addpost" element={<AddPost />} />
        <Route path="edit:/id" element={<Home />} />
      </Route>
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
