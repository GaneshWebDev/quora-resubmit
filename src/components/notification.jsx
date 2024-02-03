
import { useState } from 'react';
import Navbar from './Navbar';
import QuestionBox from './question-box';
function Notification(){
    const filter=['All Notification','Stories','Questions','Spaces','People updates','Upvotes','Your content','Your profile','Announcements','Earnings','Subscriptions'];
    const [addQuestion,setAddQuestion]=useState(false);
    const openDIv=(dis,div)=>{
      if(div=='add'){
        setAddQuestion(dis)
        console.log(dis)
      }
      
    }
    function stringFun(string,n){
        return string.length>n?<span>{string.substr(0,n-1)+'...'}</span>:<span>{string}</span>
    }
    const notificationsList=[{
        img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRgIAHrdVHSjBjzOKJvrt1GoO0jkgwqhkiqqgU9VyHXrgCj39A",
        accName:"Better Life_1",
        space:"Posted in a Space you migth like",
        time:"18h ago",
        question:"5 Habits rich people wont tell you:",
        type:'Stories'
    },{
        img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlNCeC1AeRj3gqJovraIDm1XF5iWStx2r5hkkxm5jIv8wLSgDK",
        accName:"Financial Updates",
        space:"Posted in a Space you migth like",
        time:"August 28",
        question:"I am a 35-year-old Indian. I have saved 50 lacs rupees after working for 12 years. How much do other average Indians that are my age have saved?",
        type:'Questions'
    },{
        img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRgIAHrdVHSjBjzOKJvrt1GoO0jkgwqhkiqqgU9VyHXrgCj39A",
        accName:"Better Life_1",
        space:"Posted in a Space you migth like",
        time:"18h ago",
        question:"5 Habits rich people wont tell you:",
        type:'Stories'
    }
    ];
    const [selectedFilter, setSelectedFilter] = useState('All Notifications');
    const [notifications, setNotifications] = useState([
      ...notificationsList
    ]);
  
    const handleFilterClick = (filter) => {
        console.log(filter);
      setSelectedFilter(filter);
      filterNotifications(filter);
    };
  
    const filterNotifications = (filterValue) => {
        console.log(filterValue)
      if (filterValue === 'All Notification') {
        // Show all notifications
        setNotifications([...notificationsList]);
        console.log(notifications)
      } else {
        // Filter notifications based on the selected type
        const filteredNotificationsResult = notificationsList.filter((notification) => notification.type === filterValue);
        console.log(filteredNotificationsResult);
        setNotifications([...filteredNotificationsResult]);
      }
    };
    return(
        <>
        <Navbar fun={openDIv} page={'notification'}/>
        {!addQuestion&&<div className='notification-container'>
            <div className='filter-div'>
                <span  className='title'>Filter</span>
                <div className='filter-value'>
                    {filter.map(filt=>{return(<span   className={`fil ${selectedFilter === filt ? 'notification-title' : ''}`}
  onClick={() => {setSelectedFilter(selectedFilter === filt ? null : filt); handleFilterClick(filt);}}>{filt}</span>)})}
                </div>
            </div>
            <div className='Notification'>
               <span className='title'>Notifications</span>
                <div className='notification-div'>
                        {notifications.map(not=>{return(
                    <div className='d1'>
                        <div className='d11'>
                            <img src={not.img}/>
                            <div className='d12'>
                                <div className='d121'>
                                    <span>{not.accName}</span>
                                    <span>{not.space}</span>
                                    <span>{not.time}</span>
                                    </div>
                                    <span className='post-text'>{stringFun(not.question,50)}</span>
                            </div>
                    </div>
                    <i class="fa-solid fa-ellipsis icon"></i>
                    </div>
                    )})}
                </div>
              
            </div>
        </div>}
        {addQuestion&&<QuestionBox fun={openDIv}/>}
        </>
    )
}
export default Notification;



