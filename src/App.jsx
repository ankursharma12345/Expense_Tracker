import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp_Page from "./Modules/Authorizations/SignUp/SignUp_Page"
const LoginApp = lazy(() => import("./AppRoutes/Authorizations/Login"));

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginApp />} />
          <Route path="/signup" element={<SignUp_Page />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
