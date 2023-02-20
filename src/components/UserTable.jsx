// Importing The Componenets-------------------------------------------------------->
import DeleteButton from "./DeleteButton";
// Importing The Edit Modal Compnenet ---------------------------------------------->
import EditModal from "./EditModal";







// Function For ManagerDetailsBox---------------------------------------------------->
function UserTable(props){

// Function To Check The Role of User So you can show The Delete Button ------------->
function roleCheckToShowDeleteButton(role){
  if(role==="Admin"){
    return <DeleteButton id={props.value.currentId}/>
   
  }else{
    return <p></p>
  }
}
    return(
        <>
        
           <div className="box3-notebox">
                <div className="textbox">
                  <p>{props.value.userName}</p>
                </div>
                <div className="emailbox">
                  <p>{props.value.emailAddress}</p>
                </div>
                <div className="typebox">
                  <p>{props.value.role}</p>
                </div>
                <div className="buttonbox">
                {roleCheckToShowDeleteButton(props.role)}
                </div>
                <div className="buttonbox">
                  <EditModal id={props.value.currentId} />
                </div>
              </div>
        </>
    )
};

// Exporting The ManagerDetailsBox----------------------------------------------------->
export default UserTable;