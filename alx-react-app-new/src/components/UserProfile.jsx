const UserProfile = (props) => {
 return(
  <div style{{ border: '1px solid gray', padding: '10', margin: '10px'}}> 
   <h2 style={{colour: 'blue'}}>{props.name}</h2>
   <p>Age: <span style={{ fontWeight: 'bold'}}>{props.age}</span></p>
   <p>Bio: {props.bio}</p>
  </div>
 );
};

export default UserProfile;