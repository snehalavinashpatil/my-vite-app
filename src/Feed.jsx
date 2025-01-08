import axios from "axios";
import { BASE_URL } from "./utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./component/userCard";

const Feed = () => {
    const feed = useSelector((store) => store?.feed); // Adjust path if necessary
    const dispatch = useDispatch();

    const getFeed = async () => {
        try {
            const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
            console.log(res?.data?.data); // Debug API response
            dispatch(addFeed(res?.data?.data || [])); // Dispatch action
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getFeed();
    }, []);

    if (!feed) return <div>Loading...</div>;

    if (feed.length <= 0)
        return <h1 className="flex justify-center my-10">No new users found!</h1>;

    return (
        <div className="flex justify-center my-10">
            <UserCard user={feed[0]} />
        </div>
    );
};

export default Feed;
