import React,{useState , useEffect} from 'react'
import './Login.css'

function Login({setProgress}) {
    const [action, setAction] = useState("Sign Up");

    
  useEffect(() => {
    setProgress(50);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, [setProgress]);
    return (
        <div className='login'>
            <div className="container   p-5 d-flex-column">
                <div className='row'>
                    <div className='col-lg-3 col-md-2 col-sm-12'></div>
                    <div className='col-lg-6 col-md-8 col-sm-12'  id='suc'>

                    <div className="header mb-4 pt-5">
                    <div className="text fs-2 fw-bold text-center">{action}</div>
                </div>
                <div className="inputs mb- p-5 ">
                    {action === "Login" ? <div></div> : <div className="input d-flex mb-4">
                        <i className="fa fa-user fs-4 mt-2 mx-2"></i>
                        <input type="text" className='form-control border-dark py-2' placeholder='Name' required/>
                    </div>}
                    
                    <div className="input d-flex  mb-4">
                        <i className="fa fa-envelope fs-5 mt-2 mx-2"></i>
                        <input type="email" className="form-control border-dark" placeholder="Email ID" required/>
                    </div>
                    <div className="input d-flex ">
                        <i className="fa fa-lock fs-4 mt-2 mx-2"></i>
                        <input type="password" className='form-control border-dark' placeholder='Password' required/>
                    </div>
                </div>
                {action === "Sign Up" ? <div></div> : <div className="forget-password mb-4 mx-5">Forget Password <span className='text-primary '> Click Here!</span></div>}
                
                <div className="sub-container d-flex justify-content-evenly p-5">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() =>{ setAction("Sign Up")}}>Sign Up</div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() =>{ setAction("Login")}}>Login</div>   
                        </div>
                    </div>
                    
                   
                </div>

                    </div>
                    <div className='col-lg-3 col-md-2 col-sm-12'></div>
                </div>
            
            </div>
        </div>
    )
}

export default Login