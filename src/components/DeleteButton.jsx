// Importing The Actions ------------------------------------------------------------------------>
import { deleteUser,emptyStore } from "../actions/managementActions";
// Importing The UseCookies --------------------------------------------------------------------->
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";



// Function For DeleteButton ---------------------------------------------------------------------------------------------------->
function DeleteButton(props){
// Using useCookie ------------------------------------------------------------------------------->
const [cookie,setCookie,removeCookie]=useCookies(["loginCookie"]);
//Using UseNavigate ------------------------------------------------------------------------------>
const navigate=useNavigate();
//Using UseDispatch ------------------------------------------------------------------------------>
const dispatch=useDispatch();
// Function For Deleting The User----------------------------------------------------------------->
async function deleteFunction(currentId){
    const id=JSON.stringify({currentId:currentId});
    const response =await fetch("/managementapp/api/v1/admin/deletedatas",{
        method:"DELETE",
        headers:{
         "Content-type":"Application/json",
         "access-token":cookie.loginCookie
        },
        body:id
    });
    const responseData=await response.json();
    if(responseData.success===true){
        alert(responseData.msg)
        dispatch(deleteUser(currentId))
    }else if(responseData.status===401){
        removeCookie("loginCookie");
        navigate("/login");
        dispatch(emptyStore());
    }else if(responseData.success===false){
        alert(responseData.msg)
    }
}    
    return(
        <>
         <i onClick={()=>deleteFunction(props.id)} className="fa-solid fa-trash"  >
                    
                    </i>
        </>
    )
};


// Exporting The DeleteButton -------------------------------------------------------------------->
export default DeleteButton;