import React ,{useState,useContext}from 'react';
import {Questions} from "../Additional/Questions";
import {QuizContext} from "../Additional/Contexts";
function Quiz(){
    const [currQuestion,setCurrQuestion]=useState(0);
    const [optionChoosen,setOptionChoosen]=useState("");
    const {score,setScore,gameState,setGameState}=useContext(QuizContext);
    const nextQuestion=()=>
    {
        if(Questions[currQuestion].answer==optionChoosen){
           setScore(score+1);
           console.log("true");
        }
        setCurrQuestion(currQuestion+1);
     
        console.log(optionChoosen+" "+"ok"+" "+Questions[currQuestion].answer);
        console.log(score);
        
      
    }
    const finishQuiz=()=>
    {
        if(Questions[currQuestion].answer==optionChoosen){
            setScore(score+1);
        }
        setGameState("endscreen");

    }
    return(
     <div className='Quiz'>
      <h3>{Questions[currQuestion].question}</h3>
      <div className='options'>
        <button onClick={()=>setOptionChoosen("a")}>{Questions[currQuestion].optionA}</button>
        <button onClick={()=>setOptionChoosen("b")}>{Questions[currQuestion].optionB}</button>
        <button onClick={()=>setOptionChoosen("c")}>{Questions[currQuestion].optionC}</button>
        <button onClick={()=>setOptionChoosen("d")}>{Questions[currQuestion].optionD}</button>
      </div>
      {currQuestion===Questions.length-1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ):(
      <button onClick={nextQuestion}>Next Question</button>)}
    </div>
    )
}
export default Quiz;