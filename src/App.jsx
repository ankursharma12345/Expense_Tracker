import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
const Login = lazy(() => import("./AppRoutes/Authorizations/Login.routes"));
const Signup = lazy(() => import("./AppRoutes/Authorizations/Signup.routes"));

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
