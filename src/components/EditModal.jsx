/// Importing The Hooks-------------------------------->
import { useState } from "react";
import useCookies from "react-cookie/cjs/useCookies";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
/// Importing The Css File----------------------------->
import "../public/css/modal.css";
/// Importing Actions From Action File----------------->
import { editUser,emptyStore } from "../actions/managementActions";





// Function For Edit Modal ----------------------------------------------------------------------------->
function EditModal(props){
      // Use State Hooks For Storing The Notes Value---------->
  const [initialData, setData] = useState();
  // Using UseNavigate For Storing The Function------------>
  const navigate=useNavigate();
  // Dispatch Function ------------------------------------>
  const dispatch=useDispatch();
  // Using UseState Hooks For Modal
  const [showModal, setShowModal] = useState(false);
  // Using The UseSelector --------------------------------->
  const store=useSelector((state)=>state.managementReducer);
  
  /// Array destrcuring For Storing The Cookies Value
  const [cookies, setCookies, removeCookie] = useCookies(["loginCookie"]);
  // Form Event --------------------------------------->
  function formEvent(e) {
    e.preventDefault();
  }
  // Variables For Geeting The Form Value ------------------>
  let userName="";
  let emailAddress="";
  let password="";
  let role="";
  // Function For Storing The Value Input Change------------>
  function textEvent(e) {
    if(e.target.name==="userName"){
        userName=e.target.value;
        
    }else if(e.target.name==="emailAddress"){
        emailAddress=e.target.value;
    }else if(e.target.name==="password"){
     password=e.target.value
    }else if(e.target.name==="role"){
      role=e.target.value
    }
  
  }

// Async Function For Updating The Notes----------------------------------------->
async function updateFunction(userId){
       const newObj=({userName:userName,emailAddress:emailAddress,password:password,role:role,currentId:userId.currentId});
       const response=await fetch("/managementapp/api/v1/admin/updatedatas",{
        method:"PUT",
        headers:{
            "Content-type":"Application/json",
            "access-token":cookies.loginCookie
        },
        body:JSON.stringify(newObj) 
       });
       const responseData=await response.json();
       
       if(responseData.success===true){
        alert(responseData.msg);
        setShowModal(false);
        dispatch(editUser(newObj))
       }else if(responseData.status===401){
        removeCookie("LoginCookie");
        navigate("/login");
        dispatch(emptyStore());
       }else if(responseData.success===false){
        alert(responseData.msg);
       }
}  
// Function For Checking The Role Whether it is Admin or Manager Show he can't change the role value--/
function roleCheckForAdminOrManager(){
  if(store[0].role==="Admin"){
    return   <input
    type="text"
    placeholder="Enter New Role"
    onChange={textEvent}
    name="role"
  />
  }else{
    return <p></p>
  }
}
  // Function Returning The Modal Component----------->
  const MyModal = (userId) => {
    return (
      <>
        <div className="wrapper">
          <div className="modalcontainer">
            <div className="modalcontainer-box">
              <h4>UPDATE YOUR NOTE</h4>
              <i
                className="fa-solid fa-xmark"
                onClick={() => setShowModal(false)}
              ></i>
            </div>
            <form onSubmit={formEvent} className="update-form">
              <div className="modalcontainer-box button-box">
                <input
                  type="text"
                  placeholder="Enter New Name"
                  onChange={textEvent}
                  name="userName"
                />
                
                 <input
                  type="text"
                  placeholder="Enter New Email"
                  onChange={textEvent}
                  name="emailAddress"
                />
                 <input
                  type="text"
                  placeholder="Enter New Password"
                  onChange={textEvent}
                  name="password"
                />
                {roleCheckForAdminOrManager()}
               
              </div>
              <div className="modalcontainer-box button-box">
                <button onClick={()=>updateFunction(userId)} >Update</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => setShowModal(true)}
      ></i>
      {showModal && <MyModal currentId={props.id} />}
    </>
  );
};

// Exporting The Edit Modal Function ------------------------------------------------------------->
export default EditModal;