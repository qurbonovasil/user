import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';




function App() {
  const [checked, setchecked] = useState(false);
  const [data, setData] = useState("")
  const [name, setName] = useState("");

  const [newUser, setnewUser] = useState({});


  const checkedUser = (data,name) => {
    setchecked(true)
    console.log("checked ishladi");
    setData(data);
    console.log(data);
    setName(name);
    console.log(name);
  }
  const GetNewUserData=(NewUser,NewPassword)=>{
    setnewUser({
      userName:NewUser,
      password:NewPassword,
      role:"foydalanuvchi",
    });
    console.log(NewUser);
    console.log(NewPassword);
    console.log(newUser);

  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login checkedUser={checkedUser} newUser={newUser} />} />
          {checked && <Route path='/Home' element={<Home data={data} name={name} />} />}
          <Route path='/Register' element={<Register GetNewUserData={GetNewUserData}/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
