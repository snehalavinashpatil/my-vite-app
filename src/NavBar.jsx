import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import {BASE_URL} from './utils/constant';
import { removeUser } from './utils/userSilce';
import appStore from './utils/appStore';

const NavBar = ()=>{
  const user = useSelector((store)=>store.user);
  const url = user?.photoUrl;
  const navigate=useNavigate();
  //console.log(user,'user');

  const handleLogout = async ()=>{
    try{
      await axios.post(BASE_URL+'/logout', {}, { withCredentials: true });
      console.log('logout');
      appStore.dispatch(removeUser());
      return navigate("/login");
    }catch(err){
        console.log(err);
    }
  }

    return ( <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">ChatApp</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={url} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">welcome {user?.fname}</span>
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>)
}

export default NavBar;