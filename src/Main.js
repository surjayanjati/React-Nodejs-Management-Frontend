// Importing The Pakages -------------------------------------------------------->
import { Routes,Route } from "react-router-dom";
// Importing The Components ----------------------------------------------------->
import Signup from "./components/Signup";
import Login from "./components/Login";
import Management from "./components/Management";




// Function For Main ------------------------------------------------------------>
function Main(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/management" element={<Management/>}/>
            
        </Routes>
        </>
    )
};

// Exporting The Main Function--------------------------------------------------->
export default Main;