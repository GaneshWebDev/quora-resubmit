export default function Profile({questions,userDetails}){
    const titles=['profile','0 Answer','2 Question','0 Posts','0 Followers','Following','Edits','Activity']
    return(
        <div className="profile-container">
            <div className="profile-container-div1">
                <i class="fa-solid fa-user iconProfile"></i>
                <div  className="profile-container-div1-div1">
                    <span>{userDetails.email.split('@')[0]}</span>
                    <span id='light-black'>Add profile credential</span>
                    <span id='little-thick-black'>0 followers | following</span>
                </div>
            </div>
            <div>
                <span id='light-black'>write a description about yourself</span>
            </div>
            <div>
                <h1>My Questions</h1>
            </div>
            <div className="post">
            {questions?.map(question=>{return(<><div className='post-body'>
                <div className='next'>
                        <div className="main-div">
                        <span className='question'>{question}</span>
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