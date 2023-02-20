


let initialState=[];

export const managementReducer=(state=initialState,Action)=>{
    switch (Action.type) {
        case "POSTVALUE":
            
        const {postRole,postDataArray}=Action.payLoad;
        return[
            
            {
                role:postRole,
                dataArray:postDataArray
            }
        ]
        case "GETVALUE":
            
            let {role,dataArray}=Action.payLoad;
            return[
                
                {
                    role:role,
                    dataArray:dataArray
                }
            ]
            
          case "CREATEUSER":
            console.log("hi");
            const {createUserName,createEmailAddress,createRole,createCurrentId}=Action.payLoad;
            
            
            let newObj={userName:createUserName,emailAddress:createEmailAddress,role:createRole,currentId:createCurrentId};
            return [
                {
                    role:state[0].role,
                    dataArray:[
                        ...state[0].dataArray,
                         newObj
                    ]
                }
            ]
        
            case "DELETEUSER":
                const newArray=state[0].dataArray.filter((elem)=>elem.currentId!==Action.id);
                 console.log(newArray);
                 return[
                    {
                        role:state[0].role,
                        dataArray:newArray
                    }
                 ]
              case "EDITUSERWHENADMINOrManager":
                let dataAfterRemovingTheEditedOne=state[0].dataArray.filter((elem)=>elem.currentId!==Action.payLoad.currentId);
                dataAfterRemovingTheEditedOne.push(Action.payLoad);
                return[
                    {
                        role:state[0].role,
                        dataArray:dataAfterRemovingTheEditedOne
                    }
                ];
                case "EMPTYSTORE":
                    return [];
        default:
            return state;
            break;
    }
}