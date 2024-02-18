import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notification from './components/notification';
import Home from './components/home';
import Navbar from './components/navbar';
import Follow from './components/following';
import Login from './components/login-signup';
import Answer from './components/answer';
import QuestionBox from './components/question-box';
import Profile from './components/profile';
function App() {
  const [userDetials,setUserDetails]=useState(null);
  const [userLogin,setuserLogin]=useState(false);
  const [addQuestion,setAddQuestion]=useState(false);
  const [questions,setQuestions]=useState([]);
  const openDIv=(dis,div)=>{
    if(div=='add'){
      setAddQuestion(dis)
      console.log(dis)
    }
    
  }
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
  const logoutFunction=(name)=>{
     setUserDetails(null);
     setuserLogin(false);
     document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
  console.log(questions,'app.js');
  return (
    <div className='App'>

      {userLogin?<BrowserRouter>
        <Navbar userDetails={userDetials} logout={logoutFunction} fun={openDIv} />
        {addQuestion&&<QuestionBox fun={openDIv} setQuestions={setQuestions} questions={questions}/>}
         {!addQuestion &&<Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/following' element={<Follow />}/>
          <Route path='/notification' element={<Notification/>} />
          <Route path='/answer' element={<Answer />}/>
          <Route path='/profile' element={<Profile questions={questions} userDetails={userDetials}/>} />
         </Routes >}
      </BrowserRouter>:<Login userDetailsFun={setUserDetails} userLoginFun={loginFunction}/>}
    </div>
  )
}

export default App
