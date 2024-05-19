import React from "react";  
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm.js";
import LoginForm from "./LoginForm.js";
import {FcGoogle} from "react-icons/fc";



const Template = ({title , desc1 , desc2 , image , formType , setIsLoggedIn}) => {
   // console.log(setIsLoggedIn, "Template");
    return (
        <div className="w-11/12 max-w-[1160px] flex py-12 mx-auto gap-x-12 gap-y-0 justify-between">
            <div className="w-11/12 max-w-[450px]">
                <h1 className="text-richblack-5 font-bold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-richblack-100">{desc1}</span> <br></br>
                    <span className="text-blue-100 italic">{desc2}</span>
                </p>
                {formType === "signup" ? 
                <SignupForm setIsLoggedIn={setIsLoggedIn} /> : 
                <LoginForm setIsLoggedIn={setIsLoggedIn} />}

                <div className="flex w-full items-center gap-x-2 my-4 ">
                    <div className="h-[1px] w-full bg-richblack-200"></div>
                    <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
                    <div className="h-[1px] w-full bg-richblack-200"></div>
                </div>
                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 
                border border-richblack-700 px-[12px] py-[8px] gap-x-4 mt-6 ">
                    <FcGoogle />   
                     <p>Sign Up With Google</p>
                </button>
            </div>

            <div className="relative  w-11/12 max-w-[450px] mt-10">
                <img src={frameImage} alt="Pattern" width={558} height={504} loading="lazy"
                  
                ></img>
                <img src={image} alt="FontImage" width={558} height={490} loading="lazy"
                      className="absolute -top-4 right-4"
                ></img>
                 
            </div>
        </div>
    )
}

export default Template;