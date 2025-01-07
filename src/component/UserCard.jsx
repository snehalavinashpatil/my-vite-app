import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {removeFeeds } from "../utils/feedSlice";

const UserCard = ({user})=>{
    
  const dispatch = useDispatch();

    const {_id,fname,lname,photoUrl,age,gender,about,company,skills} = user;

    const handleRequest = async (status,_id)=>{
      try{
        const res = await axios.post(
          BASE_URL + "/request/send/" + status + "/" + _id,
          {},
          { withCredentials: true }
        );
        dispatch(removeFeeds(_id));
      }catch(err){
         
      }
    }
    
    return user && (
        <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{fname+" "+lname}</h2>
    <p>{about}</p>
    {age && gender && <p>Age:{age}{gender}</p>}
    <div className="card-actions justify-center m-4">
      <button className="btn btn-primary"  onClick={() => handleRequest("interested", _id)}>Accept</button>
      <button className="btn btn-secondary" onClick={() => handleRequest("ignored", _id)}>Ignore</button>
    </div>
  </div>
</div>
    );
}

export default UserCard;