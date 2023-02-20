// Importing The Css ----------------------------------------------------------------->
import "../public/css/waitpage.css";






// Function to show The Page When Data is Getting Fetched----------------------------->
function DataWaitPage(){
// Function For Showing The Loading -----------------------------/
function showLoading(){
    setInterval(() => {
        return <p>Loading...</p>
    },1000);
}
    return(
        <>
         <div className="waitingbox">
            
                <p id="text">Wait, Your Data is Getting Fetched</p>
                 {showLoading()}
         </div>
        </>
    )
};


// Exporting The Componenet----------------------------------------------------------->
export default DataWaitPage;