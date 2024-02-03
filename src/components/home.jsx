import { useState } from 'react'
import QuestionBox from './question-box';
import Navbar from './Navbar'
function Home(){
    const [addQuestion,setAddQuestion]=useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [votes,setVotes]=useState(900);
    const openDIv=(dis,div)=>{
      if(div=='add'){
        setAddQuestion(dis)
        console.log(dis)
      }
      
    }
    function stringFun(string,n){
        return string.length>n?<span>{string.substr(0,n-1)+'...'}</span>:<span>{string}</span>
    }
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
    const post=[
        {
            profileImg:"https://t2.gstatic.com/images?q=tbn:ANd9GcTzr71WQE-AfMGm2ULIiVLrayUQ1gI2LWiiGPvgQL4GTgkdFws6",
            accountName:"Ankeet",
            answerBy:"Majid",
            desc:"B.tech from YMCA University of Science and Technology (Graduated 2022)",
            question:"Are you keen to get the finest Leadership Career Opportunities?",
            answer:"Get expert guidance, mentorship & assistance to achieve this. Join our Leadership Opportunities Program.",
            postImg:"https://image.slidesharecdn.com/ilmleadershipskills-161209160616/75/ilm-leadership-skills-1-2048.jpg?cb=1673741044",
         
       }, {
        profileImg:"https://t2.gstatic.com/images?q=tbn:ANd9GcTzr71WQE-AfMGm2ULIiVLrayUQ1gI2LWiiGPvgQL4GTgkdFws6",
        accountName:"Ankeet",
        answerBy:"Majid",
        desc:"B.tech from YMCA University of Science and Technology (Graduated 2022)",
        question:"Are you keen to get the finest Leadership Career Opportunities?",
        answer:"Get expert guidance, mentorship & assistance to achieve this. Join our Leadership Opportunities Program.",
        postImg:"https://image.slidesharecdn.com/ilmleadershipskills-161209160616/75/ilm-leadership-skills-1-2048.jpg?cb=1673741044",
     
},{
    profileImg:"https://t2.gstatic.com/images?q=tbn:ANd9GcTzr71WQE-AfMGm2ULIiVLrayUQ1gI2LWiiGPvgQL4GTgkdFws6",
    accountName:"Ankeet",
    answerBy:"Majid",
    desc:"B.tech from YMCA University of Science and Technology (Graduated 2022)",
    question:"Are you keen to get the finest Leadership Career Opportunities?",
    answer:"Get expert guidance, mentorship & assistance to achieve this. Join our Leadership Opportunities Program.",
    postImg:"https://image.slidesharecdn.com/ilmleadershipskills-161209160616/75/ilm-leadership-skills-1-2048.jpg?cb=1673741044",
 
}
    ]
    return(
        <>
        <Navbar fun={openDIv} page={'home'}/>
        {addQuestion&&<QuestionBox fun={openDIv}/>}
        {!addQuestion &&<div className="home">
        <div className="space">
           <div className='space-title'><i class="fa-solid fa-circle-plus plus-home-icon"></i><span>Create Space</span></div>
           <div className='space-div'>
                {spaces?.map(space=>{
                    return(<div className='space-acc'>
                        <div><img src={space.img}/></div>
                        <div>{stringFun(space.name,12)}</div>
                    </div>)
                })}
           </div>
        </div>
        <div className="post">
            <div className='head'>
                <div className='head1'>
                    <i class="fa-solid fa-user iconProfile"></i>
                    <input type='text' placeholder=' What do you want to ask or share?'/>
                </div>
                <div className='head2'>
                    <div className='h2D1'><i class="fas fa-question"></i><span>Ask</span></div>
                    <div className='h2D1 mid'><i className="fa-solid fa-pen-to-square"></i><span>Answer</span></div>
                    <div className='h2D1'><i class="fa-solid fa-pen"></i><span>Post</span></div>
                </div>
            </div>
            {post?.map(post=>{return(<><div className='post-body'>
                <div className='account'>
                    <div className='account-div'>
                        <img src={post.profileImg}/>
                        <div className='accountDetails'>
                            <div className='nameEtc'>
                                <span>{post.accountName}</span>
                                <span className='follow'>Follow</span>
                            </div>
                            <div  className='other'>
                                <span>Answered by {post.answerBy}</span>
                                <span>june
                                     12</span>
                            </div>
                        </div>
                    </div> 
                        <div>
                            <i class="fa-solid fa-xmark"></i>
                        </div>

                    
                </div>
                <div className='next'>
                    <span className='question'>{post.question}</span>
                    <span className='answer'>{post.answer}</span>
                </div>
                <div className='postImg'>
                    <img src={post.postImg}/>
                </div>
                <div className='foot'>
                    <div className='btnDiv'>
                        <div className='vote-btn'>
                        <i className="fa-solid fa-arrow-up btnIcon1" onClick={() => { !isButtonDisabled && setVotes(prevVotes => prevVotes + 1); setIsButtonDisabled(true); }}></i>
                            <span>Upvote  {votes}</span>
                            <i class="fa-solid fa-arrow-down btnIcon2"  onClick={() => { isButtonDisabled && setVotes(prevVotes => prevVotes - 1); setIsButtonDisabled(false); }}></i>
                        </div>
                        <div className='comment-div'>
                            <i class="fa-regular fa-comment icon"></i>
                            <span>43</span>
                        </div>
                        <div className='share-div'>
                            <i class="fa-solid fa-share icon"></i>
                            <span>13</span>
                        </div>
      

                    </div>
                    <div>
                    <i class="fa-solid fa-ellipsis icon"></i>
                    </div>
                </div>
            </div>
           </>)})}
        </div>
        <div className="empty">
        </div>
    </div>}
        </>
    )
}
export default Home;