import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [loading, setloading] = useState(true);
   

    let users=[
        {userName:"admin",password:"admin",role:"admin"},
        {userName:"seller",password:"seller",role:"seller"},
        {userName:"user",password:"user",role:"user"},
    ]

    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
   
 

    const navigate=useNavigate();


useEffect(() => {
   const addUser=async()=>{
       try {
        let NewUser = await new Promise((resolve, reject) => {
            if (props.newUser) {
                resolve(props.newUser);
            } else {
                reject('User not found');
            }
        });

        users.push(NewUser);
        console.log(users)
    
        
       } catch (error) {
          console.log(err);
       }
       finally{
         setloading(false)
       }
   }
   addUser()
    
}, [props.newUser]);
    

const checkedLogin=()=>{
   const checkedUser= users.find((element)=>{
        return element.userName==userName && element.password==password
    })

    if(checkedUser){
        console.log(props);
        props.checkedUser(checkedUser.role,checkedUser.userName)
        navigate("/Home")
    }
    else{
        console.log("error user or password");

    }
        
    }

    if(loading){
        return <h1>loading</h1> }

    console.log(users);
  return (
    <> <div>
        <input onChange={(e)=>setuserName(e.target.value)} type="text"/>
        <input onChange={(e)=>setpassword(e.target.value)} type="text"/>
        <button onClick={()=>{checkedLogin()}}>login</button>
    
    </div>
    
    </>
   
  );
}

export default Login;
