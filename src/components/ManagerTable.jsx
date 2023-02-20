// Importing The Componenets----------------------------------------------------->
import UserTable from "./UserTable";
// Importing The Hooks ---------------------------------------------------------->
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";







// Function For Admin Table ------------------------------------------------------>
function ManagerTable(){
// Storing The Uselecetor Value Inside Variable-----------/
const store=useSelector((state)=>state.managementReducer);
// Using useNavigate -------------------------------------/
const navigate=useNavigate();

// Function To Check The Details of Store-----------------/
function checkingDetails(){
    if(store[0].dataArray.length!==0){
     let array=store[0].dataArray;
     return array.map((elem,index)=>{
        return <UserTable value={elem} key={index} role={store[0].role} />
     })
    }else{
        // In The Case No Data is available Yet
        return <h2>No User Yet</h2>
    }
}
    return(
        <>
      <hr id="notesseparater" />
      <h1>All Users</h1>
          <div className="manager-box3">
         {checkingDetails()}
          </div>
        </>
    )
};


// Exporting The TABLE ------------------------------------------------------------>
export default ManagerTable;