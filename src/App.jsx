import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from "./components/common/loading/Loading";
import Auth from "./layouts/auth/auth/Auth";
import Dashboard from "./layouts/dashboard/dashboard/Dashboard";

const Login = React.lazy(() => import("./layouts/auth/pages/login/Login"));
const SignUp = React.lazy(() => import("./layouts/auth/pages/signup/SignUp"));
const Charts = React.lazy(() =>
  import("./layouts/dashboard/pages/charts/Charts")
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route index element={<Navigate to="/dashboard/charts" replace/>}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}>
          <Route exact index path="charts" element={<Charts />} />
        </Route>
        <Route exact path="auth" element={<Auth />}>
          <Route exact path="login" element={<Login />} />
          <Route exact index path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
