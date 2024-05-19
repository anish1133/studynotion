import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
  //  console.log(setIsLoggedIn ,"Login");
    return (
        <Template
            title="Welcome Back"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Educstion to future-proof your career."
            image={loginImg}
            formType="login"
            setIsLoggedIn={setIsLoggedIn}
        />
    );
}

export default Login;   