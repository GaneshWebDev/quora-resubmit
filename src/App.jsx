import { useState } from 'react'
import './App.css';
import { MyContext } from './context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notification from './components/notification';
import Home from './components/home';
import Login from './components/login-signup';
import Navbar from './components/Navbar';
function HomeWrapper({ userDetials,logout }) {
  // Wrap the Home component with MyContext.Provider here;
  return (
    <MyContext.Provider value={{ userDetials,logout }}>
      <Home />
    </MyContext.Provider>
  );
}
function NotificationWrapper({ userDetials,logout }) {
  // Wrap the Home component with MyContext.Provider here;
  return (
    <MyContext.Provider value={{ userDetials,logout }}>
      <Notification />
    </MyContext.Provider>
  );
}
function App() {
  const [userDetials,setUserDetails]=useState(null);
  const [userLogin,setuserLogin]=useState(false);
  const loginFunction=(data)=>{
    if(userDetials!==null){
      if(data.email===userDetials.email && data.password=== userDetials.password){
        setuserLogin(true);
     }else{
       alert('invalid userid or password');
     }
    }else{
      alert('not user found please register')
    }
     
  }
  const logoutFunction=()=>{
     setUserDetails(null);
     setuserLogin(false);
  }
  return (
    <>
   
      {userLogin?<BrowserRouter>
         <Routes>
          <Route path='/' element={<HomeWrapper userDetials={userDetials} logout={logoutFunction}/>} />
          <Route path='/notification' element={<NotificationWrapper userDetials={userDetials} logout={logoutFunction}/>} />
         </Routes>
      </BrowserRouter>:<Login userDetailsFun={setUserDetails} userLoginFun={loginFunction}/>}
    </>
  )
}

export default App
