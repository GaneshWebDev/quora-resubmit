import { useState } from "react";
export default function Answer(){
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [votes,setVotes]=useState(900);
    const post=[
        {
            profileImg:"https://t2.gstatic.com/images?q=tbn:ANd9GcTzr71WQE-AfMGm2ULIiVLrayUQ1gI2LWiiGPvgQL4GTgkdFws6",
            accountName:"Ankeet",
            answerBy:"Majid",
            desc:"B.tech from YMCA University of Science and Technology (Graduated 2022)",
            question:"Is the ExcelR Business analyst course genuine?",
            answer:"Get expert guidance, mentorship & assistance to achieve this. Join our Leadership Opportunities Program.",
            postImg:"https://image.slidesharecdn.com/ilmleadershipskills-161209160616/75/ilm-leadership-skills-1-2048.jpg?cb=1673741044",
         
       }, {
        profileImg:"https://t2.gstatic.com/images?q=tbn:ANd9GcTzr71WQE-AfMGm2ULIiVLrayUQ1gI2LWiiGPvgQL4GTgkdFws6",
        accountName:"Ankeet",
        answerBy:"Majid",
        desc:"B.tech from YMCA University of Science and Technology (Graduated 2022)",
        question:"What are the benefits of eating bread for diabetics at night?",
        answer:"Get expert guidance, mentorship & assistance to achieve this. Join our Leadership Opportunities Program.",
        postImg:"https://image.slidesharecdn.com/ilmleadershipskills-161209160616/75/ilm-leadership-skills-1-2048.jpg?cb=1673741044",
     
},{
    profileImg:"https://t2.gstatic.com/images?q=tbn:ANd9GcTzr71WQE-AfMGm2ULIiVLrayUQ1gI2LWiiGPvgQL4GTgkdFws6",
    accountName:"Ankeet",
    answerBy:"Majid",
    desc:"B.tech from YMCA University of Science and Technology (Graduated 2022)",
    question:"How many MB in 1GB?",
    answer:"Get expert guidance, mentorship & assistance to achieve this. Join our Leadership Opportunities Program.",
    postImg:"https://image.slidesharecdn.com/ilmleadershipskills-161209160616/75/ilm-leadership-skills-1-2048.jpg?cb=1673741044",
 
}
    ]
    return(
        <div className="answers">
        <div className='filter-div'>
                <span  className='title'>Questions</span>
                <div className='filter-value'>
                    <span   className='fil'>Question for you</span>
                    <span   className='fil'>Answer Request</span>
                    <span   className='fil'>Draft</span>
                </div>
            </div>
            <div className="post">
            {post?.map(post=>{return(<><div className='post-body'>
                <div className='next'>
                        <div className="main-div">
                        <span className='question'>{post.question}</span>
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                        <span>1 answer</span>
                </div>
                <div className='foot'>
                    <div className='btnDiv'>
                        <div className='btn-answer'>
                            <div>
                            <i className="fa-solid fa-pen-to-square "></i>
                                <span>Answer</span>
                            </div>
                        </div>
                        <div className='comment-div'>
                            <span>Follow</span>
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
        </div>
    )
}