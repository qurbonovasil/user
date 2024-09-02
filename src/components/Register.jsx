import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = (props) => {
    const [newUser, setnewUser] = useState("");
    const [newPassword, setnewPassword] = useState("");
    console.log(props);


  return (
    <div>
      <input onChange={(e) => setnewUser(e.target.value)} type="text" />
      <input onChange={(e) => setnewPassword(e.target.value)} type="text" />
      <button onClick={() => props.GetNewUserData(newUser, newPassword)} >Register</button>
      <Link to="/login"> <button>ortga</button></Link>
    </div>
  );
}

export default Register;
