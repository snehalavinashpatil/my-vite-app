const UserCard = ({user})=>{
    
    const {fname,lname,photoUrl,age,gender,about,company,skills} = user;
    
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
      <button className="btn btn-primary">Accept</button>
      <button className="btn btn-secondary">Ignore</button>
    </div>
  </div>
</div>
    );
}

export default UserCard;