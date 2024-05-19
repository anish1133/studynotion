import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";


const SignupForm = ({setIsLoggedIn}) => {

    const Navigate =useNavigate();
    
    const [formData,setFormData] = useState(
        {firstname:"",lastname:"",email:"",password:"", confirmpassword:""}
    );

    const [showPassword,setShowPassword]=useState(false)
    const [showCPassword,setShowCPassword]=useState(false)

    const [accountType, setAccountType]=useState("student")
    function changeHandler(event){
        setFormData( (prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }
    function submitHandler(e){
        e.preventDefault();
        if(formData.password != formData.confirmpassword){
            toast.error("Password do not match");
            return;
        }
        const accountData = {
            ...formData
        };
        setIsLoggedIn(true);
        toast.success("Account Created");

        const finalData = {
            ...accountData,
            accountType
        }
        console.log(finalData);
        Navigate("/dashboard");  
    }
    return (
       <div>
            <div className=" flex bg-richblack-800 py-1 gap-x-2 my-6 rounded-full max-w-max">
                <button  
                className={`${accountType === "student" 
                ?
                    "bg-richblack-900 text-richblack-5"
                :
                    "bg-transparent text-richblack-200"
                 } py-2 px-5 rounded-full transition-all duration-600` }
                onClick={()=> setAccountType("student")}
                >
                    Student
                </button>
                <button
                 className={`${accountType === "instructor" 
                ?
                    "bg-richblack-900 text-richblack-5"
                :
                    "bg-transparent text-richblack-200"
                 } py-2 px-5 rounded-full transition-all duration-600` }
                onClick={()=> setAccountType("instructor")}
                >
                    Instructor
                </button>
                
            </div>

            <form onSubmit={submitHandler}>
            {/* firstname and lastname */}
                <div className="flex gap-2">
                    <label className="w-full">
                        <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                        >First Name<sup className="text-pink-200 ml-1">*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstname"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstname}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                        />
                    </label>

                    <label className="w-full">
                        <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                        >Last Name<sup className="text-pink-200 ml-1">*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastname"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastname}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                        />
                    </label>
                </div>
            {/* Email Address */}
            <label className="w-full" >
                <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                >Email Address<sup className="text-pink-200 ml-1">*</sup></p>
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
            {/* Password */}
            <div className="flex gap-2">
                <label className="w-full relative">
                
                <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                >Create Password<sup className="text-pink-200 ml-1">*</sup></p>
                <input 
                required
                id="Password" type={showPassword ? ("text"):("password")}
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter password"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                ></input>
                <span onClick={()=> setShowPassword( (prev) => !prev)}
                  className="absolute right-3 top-[38px] cursor-pointer"
                > 
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }
                </span>
                </label>

                <label className="w-full relative">
                
                <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]" 
                >Confirm Password<sup className="text-pink-200 ml-1">*</sup></p>
                <input 
                required
                 type={showCPassword ? ("text"):("password")}
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={changeHandler}
                placeholder="Confirm password"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" 
                ></input>
                <span onClick={()=> setShowCPassword( (prev) => !prev)}
                  className="absolute right-3 top-[38px] cursor-pointer"
                > 
                        {showCPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }
                </span>
                </label>
            </div>

            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] w-full mt-4">
                Create Account  
            </button>
            
            </form>
       </div>
    )
}

export default SignupForm;