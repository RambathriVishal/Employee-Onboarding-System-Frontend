import React,{useContext,useState}from 'react';
import { QuizContext } from '../Additional/Contexts';
import axios from 'axios';
import "../Quizmain.css";
import { Button } from 'react-bootstrap';

export default function MainMenu(){
    const {setGameState,score} =useContext(QuizContext);
   const [scorestatus,setScorestatus]=useState(JSON.parse(localStorage.getItem('userdata')).score); 
   const [scorenumber,setScorenumber]=useState(JSON.parse(localStorage.getItem('userdata')).scorenumber);
   const [authid,setAuthId]=useState(JSON.parse(localStorage.getItem('userdata')).authorities[0].id);
   const [value,setValue]=useState();
   const [toggle,settoggle]=useState(false);
   const viewScore=(e)=>
   {
    e.preventDefault();
    var email = document.getElementById("email").value;

            console.log(email);
            axios.get(`http://localhost:8017/quiz/${email}`).then(res=>{      
               console.log(res.data);
              setValue(res.data);
              settoggle(true);
            }).catch((res)=>{
                console.log(res);
            })
    }
    return(
        
        scorestatus==false?
        <div className='Menu'>
        <h1>Good Luck!!</h1>
       <button onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
    </div>
    :
    (
        authid==3?
       <form>
    <div class="form-group row mt-5">
       <label  for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm mb-3">Enter Email
       <b className='req'> *</b>
       </label>
        <div class="col-sm-10">
        <input type="email" id='email'  class="form-control form-control-sm"   placeholder='enter email address' name='email' onChange={()=>settoggle(false)} />
        </div>
      <center>  <Button     style={{  width:'5cm'  }}  className='btn btn-primary mb-5' onClick={viewScore} >Check Score</Button>
      </center>
      </div>
      
  <center>
  <div style={{justifyContent:'center',alignContent:'center',alignItems:'center',marginLeft:'10px'}}>
    {toggle==true?<h2>Candidate Score is {value}</h2>:""}
  </div>
  </center>
</form>
:
        <div className='quiznumber'>
            <div className='score'>
                <div className='main-text'> 
                 <h1>You have Completed the quiz</h1>
                 <p>You score is {scorenumber}</p>
                </div>
            </div>
           </div>
 
    )
    );

}
