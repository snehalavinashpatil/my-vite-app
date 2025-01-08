import EditProfile from './component/EditProfile';
import { useSelector } from "react-redux";

const Profile = ()=>{
    const user = useSelector(store=>store.user);
    return user && (
        <div>
       <div>Profile Page</div>
        <EditProfile user={user}/>
        </div>
    )
    }
    export default Profile;