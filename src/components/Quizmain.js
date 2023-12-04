// import React,{useState} from "react";
// import MainMenu from './Quizcomponents/MainMenu';
// import EndScreen from './Quizcomponents/EndScreen';
// import Quiz from './Quizcomponents/Quiz';
// import {QuizContext} from './Additional/Contexts'
// import "../components/Quizmain.css";
// import Navbar from "./Navbar";
// function Quizmain(){
//     const [gameState,setGameState]=useState("menu");
//     const[score,setScore]=useState(0);
//     return(
//         <div><Navbar/>
//         <div className='Quizmain'>
//             <h1>Quiz</h1>
//             <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
//             {gameState==="quiz" && <Quiz/>}
//             {gameState==="menu" && <MainMenu/>}
//             {gameState==="endscreen" && <EndScreen/>}
//            </QuizContext.Provider>
//         </div>
//         </div>
//     );
// }
// export default Quizmain;