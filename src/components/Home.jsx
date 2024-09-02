import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    console.log(props);

    
  return (

    <div className='box1' style={props.data==="admin"?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}>
      <h1>{props.data}</h1>
      <h1>{props.name}</h1>
     <Link to="/login"> <button>ortga</button></Link>
    </div>
  );
}
export default Home;
