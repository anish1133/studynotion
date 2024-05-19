import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import toast from "react-hot-toast";


const LoginForm = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;
       
        
       const Navigate = useNavigate();

    const [formData, setFormData]=useState({
        email:"",password:"",
    });

    const[showPassword,setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData( (prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }));
    }

    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Success");
        console.log(formData);
        Navigate("/dashboard");
    }

    return (
        
            <form onSubmit={submitHandler} 
            className="flex flex-col w-full gap-y-4 mt-6"
            >
              <label className ="w-full">
                <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address
                    <sup className="text-pink-200 ml-1">*</sup>
                </p>
                <input 
                    required
                    id="Email" type="email" 
                    placeholder="Enter email address"
                    value={formData.email}    
                    onChange={changeHandler}
                    name="email"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                ></input>
            </label>
              
                <label className="w-full relative">
                
                    <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password<sup className="text-pink-200 ml-1">*</sup></p>
                    <input 
                    required
                    id="Password" type={showPassword ? ("text"):("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter password"
                    name="password"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    ></input>
                    
                    <span onClick={()=> setShowPassword( (prev) => !prev)}
                    className="absolute right-3 top-[38px] cursor-pointer"
                    > 
                        {showPassword ? 
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'  />) : 
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }
                    </span>

                    <Link to="#">
                        <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                            Forgot Password?
                        </p>
                    </Link>
                </label>

                <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-3">
                    Sign In
                </button>

            </form>
    )   
}

export default LoginForm;