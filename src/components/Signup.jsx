// Importing The Hooks--------------------------------------------------------------------------------------------->
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// Importing The Css  --------------------------------------------------------------------------------------------->
import "../public/css/form.css"







// Function For Signup Component ------------------------------------------------------------------------------------>
function Signup(){
// Use State Hooks For Collecting Form Data ------------------/
const[initialData,setData]=useState({
    fname:"",
    email:"",
    password:""
})    
// Use State For Storing The messages ------------------------/
const [intialMsg,setMsg]=useState();
// Hooks For Navigating --------------------------------------/
const navigate=useNavigate();

// Function For Form------------------------------------------/
async function signUpFormSubmit(e){
    e.preventDefault();
    
    const data=JSON.stringify({userName:initialData.fname,userEmail:initialData.email,userPassword:initialData.password,role:"Admin"})
    console.log(data);
    const response=await fetch("/managementapp/api/v1/users/signupusers",{
        method:"POST",
        headers:{
            "Content-type":"Application/json"
        },
        body:data 
    })
    const responseData=await response.json();
    if(responseData.status===200){
      alert("Signup Successfull");
      navigate("/login");
    }else if(responseData.success===false){
      setMsg(responseData.msg)
    }
}
// Function For Catching The inputEvent-----------------------/
function inputEvent(e){
       // object destructuring :
       const {name,value}=e.target;
       setData((preValue)=>{
        return {
            ...preValue,
            [name]:value
        }
       })
}
// Function For Server SMS CHECK ---------------------------/
function checkServerMsg(){
  if(intialMsg!==undefined){
    return   <p id="server-msg" >{intialMsg}</p>
  }else{
    return <p id="server-msg" ></p>
  }
}
    return(
        <>
         <div className="whole-container">
        <div className="main-box">
          <div id="box1">
            <div id="circle-box">
              <i className="fa-solid fa-book"></i>
            </div>
            <h2>Management</h2>
          </div>
          <div id="box2">
            <form onSubmit={signUpFormSubmit}>
              <div className="form-element-box">
                <div className="input-box1">
                <i className="fa-solid fa-person"></i>
                </div>
                <hr />
                <div className="input-box2">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                  
                    name="fname" onChange={inputEvent}
                  />
                </div>
              </div>
              <div className="form-element-box">
                <div className="input-box1">
                <i class="fa-solid fa-envelope"></i>
                </div>
                <hr />
                <div className="input-box2">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                  
                    name="email" onChange={inputEvent}
                  />
                </div>
              </div>
              <div className="form-element-box">
                <div className="input-box1">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <hr />
                <div className="input-box2">
                  <input
                    type="password"
                    placeholder="Enter Your Password"
               
                    name="password" onChange={inputEvent}
                  />
                </div>
              </div>
              <div id="button-div">
                <button >Sign Up</button>
                
              
              </div>
            </form>
            
          </div>

          <div id="box3">
            {checkServerMsg()}
            
            <br />
            <p>
              Already Have an account?  
            </p>
            <p id="loginButton-signupPage"  onClick={()=>navigate("/login")} >Login..</p>
          </div>
        </div>
      </div>
        </>
    )
};

// Exporting The Component Function------------------------------------->
export default Signup;