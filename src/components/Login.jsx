import { useState } from "react";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [emailId, setEmailId] = useState("sam@gmail.com"); 
    const [password, setPassword] = useState("Satyam@123");
    

    const handleLogin = async () => {
        
        try {
      const res = await axios.post(BASE_URL + "/login", {
        emailId,
        password,
      },{withCredentials:true}
      );
      console.log(res);
      dispatch(addUser(res.data));
      return navigate("/");
    }catch(err){
        console.error(err);
    }

    }


  return (
    <div className="flex justify-center my-10 ">
        <div className="card bg-base-200 w-96 shadow-sm">
        <div className="card-body">
            <h2 className="card-title justify-center">Login!</h2>
           <div>
                <label className="form-control w-full max-w-xs py-8 my-4">
                    <div className="label my-0.5">
                        <span className="lable-text my-2"> Email ID</span>
                             
                    </div>

                    <input type="email"    /*Binding State variable to UI component*/
                    value ={emailId}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e)=>setEmailId(e.target.value)}></input>    
                   
                </label>

                <label className="form-control w-full max-w-xs py-8 my-4">
                    <div className="label my-0.5 ">
                        <span className="lable-text my-2"> Password  </span>
                             
                    </div>

                    <input type="email" 
                    value={password}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e)=>setPassword(e.target.value)}></input>  
                    
                   
                </label>
           </div>
           
            <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login;