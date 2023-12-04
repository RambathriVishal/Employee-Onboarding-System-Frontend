import React ,{useContext}from 'react';
import { useState } from 'react';
import {QuizContext} from "../Additional/Contexts";
import {Questions} from "../Additional/Questions";
import "../Quizmain.css";
import axios from 'axios';
function EndScreen(){
    const {score,setScore,setGameState}=useContext(QuizContext);
    const [cutoff,setCutoff]=useState(24);
    const restartQuiz=()=>{
        setScore(0);
        setGameState("menu");
    }
       
        console.log(score);       
     axios.get(`http://localhost:8017/quiz/${localStorage.getItem('username')}/${score}`).then(res=>{
                       
               console.log(res);
            
            }).catch((res)=>{
                console.log(res);
            })
        
    return(
      <div className='quizscore'>
        <div className='mainquiz'>
          <div className='score'>
             <div className='main-text'>
         <h1>Quiz Finished</h1>
         <p>{score}/{Questions.length}</p>
      <h1>{score>=cutoff ? 'You have Succesfully Completed the quiz': <button onClick={restartQuiz}>Try again</button>}</h1>
    </div>
</div>
 </div>
 </div>
 
        
    ) 
    
}
export default EndScreen;