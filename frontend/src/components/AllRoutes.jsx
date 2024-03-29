import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AdminPage } from "../pages/AdminPage";
import { Tasks } from "../pages/Tasks";
import { AboutPage } from "../pages/AboutPage";
import { LoginPage } from "../pages/LoginPage";
import { Projects } from "../pages/Projects";
import { PrivateRoute } from "./PriviteRoute";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/tasks" element={<Tasks />}></Route> */}
        <Route path="/about" element={<AboutPage />}></Route>

        <Route path="/admin/*" element={<AdminPage />} />

        <Route path="/login" element={<LoginPage />}></Route>

        {/* <Route path='/signup' element={<LoginPage/>}></Route> */}

        {/* <Route path="/projects" element={<Projects />}></Route> */}

        <Route path="/tasks" element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />
        <Route path="/projects" element={
            <PrivateRoute>
              <Projects />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
