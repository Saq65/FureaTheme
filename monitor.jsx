import Chair1 from "./Images/chair1.webp";
import Chair2 from "./Images/chair2.webp";
import Chair3 from "./Images/chair3.webp";
import Chair4 from "./Images/chair4.webp";
import Chair5 from "./Images/chair5.webp";
import Chair6 from "./Images/chair6.webp";
import Chair7 from "./Images/chair7.webp";
import Chair8 from "./Images/chair8.webp";
import Chair9 from "./Images/chair9.webp";
import Chair10 from "./Images/chair10.webp";

export function MonitorFun(){
    return(
        <>
        <div style={{zIndex:'-1'}} className="container-fluid d-flex justify-content-center flex-wrap m-2">
            <div className="first">
                <img src={Chair7} className="img-fluid m-2" alt="chair" />
            </div>
            <div className="first">
                <img src={Chair6} className="img-fluid m-2" alt="chair" />
            </div> 
            <div className="first">
                <img src={Chair5} className="img-fluid m-2" alt="chair" />
            </div>
             <div className="first">
                <img src={Chair4} className="img-fluid m-2" alt="chair" />
            </div>
            <div className="five">
                <img src={Chair3} alt="chair" className="img-fluid m-2" />
            </div>
            <div className="first">
                <img src={Chair2} className="img-fluid m-2" alt="chair" />
            </div>
            <div className="first">
                <img src={Chair1} className="img-fluid m-2" alt="chair" />
            </div> 
            <div className="first">
                <img src={Chair8} className="img-fluid m-2" alt="chair" />
            </div>
             <div className="first">
                <img src={Chair9} className="img-fluid m-2" alt="chair" />
            </div>
            <div className="five">
                <img src={Chair10} alt="chair" className="img-fluid m-2" />
            </div>
        </div>
        </>
    )
}