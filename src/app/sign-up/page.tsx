import { SignupLoginStructure, ToastMsg } from "@/components";
import { useState } from "react";

function SignUp() {


  return (
    <>

      <SignupLoginStructure
        title="Create an account"
        type="sign-up"
        submitBtnText="Create"
        linkText="Login"
      />
    </>
  );
}
export default SignUp;
