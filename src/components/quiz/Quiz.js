import React, {useRef, useState} from 'react';
import './Quiz.css';
import Infos from '../../Assets/Infos';

const Quiz = () => {

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(Infos[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_array = [option1,option2,option3,option4];

  const checkAns = (e, ans) =>{
    if (lock === false){
      if (question.ans === ans){
        e.target.classList.add('correct');
        setLock(true);
        setScore(prev => prev + 1)
      }else{
        e.target.classList.add('incorrect');
        setLock(true);
        option_array[question.ans - 1].current.classList.add('correct');
        
      }
    }
   
  }

  const next = () => {
    if (lock === true){
      setIndex(++index);
      setQuestion(Infos[index]);
      setLock(false)
      option_array.map(option => {
        option.current.classList.remove('incorrect');
        option.current.classList.remove('incorrect');
      })
    }
  }
return (
  <div className='container'>
 <h1>Quiz app</h1>
 <hr/>
 <h2>{index + 1}.{question.question}</h2>
 <ul>
  <li ref={option1} onClick={(e) => {checkAns(e,1)}}>{question.option1}</li>
  <li ref={option2} onClick={(e) => {checkAns(e,2)}}>{question.option2}</li>
  <li ref={option3} onClick={(e) => {checkAns(e,3)}}>{question.option3}</li>
  <li ref={option4} onClick={(e) => {checkAns(e,4)}}>{question.option4}</li>
 </ul>
 <button className='next' onClick={next}>Next</button>
 <div className='index'>{index} of {Infos.length} question</div>
  </div>
)
}

export default Quiz