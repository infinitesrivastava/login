import React, { useState } from "react";
import './Login.css';
import user_icon from '../Assets/person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png';
import email_icon from '../Assets/mail_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png';
import password_icon from '../Assets/password_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png';
import phn_icon from '../Assets/tty_24dp_5F6368.png';

const LoginSignup =() => {
    const [action, setAction]= useState("Login");

    const [formData, setFormData]= useState({
        name: "",
        phone:"",
        email:"",
        lock:"",

    });

    const onChange=(e)=>{
        setFormData((prev)=>{
            let helper ={...prev};
            helper[`${e.target.id}`]=e.target.value;

            return helper;
        });
    };

    return(
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
         {action==="Login" ? <div></div> :<div className="input">
                <img src={user_icon} alt="" />
                <input type="text"  value={formData.name} onChange={onChange} placeholder="Name" id="name"/>

            </div> }
              {action==="Login" ? <div></div> : <div className="input">
                <img src={phn_icon} alt="" />
                <input type="text" value={formData.phone} onChange={onChange}  placeholder="Phone No." id="phone"/>
            </div>}


            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" value={formData.email} onChange={onChange} placeholder="Email Id" id="email"/>
                
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" value={formData.lock} onChange={onChange} placeholder="Password"  id="lock"/>
                
            </div>


        </div>
        {action==="Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
       
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
    )
}

export default LoginSignup;