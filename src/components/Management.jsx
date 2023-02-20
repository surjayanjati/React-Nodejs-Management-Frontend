// Importing The Hooks---------------------------------------------------------------------->
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
// Importing The Actions From The Action Folder--------------------------------------------->
import { getValue,emptyStore } from "../actions/managementActions";
// Importing The Css From The Src Folder---------------------------------------------------->
import "../public/css/management.css";
// Importing The Components----------------------------------------------------------------->
import DataWaitPage from "./DataWaitPage";
import LogoutButton from "./LogoutButton";
import AdminTable from "./AdminTable";
import ManagerTable from "./ManagerTable";
import EmployeeTable from "./EmployeeTable";

// Functionn For Management------------------------------------------------------------------------------------------->
function Management() {
  // UseState For Storing The Role Value------------------------------------------------------->
  const [intialRoleValue, setRoleValue] = useState();
  // UseCookie For Getting The Cookie From The Browser----------------------------------------->
  const [cookie, setCookie, removeCookie] = useCookies(["loginCookie"]);
  // Use Dispatch Function -------------------------------------------------------------------->
  const dispatch = useDispatch();

 
  const navigate = useNavigate();
  // Function For Getting The Users using Fetch Method ---------------------------------------->
  async function getUsers() {
    const response = await fetch("/managementapp/api/v1/admin/readdatas", {
      method: "GET",
      headers: {
        "Content-type": "appplication/json",
        "access-token": cookie.loginCookie,
      },
    });
    const responseData = await response.json();
    if (responseData.status === 201) {
      setRoleValue(responseData.role);
      dispatch(
        getValue({ role: responseData.role, dataArray: responseData.data })
      );
    } else if (responseData.success === false) {
      dispatch(emptyStore());
      navigate("/login");
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  // Function To Check The Data -----------------------------/
  function checkData() {
    if (intialRoleValue !== undefined) {
      if(intialRoleValue==="Admin"){
        return <AdminTable  />;

      }else if(intialRoleValue==="manager"){
        return <ManagerTable />;
      }else if(intialRoleValue==="employee"){
        return <EmployeeTable/>;
      }
   
    } else {
      return <DataWaitPage/>;
    }
  }
  // Function To Check The role -----------------------------/
  function roleCheck() {
    if (intialRoleValue !== undefined) {
      return <h2>Welcome {intialRoleValue}</h2>;
    } else {
      return <h2>Management</h2>;
    }
  }
  return (
    <>
      <div className="whole-containeri">
        <div className="main-boxi">
          <div id="box1i">
            <div className="box1-firstboxi">
              <div id="circle-boxi">
                <i className="fa-solid fa-book"></i>
              </div>
              {roleCheck()}
            </div>
            <div className="box1-firstboxi">
              <LogoutButton />
            </div>
          </div>
          {checkData()}
         
        </div>
      </div>
    </>
  );
}

// Exporting The Management Function ------------------------------------------------>
export default Management;
