import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import { BASE_URL } from "./utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./utils/userSilce";
import {useEffect} from 'react';
const Body = ()=>{
const dispatch=useDispatch();
const navigate=useNavigate();
const userData = useSelector((store)=>store.user);
    const fetchUser = async ()=>{
       if(userData)return;
        try{
         const result = await axios.get(BASE_URL+"/profile/view" ,{ withCredentials: true });
         dispatch(addUser(result?.data));
        }catch(err){
            if(err.status === 401||400){
                navigate("/login");
            }
          console.error(err);
        }
    }

    useEffect(()=>{
            fetchUser();
        },[]);

return (
    <div>
    <NavBar/>
    <Outlet/>
    </div>
)
}
export default Body;