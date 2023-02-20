

// Importing The HOOKS ---------------------------------------------------------->
import { useSelector } from "react-redux";






// Function For Admin Table ------------------------------------------------------>
function EmployeeTable(props){
// Using The useSelector ------------------------------/
const store=useSelector((state)=>state.managementReducer);

    return(
        <>
        <hr id="notesseparater" />
      <h1>Your Details</h1>
          <div className="manager-box3">
          <div className="box3-notebox-employee">
                <div className="manager-textbox">
                  <p>Name: {store[0].dataArray.userName}</p>
                </div>
                <br />
                <div className="manager-emailbox">
                  <p>Email :{store[0].dataArray.emailAddress}</p>
                </div>
                <br />
                <div className="manager-emailbox">
                  <p>Role :{store[0].role}</p>
                </div>
                
              </div>
          </div>
        </>
    )
};


// Exporting The TABLE ------------------------------------------------------------>
export default EmployeeTable;