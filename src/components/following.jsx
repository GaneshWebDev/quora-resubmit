import { useState } from "react";
import QuestionBox from './question-box';
export default function Follow(){
    const [votes,setVotes]=useState(900);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
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
            profileImg:"https://assetscdn1.paytm.com/images/catalog/product/L/LA/LAPAPPLE-IMAC-MSAYA6772936A7E048E/a_0.JPG?imwidth=320&impolicy=hq",
            accountName:"Ankit",
            answerBy:"Majid",
            desc:"B.tech from YMCA University of Science and Technology (Graduated 2022)",
            question:"Are you keen to get the finest Leadership Career Opportunities?",
            answer:"They do, although it is only about $1 under $1000 (or maybe $100 or $200 below depending on discounts…but still list price is under $1000). See the current price of the M1 MacBook Air (and maybe most of a decade long) price of the Intel MacBook Air.If you actually want to know why they don’t make a MacBook for “well under $1000” I expect the answer is some combination of not being able to make something with the quality they want and the profit margins they want for well under $1000. There may be a side order of it cutting into the sales of the $999 MacBook.You might think bringing out a cruddy $500 MacBook Cheap could be “nothing but good” for Apple as many sales would go to people who would otherwise buy a Windows laptop, but if it really is cruddy then you won’t get people going “I bought a MacBook Cheap and it was nice enough but it fell apart after I flogged it for two years, I think I will try the $1000 one and see how that works out!”. Rather you get people saying “I spent $500 and it didn’t last any longer then my $300 windows PC! I’m never buying that crap again!”.Apple would far rather sell fewer $999 laptops to first time buyers and have the vast majority realize they really are better, and last longer, and be more likely to buy another one.That is why Tim Cook talks about “customer sat” (aka customer satisfaction) as a key goal for Apple, not “units shipped” which he thinks of as something driven by a high customer sat.",
         
                },{
                    profileImg:"https://assetscdn1.paytm.com/images/catalog/product/L/LA/LAPAPPLE-IMAC-MSAYA6772936A7E048E/a_0.JPG?imwidth=320&impolicy=hq",
                    accountName:"Ankit",
                    answerBy:"Majid",
                    desc:"B.tech from YMCA University of Science and Technology (Graduated 2022)",
                    question:"Are you keen to get the finest Leadership Career Opportunities?",
                    answer:"They do, although it is only about $1 under $1000 (or maybe $100 or $200 below depending on discounts…but still list price is under $1000). See the current price of the M1 MacBook Air (and maybe most of a decade long) price of the Intel MacBook Air.If you actually want to know why they don’t make a MacBook for “well under $1000” I expect the answer is some combination of not being able to make something with the quality they want and the profit margins they want for well under $1000. There may be a side order of it cutting into the sales of the $999 MacBook.You might think bringing out a cruddy $500 MacBook Cheap could be “nothing but good” for Apple as many sales would go to people who would otherwise buy a Windows laptop, but if it really is cruddy then you won’t get people going “I bought a MacBook Cheap and it was nice enough but it fell apart after I flogged it for two years, I think I will try the $1000 one and see how that works out!”. Rather you get people saying “I spent $500 and it didn’t last any longer then my $300 windows PC! I’m never buying that crap again!”.Apple would far rather sell fewer $999 laptops to first time buyers and have the vast majority realize they really are better, and last longer, and be more likely to buy another one.That is why Tim Cook talks about “customer sat” (aka customer satisfaction) as a key goal for Apple, not “units shipped” which he thinks of as something driven by a high customer sat.",
                
            },{
                profileImg:"https://assetscdn1.paytm.com/images/catalog/product/L/LA/LAPAPPLE-IMAC-MSAYA6772936A7E048E/a_0.JPG?imwidth=320&impolicy=hq",
                accountName:"Ankit",
                answerBy:"Majid",
                desc:"B.tech from YMCA University of Science and Technology (Graduated 2022)",
                question:"Are you keen to get the finest Leadership Career Opportunities?",
                answer:"They do, although it is only about $1 under $1000 (or maybe $100 or $200 below depending on discounts…but still list price is under $1000). See the current price of the M1 MacBook Air (and maybe most of a decade long) price of the Intel MacBook Air.If you actually want to know why they don’t make a MacBook for “well under $1000” I expect the answer is some combination of not being able to make something with the quality they want and the profit margins they want for well under $1000. There may be a side order of it cutting into the sales of the $999 MacBook.You might think bringing out a cruddy $500 MacBook Cheap could be “nothing but good” for Apple as many sales would go to people who would otherwise buy a Windows laptop, but if it really is cruddy then you won’t get people going “I bought a MacBook Cheap and it was nice enough but it fell apart after I flogged it for two years, I think I will try the $1000 one and see how that works out!”. Rather you get people saying “I spent $500 and it didn’t last any longer then my $300 windows PC! I’m never buying that crap again!”.Apple would far rather sell fewer $999 laptops to first time buyers and have the vast majority realize they really are better, and last longer, and be more likely to buy another one.That is why Tim Cook talks about “customer sat” (aka customer satisfaction) as a key goal for Apple, not “units shipped” which he thinks of as something driven by a high customer sat.",
            
            },{
                profileImg:"https://assetscdn1.paytm.com/images/catalog/product/L/LA/LAPAPPLE-IMAC-MSAYA6772936A7E048E/a_0.JPG?imwidth=320&impolicy=hq",
                accountName:"Ankit",
                answerBy:"Majid",
                desc:"B.tech from YMCA University of Science and Technology (Graduated 2022)",
                question:"Are you keen to get the finest Leadership Career Opportunities?",
                answer:"They do, although it is only about $1 under $1000 (or maybe $100 or $200 below depending on discounts…but still list price is under $1000). See the current price of the M1 MacBook Air (and maybe most of a decade long) price of the Intel MacBook Air.If you actually want to know why they don’t make a MacBook for “well under $1000” I expect the answer is some combination of not being able to make something with the quality they want and the profit margins they want for well under $1000. There may be a side order of it cutting into the sales of the $999 MacBook.You might think bringing out a cruddy $500 MacBook Cheap could be “nothing but good” for Apple as many sales would go to people who would otherwise buy a Windows laptop, but if it really is cruddy then you won’t get people going “I bought a MacBook Cheap and it was nice enough but it fell apart after I flogged it for two years, I think I will try the $1000 one and see how that works out!”. Rather you get people saying “I spent $500 and it didn’t last any longer then my $300 windows PC! I’m never buying that crap again!”.Apple would far rather sell fewer $999 laptops to first time buyers and have the vast majority realize they really are better, and last longer, and be more likely to buy another one.That is why Tim Cook talks about “customer sat” (aka customer satisfaction) as a key goal for Apple, not “units shipped” which he thinks of as something driven by a high customer sat.",
            
            }
    ]
    return(
        <>
        {<div className="home">
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
                    <p className='answer'>{stringFun(post.answer,200)}</p>
                </div>
                <div className='foot'>
                    <div className='btnDiv'>
                        <div className='vote-btn'>
                            <div onClick={() => { !isButtonDisabled && setVotes(prevVotes => prevVotes + 1); setIsButtonDisabled(true); }}>
                                <i className="fa-solid fa-arrow-up btnIcon1" ></i>
                                <span>Upvote  {votes}</span>
                            </div>
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