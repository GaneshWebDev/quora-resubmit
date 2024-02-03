import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../context";
export default function Navbar({fun,page}){
    const { userDetials,logout }=useContext(MyContext)
    const [showProfile,setShowProfile]=useState(false);
    return(
        <>
                <div className="navbar-container-disk">
                        <div className="navbar-logo"><img src='new-logo.png'/></div>
                        <div className="icon"><Link to='/'><i className="fa-solid fa-house icon" style={page=='home' ? {'color':'#AA2200'} : {}}></i></Link></div>
                        <div className="icon"><i className="fa-regular fa-rectangle-list icon"></i></div>
                        <div className="icon"><i className="fa-solid fa-pen-to-square icon"></i></div>
                        <div className="icon"><i className="fa-solid fa-people-group icon"></i></div>
                        <div className="icon"><Link to='/notification'><i className="fa-solid fa-bell icon"  style={page=='notification' ? {'color':'#AA2200'} : {}} ></i></Link></div>
                        <div className="search-div"><i className="fa-solid fa-magnifying-glass "></i><input className="search-box" type='text' placeholder="Search Quora"/></div>
                        <div className="try-div"><span>Try Quora+</span></div>
                        <div className='icon profile'><i class="fa-solid fa-user iconProfile" onClick={()=>setShowProfile(!showProfile)}></i>
                          {showProfile&&<div className="profile-div">
                               <div className="user-profile">
                                    <i class="fa-solid fa-user iconProfile"></i>
                                    <span>{userDetials.email.split('@')[0]}</span>
                               </div>
                               <div className="other-options">
                                 <span>Settings</span>
                                 <span>Language</span>
                                 <span>Help</span>
                                 <span onClick={()=>logout()}>Logout</span>
                               </div>
                               <div className="profile-footer">
                                    <p>About . Careers . Terms . Privacy<br/>Acceptable Use . Advertise . Press<br/>Your Ad Choices . Grievance Officer</p>
                               </div>
                           </div>}
                        </div>
                        <div className="icon globe"><i class="fa-solid fa-globe"></i></div>
                        <div className=' add-question'><button className='add' onClick={()=>fun(true,'add')}>Add question</button><i class="fa-solid fa-caret-down create"></i></div>
                </div>
                <div className="navbar-container-mobile">
                    <div className="search-logo-question">
                        <div className="search-div-mobile"><i className="fa-solid fa-magnifying-glass "></i><span>Search</span></div>
                        <img src='logo-mobile.png' />
                        <div className="add-question-mobile" onClick={()=>fun(true,'add')}>
                        <i class="fa-solid fa-circle-plus"></i>
                            <span id='add'>Add</span>
                        </div>
                    </div>
                    <div className="icons-div">
                        <Link to='/'><i className="fa-solid fa-house icon"  style={page=='home' ? {'color':'#AA2200'} : {}}></i></Link>
                        <i className="fa-regular fa-rectangle-list icon"></i>
                        <i className="fa-solid fa-pen-to-square icon"></i>
                        <i className="fa-solid fa-people-group icon"></i>
                        <Link to='/notification'><i className="fa-solid fa-bell icon"   style={page=='notification' ? {'color':'#AA2200'} : {}}></i></Link>
                        <i class="fa-solid fa-user iconProfile icon" onClick={()=>setShowProfile(!showProfile)}></i>
                        {showProfile&&<div className="profile-div">
                               <div className="user-profile">
                                    <i class="fa-solid fa-user iconProfile"></i>
                                    <span>{userDetials.email.split('@')[0]}</span>
                               </div>
                               <div className="other-options">
                                 <span>Settings</span>
                                 <span>Language</span>
                                 <span>Help</span>
                                 <span onClick={()=>logout()}>Logout</span>
                               </div>
                               <div className="profile-footer">
                                    <p>About . Careers . Terms . Privacy<br/>Acceptable Use . Advertise . Press<br/>Your Ad Choices . Grievance Officer</p>
                               </div>
                           </div>}
                        <i class="fa-solid fa-globe icon"></i>
                    </div>
                </div>
        </>
    )
}