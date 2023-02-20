// Importing The Componenets----------------------------------------------------->
import UserTable from "./UserTable";
import CurdFormBox from "./CurdFormBox";
// Importing The HOOKS ---------------------------------------------------------->
import { useSelector } from "react-redux";


// Function For Admin Table ------------------------------------------------------>
function AdminTable() {
 // useSelector Hook -------------------------------------------------------------->
 let adminData = useSelector((state) => state.managementReducer);
 

  // Function For Checking The User------------------------------------------------->
  function usersCheck() {
    if (adminData[0].dataArray.length !== 0) {
      let array = adminData[0].dataArray;
      return array.map((elem, index) => {
        
        return <UserTable value={elem} key={index} role={adminData[0].role} />;
      });
    } else {
      return <h4>No Users Yet</h4>;
    }
  }
 
  return (
    <>
      <CurdFormBox/>
      <hr id="notesseparater" />
      <h2>Your User Details</h2>
      <div className="box3">{usersCheck()}</div>
    </>
  );
}

// Exporting The TABLE ------------------------------------------------------------>
export default AdminTable;
