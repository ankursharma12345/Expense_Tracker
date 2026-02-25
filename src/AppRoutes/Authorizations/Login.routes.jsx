import { lazy, Suspense } from "react";
const LoginPage = lazy(() =>
  import("../../Modules/Authorizations/Login/LoginFormHandler")
);

const Login = () => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <LoginPage />
    </Suspense>
  );
};

export default Login;
