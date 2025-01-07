import { useState } from "react";
//import UserCard from './UserCard';
import axios from "axios";
import {BASE_URL} from '../utils/constant';
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSilce"; 

const EditProfile = ({user})=>{
    
     const [fname,setfname]=useState(user.fname);
     const [lname,setlname]=useState(user.lname);
     const [gender,setGender]=useState(user.gender);
     const [about,setAbout]=useState(user.about);
     const [company,setCompany]=useState(user.company);
     const [skills,setSkills]=useState(user.skills);
     const [photoUrl,setPhotoUrl]=useState(user.photoUrl);
     const [error,setErrors]=useState(user.photoUrl);
     const [showToast, setShowToast] = useState(false);
     const dispatch = useDispatch();

    const saveProfile = async()=>{
        setErrors("");
        try{
            const res= await axios.patch(BASE_URL+'/profile/edit', { fname,lname,gender,about,company,skills,photoUrl}, { withCredentials: true });
            useDispatch(addUser(res?.data));
            setShowToast(true);
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
        }catch(err){
            //setErrors(err.response.data);
        }
    }

    return user && (
        <div className="flex justify-center my-5">
    <div className="flex justify-center mx-10">
        <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
        <h2 className="card-title">Edit Page</h2>
        <div>
        <label className="form-control w-full max-w-xs">
   <div className="label">
     <span className="label-text">First Name</span>
   </div>
   <input type="text" placeholder="Type here" value={fname} onChange={(e)=>setfname(e.target.value)} className="input input-bordered w-full max-w-xs" />
 </label>
        </div>
        <div>
        <label className="form-control w-full max-w-xs">
   <div className="label">
     <span className="label-text">Last Name</span>
   </div>
   <input type="text" placeholder="Type here" value={lname} onChange={(e)=>setlname(e.target.value)} className="input input-bordered w-full max-w-xs" />
 </label>
        </div>

        <div>
        <label className="form-control w-full max-w-xs">
   <div className="label">
     <span className="label-text">Gender</span>
   </div>
   <input type="text" placeholder="Type here" value={gender} onChange={(e)=>setGender(e.target.value)} className="input input-bordered w-full max-w-xs" />
 </label>
        </div>

        <div>
        <label className="form-control w-full max-w-xs">
   <div className="label">
     <span className="label-text">about</span>
   </div>
   <input type="text" placeholder="Type here" value={about} onChange={(e)=>setAbout(e.target.value)} className="input input-bordered w-full max-w-xs" />
 </label>
        </div>

        <div>
        <label className="form-control w-full max-w-xs">
   <div className="label">
     <span className="label-text">company</span>
   </div>
   <input type="text" placeholder="Type here" value={company} onChange={(e)=>setCompany(e.target.value)} className="input input-bordered w-full max-w-xs" />
 </label>
        </div>

        <div>
        <label className="form-control w-full max-w-xs">
   <div className="label">
     <span className="label-text">Skills</span>
   </div>
   <input type="text" placeholder="Type here" value={skills} onChange={(e)=>setSkills(e.target.value)} className="input input-bordered w-full max-w-xs" />
 </label>
        </div>

        <div>
        <label className="form-control w-full max-w-xs">
   <div className="label">
     <span className="label-text">photoUrl</span>
   </div>
   <input type="text" placeholder="Type here" value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)} className="input input-bordered w-full max-w-xs" />
 </label>
        </div>
        <div className="card-actions justify-end">
           <button className="btn btn-primary" onClick={saveProfile}>Submit</button>
         </div>
   </div>
 </div>
     </div>
     {/* <UserCard user={{fname,lname,gender,about,company,photoUrl,skills}}/> */}
     </div>
     )
}

export default EditProfile;