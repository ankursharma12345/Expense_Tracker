import { lazy, Suspense } from "react";
const SignupPage = lazy(() =>
  import("../../Modules/Authorizations/SignUp/SignupFormHandler")
);

const Signup = () => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <SignupPage />
    </Suspense>
  );
};

export default Signup;
