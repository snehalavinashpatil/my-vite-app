import { useEffect } from "react";
import axios from "axios";

import { BASE_URL } from "../utils/constant";
import { useDispatch,useSelector } from "react-redux";
import {addConnection} from "../utils/connectionSlice";

const Connections =()=>{
    const dispatch = useDispatch();
    const connections = useSelector(store => store?.connection);
    const fetchConnections = async ()=>{
        try{
           const res = await axios.get(`${BASE_URL}/user/connections`, { withCredentials: true });
            console.log('Connections',res?.data);
            const connections = Array.isArray(res?.data) ? res.data : [res.data];
           dispatch(addConnection(connections));
            //return navigate("/login");
          }catch(err){
              console.log(err);
          }
    }

    useEffect(()=>{
        fetchConnections()
    },[]);

    console.log(connections,'connections');
   
    if (!connections || !Array.isArray(connections)) {
        return <div>No connections available.</div>;
      }      
      

      return (
        <div className="text-center my-10">
          <h1 className="text-bold text-white text-3xl">Connections</h1>
    
          {connections.map((connection,index) => {
            const {  fname,lname ,photoUrl, age, gender, about, skills } =
              connection.data[0];
    console.log(fname,lname ,photoUrl, age, gender, about, skills);
            return (
              <div
                key={index}
                className=" flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
              >
                <div>
                  <img
                    alt="photo"
                    className="w-20 h-20 rounded-full object-cover"
                    src={photoUrl}
                  />
                </div>
                <div className="text-left mx-4 ">
                  <h2 className="font-bold text-xl">
                    {fname + " " + lname}
                  </h2>
                  {age && gender && <p>{age + ", " + gender}</p>}
                  <p>{about}</p>
                  <p>{skills}</p>
                </div>
              </div>
            );
                            
        })}
        
        </div>
       
    )
}

export default Connections;