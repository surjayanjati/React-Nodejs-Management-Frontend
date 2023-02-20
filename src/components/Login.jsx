// Importing The Hooks--------------------------------------------------------------------------------------------->
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// Importing The Css  --------------------------------------------------------------------------------------------->
import "../public/css/form.css";
// Importing Actions From The Action Folder------------------------------------------------------------------------>
import { postValue } from "../actions/managementActions";





// Function For Login Component--------------------------------------------------->
function Login(){
// Use State For Storing The Form Data------------------------/
const [initialData,setData]=useState({
  email:"",
  password:""
});
// Use State For Storing The message -------------------------/
const[intialMsg,setMsg]=useState();

// Hooks For Navigating --------------------------------------/
const navigate=useNavigate();
// UseDispatch Hook ------------------------------------------/
const dispatch=useDispatch();
// Function For Form------------------------------------------/
async function loginFormSubmit(e){
    e.preventDefault();
    const loginData=JSON.stringify({emailAddress:initialData.email,password:initialData.password});
    const response=await fetch("/managementapp/api/v1/users/loginusers",{
      method:"POST",
      headers:{
        "Content-type":"Application/json"
      },
      body:loginData
    });
    const responseData=await response.json();
    console.log(responseData);
    if(responseData.status===200){
    alert(responseData.msg);
   
    dispatch(postValue({role:responseData.role,dataArray:responseData.userDetails}));
    navigate("/management");
    }else if(responseData.success===false){
      
       setMsg(responseData.msg)
    }
} 

// Function For Catching The Form Data -----------------------/
function inputEvent(e){
  // Object Destrucuring For Getting name and value-/
  const {name,value}=e.target;
  setData((preValue)=>{
    return{
      ...preValue,
      [name]:value
    }
  })
};
// Function For Checking The Server Msg-----------------------/
function checkServerMsg(){
  if(intialMsg!==undefined){
    return <p id="server-msg">{intialMsg}</p>
  }else{
    return <p id="server-msg"></p>
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
            <form onSubmit={loginFormSubmit}>
           
              <div className="form-element-box">
                <div className="input-box1">
                <i className="fa-solid fa-phone"></i>
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
               
                    name="password"  onChange={inputEvent}
                  />
                </div>
              </div>
              <div id="button-div">
                <button>Login</button>
              </div>
            </form>
          </div>
          <div id="box3">
            {checkServerMsg()}
            <br />
            <p>
              Don't Have an account?  
            </p>
            <p   onClick={()=>navigate("/")} >Signup..</p>
          </div>
        
        </div>
      </div>
        </>
    )
};

// Exporting The Login Component Function ----------------------------------------->
export default Login;