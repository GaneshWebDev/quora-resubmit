import { useState } from 'react';
import {useForm} from 'react-hook-form';
function QuestionBox({fun,setQuestions,questions}){
    const [createPost,setCreatePost]=useState(false);
    const { register, handleSubmit, watch,reset, setError, formState: { errors } } = useForm();
    const onSubmit = (data) => { 
      alert('question added');
      setQuestions([...questions,data.question]);
      reset();
    };
    return(
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='question-body'>
        <div className="questionBox">
           <i class="fa-solid fa-xmark icon close" onClick={()=>fun(false,'add')}></i>
           <div className="header-div">   
              <div className='add-question-div'  style={!createPost ? {'borderBottom': '3px solid blue', 'borderRadius': '4px'} : {}}>
                  <span onClick={()=>setCreatePost(false)}  >Add Question</span>
              </div>
              <div className='add-post-div'  style={createPost ? {'borderBottom': '3px solid blue', 'borderRadius': '4px'} : {}}>
                  <span onClick={()=>setCreatePost(true)}>Create Post</span>
              </div>
           </div>
           <div className='questionTitle'>
                <i class="fa-solid fa-user iconProfile"></i>
               
                  <input className='input-post' type="text" placeholder={createPost?'Say something...':'Start your question with "What","How","Why",etc.'}
                  {...register('question', { required: true })}
                  />
                
           </div>
           {createPost?<div className='buttons'>
              <button className='addQuestion'>Post</button>
           </div>:<div className='buttons'>
              <button className='cancel'>Cancel</button>
              <button className='addQuestion' type='submit'>Add question</button>
           </div>}
         
        </div>
      </div>
      </form>
    )
}
export default QuestionBox;