// Action For Get Request On The Management Page ---------------------------------->
export const getValue=(data)=>{
    
    return{
        type:"GETVALUE",
        payLoad:{
            role:data.role,
            dataArray:data.dataArray
        }
    }
}
// Action For LOGIN Page Post Request ----------------------------------------------->
export const postValue=(data)=>{
    
    return{
        type:"POSTVALUE",
        payLoad:{
            postRole:data.role,
            postDataArray:data.dataArray
        }
    }
}

// Action Page For Creating New User In The Case Of Admin --------------------------->
export const createUser=(data)=>{
    
    return {
        type:"CREATEUSER",
        payLoad:{
           createUserName:data.userName,
           createEmailAddress:data.emailAddress,
           createRole:data.role,
           createCurrentId:data.currentId




        }
    }
};



// Action Page For Deleting User In The Case Of Admin --------------------------->
export const deleteUser=(currentId)=>{
    console.log(currentId);
    return{
        type:"DELETEUSER",
        id:currentId
    }
};



// Action Page For Editing User In The Case Of Admin --------------------------->
export const editUser=(newObj)=>{
   
    // This is The Case Where Admin/ Manager is doing the Editing-/
    
    return{
        type:"EDITUSERWHENADMINOrManager",
        payLoad:newObj,
    }
  
  
    
};

// Action In The Case When user is leaving and need to empty the Store------------->
export const emptyStore=()=>{
    return{
        type:"EMPTYSTORE"
    }
}