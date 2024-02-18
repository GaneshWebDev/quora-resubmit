import { NavLink } from 'react-router-dom';
import { useState } from "react";
export default function Navbar({userDetails,logout,fun}){
    const [showProfile,setShowProfile]=useState(false);
    const [showspaces,setShowSpaces]=useState(false);
    const [activeIcon, setActiveIcon] = useState(null);
    console.log(userDetails,logout,'navbar');
    function stringFun(string,n){
        return string.length>n?<span>{string.substr(0,n-1)+'...'}</span>:<span>{string}</span>
    }
    const handleIconClick = (iconName) => {
        setActiveIcon(iconName);
    };
    const spaces=[{
        img:"https://assetscdn1.paytm.com/images/catalog/product/L/LA/LAPAPPLE-IMAC-MSAYA6772936A7E048E/a_0.JPG?imwidth=320&impolicy=hq",
        name:'Mac Computer'
        },{
            img:"https://t0.gstatic.com/images?q=tbn:ANd9GcS8rdIcof_FMMKN8lfBNMZBzK913PTM2Oekmyf3_NSetCBjfd2z",
            name:'Apple iOS Product '
        },{
            img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqonclPz2V95Y35D1CaxnFJqJL7ujqwe_G_8ZLYetWW88GMgVa",
            name:'Internet Planet'
        },{
            img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSXYVn8ZYP-vX5Ml-IOOGdzJu9zUIhO-GQrdDAR86Pjq4ceRrS7",
            name:"ANDROID APPS"
        },{
            img:"https://t2.gstatic.com/images?q=tbn:ANd9GcQyTapHA3qFbvfSH26j990v1Eslhlmhu_TW6pvbSGUMBuid6hyY",
            name:"Apple iPhone"
        }]
    return(
        <>
                <div className="navbar-container-disk">
                        <div className="navbar-logo"><img src='new-logo.png'/></div>
                        <div className='icon' onClick={() => handleIconClick('home')}><NavLink to='/' activeClassName='active'><i className="fa-solid fa-house icon"></i></NavLink></div>
                        <div  className='icon' onClick={() => handleIconClick('following')}><NavLink to='/following' activeClassName='active'><i className="fa-regular fa-rectangle-list icon"  ></i></NavLink></div>
                        <div className="icon"><NavLink to='/answer' activeClassName='active'><i className="fa-solid fa-pen-to-square icon"></i></NavLink></div>
                        <div className="icon"><i className="fa-solid fa-people-group icon"  onClick={()=>setShowSpaces(!showspaces)}></i></div>
                        {showspaces&&<div className="spaces-div">
                        <div className="space-nav">
                            <div className='space-title'><span>See All Spaces</span><i class="fa-solid fa-chevron-right"></i></div>
                            <div className='space-div'>
                                    {spaces?.map(space=>{
                                        return(<div className='space-acc'>
                                            <div><img src={space.img}/></div>
                                            <div>{stringFun(space.name,12)}</div>
                                        </div>)
                                    })}
                            </div>
                            </div>
                           </div>}
                        <div className='icon' onClick={() => handleIconClick('notification')}><NavLink to='/notification' activeClassName='active'><i className="fa-solid fa-bell icon"    ></i></NavLink></div>
                        <div className="search-div"><i className="fa-solid fa-magnifying-glass "></i><input className="search-box" type='text' placeholder="Search Quora"/></div>
                        <div className="try-div"><span>Try Quora+</span></div>
                        <div className='icon profile'><i class="fa-solid fa-user iconProfile" onClick={()=>setShowProfile(!showProfile)}></i>
                          {showProfile&&<div className="profile-div">
                               <div className="user-profile">
                                    <i className="fa-solid fa-user iconProfile"></i>
                                    <NavLink to='/profile'><div className='userProfileRoute' onClick={()=>setShowProfile(false)}>
                                        <span>{userDetails.email.split('@')[0]}</span>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div></NavLink>
                                    
                               </div>
                               <div className="other-options">
                                 <span>Settings</span>
                                 <span>Language</span>
                                 <span>Help</span>
                                 <span onClick={()=>logout('userDetails')}>Logout</span>
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
                        <NavLink to='/' activeClassName='active'><i className="fa-solid fa-house icon"  ></i></NavLink>
                        <NavLink to='/following' activeClassName='active'><i className="fa-regular fa-rectangle-list icon"></i></NavLink>
                        <NavLink to='/answer' activeClassName='active'><i className="fa-solid fa-pen-to-square icon"></i></NavLink>
                        <i className="fa-solid fa-people-group icon"  onClick={()=>setShowSpaces(!showspaces)}></i>
                        {showspaces&&<div className="spaces-div">
                        <div className="space-nav">
                            <div className='space-title'><span>See All Spaces</span><i class="fa-solid fa-chevron-right"></i></div>
                            <div className='space-div'>
                                    {spaces?.map(space=>{
                                        return(<div className='space-acc'>
                                            <div><img src={space.img}/></div>
                                            <div>{stringFun(space.name,12)}</div>
                                        </div>)
                                    })}
                            </div>
                            </div>
                           </div>}
                        <NavLink to='/notification' activeClassName='active'><i className="fa-solid fa-bell icon"   ></i></NavLink>
                        <i class="fa-solid fa-user iconProfile icon" onClick={()=>setShowProfile(!showProfile)}></i>
                        {showProfile&&<div className="profile-div">
                               <div className="user-profile">
                                    <i class="fa-solid fa-user iconProfile"></i>
                                    <NavLink to='/profile'><div className='userProfileRoute' onClick={()=>setShowProfile(false)}>
                                        <span>{userDetails.email.split('@')[0]}</span>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div></NavLink>
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