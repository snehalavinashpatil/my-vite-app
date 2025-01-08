import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSilce";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from './utils/constant';

const Login = ()=>{
  const dispatch = useDispatch();
    const [emailId,setEmailId]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState("");
    const navigate = useNavigate();

    const handleLogin = async() =>{
        try{
            const res = await axios.post(BASE_URL+'/login', { emailId, password }, { withCredentials: true });
            dispatch(addUser(res.data));
            return navigate("/feed");
        }catch(err){
          setError(err?.response?.data || 'Invalid Credentials');
        }
    }

return (
    <div className="flex justify-center my-10">
       <div className="card bg-base-100 w-96 shadow-xl">
       <div className="card-body">
       <h2 className="card-title">Login Page</h2>
       <div>
       <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Username</span>
  </div>
  <input type="text" placeholder="Type here" value={emailId} onChange={(e)=>setEmailId(e.target.value)} className="input input-bordered w-full max-w-xs" />
</label>
       </div>
       <div>
       <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Password</span>
  </div>
  <input type="text" placeholder="Type here" value={password} onChange={(e)=>setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
</label>
       </div>
       <p className="text-red-500">{error}</p>
       <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
  </div>
</div>
    </div>
)
}
export default Login;