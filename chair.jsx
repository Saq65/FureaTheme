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

export function ChairFun(){
    return(
        <>
        
        <div  className="container-fluid d-flex justify-content-center flex-wrap m-2">
            <div className="first">
                <img src={Chair1} className="img-fluid m-2" alt="chair" />
                <div style={{borderTop:'none'}} className="text-center card mb-2">
                    <p>Fashion Plastic Chair <br />
                    <span style={{color:'#F51C1C'}}>$150.00</span>  <span style={{textDecoration:'line-through'}}>$200.00</span></p>
                    <button style={{backgroundColor:'#F51C1C'}} className="btn text-white">Add to cart</button>
                </div>
            </div>
            <div className="first">
                <img src={Chair2} className="img-fluid m-2" alt="chair" />
                <div style={{borderTop:'none',zIndex:""}} className="text-center card mb-2">
                    <p>Modern Swivel Chair <br />
                    <span style={{color:'#F51C1C'}}>$160.00</span>  <span style={{textDecoration:'line-through'}}>$210.00</span></p>
                    <button style={{backgroundColor:'#F51C1C'}} className="btn text-white">Add to cart</button>
                </div>
            </div> 
            <div className="first">
                <img src={Chair3} className="img-fluid m-2" alt="chair" />
                <div style={{borderTop:'none',zIndex:""}} className="text-center card mb-2">
                    <p>Design Living Sofa <br />
                    <span style={{color:'#F51C1C'}}>$155.00</span>  <span style={{textDecoration:'line-through'}}>$255.00</span>
                    </p>
                    <button style={{backgroundColor:'#F51C1C'}} className="btn text-white">Add to cart</button>
                </div>
            </div>
             <div className="first">
                <img src={Chair4} className="img-fluid m-2" alt="chair" />
                <div style={{borderTop:'none',zIndex:""}} className="text-center card mb-2">
                    <p>Plastic Chair Wooden <br />
                    <span style={{color:'#F51C1C'}}>$190.00</span>  <span style={{textDecoration:'line-through'}}>$200.00</span>
                    </p>
                    <button style={{backgroundColor:'#F51C1C'}} className="btn text-white">Add to cart</button>
                </div>
            </div>
            <div className="five">
                <img src={Chair5} alt="chair" className="img-fluid m-2" />
                <div style={{borderTop:'none',zIndex:""}} className="text-center card mb-2">
                    <p>Folding Tables Chairs <br />
                    <span style={{color:'#F51C1C'}}>$190.00</span>  <span style={{textDecoration:'line-through'}}>$175.00</span>
                    </p>
                    <button style={{backgroundColor:'#F51C1C'}} className="btn text-white">Add to cart</button>
                </div>
            </div>
            <div className="first">
                <img src={Chair6} className="img-fluid m-2" alt="chair" />
                <div style={{borderTop:'none',zIndex:""}} className="text-center card mb-2">
                    <p>Modern Fabric Chairs <br />
                    <span style={{color:'#F51C1C'}}>$165.00</span>  <span style={{textDecoration:'line-through'}}>$210.00</span>
                    </p>
                    <button style={{backgroundColor:'#F51C1C'}} className="btn text-white">Add to cart</button>
                </div>
            </div>
            <div className="first">
                <img src={Chair7} className="img-fluid m-2" alt="chair" />
                <div style={{borderTop:'none',zIndex:""}} className="text-center card mb-2">
                    <p>Globe Electric Lamp <br />
                    <span style={{color:'#F51C1C'}}>$145.00</span>  <span style={{textDecoration:'line-through'}}>$185.00</span>
                    </p>
                    <button style={{backgroundColor:'#F51C1C'}} className="btn text-white">Add to cart</button>

                </div>
            </div> 
            <div className="first">
                <img src={Chair8} className="img-fluid m-2" alt="chair" />
                <div style={{borderTop:'none',zIndex:""}} className="text-center card mb-2">
                    <p>Fahion Plastic Chair <br />
                    <span style={{color:'#F51C1C'}}>$150.00</span>  <span style={{textDecoration:'line-through'}}>$200.00</span>
                    </p>
                    <button style={{backgroundColor:'#F51C1C'}} className="btn text-white">Add to cart</button>
                </div>
            </div>
             <div className="first">
                <img src={Chair9} className="img-fluid m-2" alt="chair" />
                <div style={{borderTop:'none',zIndex:""}} className="text-center card mb-2">
                    <p>Design Room Sofa <br />
                    <span style={{color:'#F51C1C'}}>$155.00</span>  <span style={{textDecoration:'line-through'}}>$215.00</span>
                    </p>
                    <button style={{backgroundColor:'#F51C1C'}} className="btn text-white">Add to cart</button>
                </div>
            </div>
            <div className="five">
                <img src={Chair10} alt="chair" className="img-fluid m-2" />
                <div style={{borderTop:'none',zIndex:""}} className="text-center card mb-2">
                    <p>Fashion Plastic Chairs <br />
                    <span style={{color:'#F51C1C'}}>$150.00</span>  <span style={{textDecoration:'line-through'}}>$200.00</span>
                    </p>
                    <button style={{backgroundColor:'#F51C1C'}} className="btn text-white">Add to cart</button>
                </div>
            </div>
        </div>
        </>
    )
}