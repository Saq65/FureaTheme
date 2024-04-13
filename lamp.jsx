import Sofaa1 from "./Images/sofaa1.webp";
import Sofaa2 from "./Images/sofaa2.webp";
import Sofaa3 from "./Images/sofaa3.webp";
import Sofaa4 from "./Images/sofaa4.webp";
import Sofaa5 from "./Images/sofaa5.webp";
import Sofaa6 from "./Images/sofaa6.webp";
import Sofaa7 from "./Images/sofaa7.webp";
import Sofaa8 from "./Images/sofaa8.webp";
import Sofaa9 from "./Images/sofaa9.webp";
import Sofaa10 from "./Images/sofaa10.webp";


export function Lamp(){
    return(
        <>
        <div style={{zIndex:'-1'}} className="container-fluid d-flex justify-content-center flex-wrap m-2">
            <div className="first">
                <img src={Sofaa10} className="img-fluid m-2" alt="sofa" />
            </div>
            <div className="first">
            <img src={Sofaa3} className="img-fluid m-2" alt="sofa" />
            </div> 
            <div className="first">
            <img src={Sofaa5} className="img-fluid m-2" alt="sofa" />
            </div>
             <div className="first">
             <img src={Sofaa4} className="img-fluid m-2" alt="sofa" />
            </div>
            <div className="five">
            <img src={Sofaa2} className="img-fluid m-2" alt="sofa" />
            </div>
            <div className="first">
            <img src={Sofaa6} className="img-fluid m-2" alt="sofa" />
            </div>
            <div className="first">
            <img src={Sofaa7} className="img-fluid m-2" alt="sofa" />
            </div> 
            <div className="first">
            <img src={Sofaa8} className="img-fluid m-2" alt="sofa" />
            </div>
             <div className="first">
             <img src={Sofaa9} className="img-fluid m-2" alt="sofa" />
            </div>
            <div className="five">
            <img src={Sofaa1} className="img-fluid m-2" alt="sofa" />
            </div>
        </div>
        </>
    )
}