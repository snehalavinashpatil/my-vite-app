import axios from "axios";
import { BASE_URL } from "./utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./component/userCard";

const Feed = ()=>{
   const feed = useSelector(store => store?.feed);
    console.log(feed,'feed');
    const dispatch=useDispatch();
    const getFeed = async ()=>{
       // if(feed) return;
        try{
            const res = await axios.get(BASE_URL+"/feed",{ withCredentials: true });
            console.log(res,'res');
            dispatch(addFeed(res?.data?.data));
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getFeed();
    },[]);

    if (!feed) return;

    if (feed.length <= 0)
        return <h1 className="flex justify-center my-10">No new users founds!</h1>;

console.log(feed[0],'feed[0]');
    return feed && (
        <div className="flex justify-center my-10">
             <UserCard user={feed[0]}/>
        </div>
    )
    }
    export default Feed;