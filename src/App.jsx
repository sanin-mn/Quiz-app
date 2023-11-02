import React, { useState } from 'react'
import './App.css'
import questions from './questionsList'

function App() {

  const [showResult, setShowResult] = useState(false);
  const [score,setScore] = useState(0);
  const [currentQuestion,setCurrentQuestion] = useState(1);



  const optionClicked = (isCorrect)=>{
    if (isCorrect){
      setScore(score+1)
    }
    if(currentQuestion + 1 < questions.length){
      setCurrentQuestion(currentQuestion+1)
    }else{
      setShowResult(true)
    }
  }
  const restartGame = ()=>{
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false)
  }


  return (
    <div className='App'>
      <h1 className='pt-5 text-success'>Coding Quiz</h1>
    <h2 className='d-inline mt-4' style={{color:'#fef65b'}}>Current score : {score}</h2>

      {showResult ?
        <div className='result'>
          <h3 className='text-danger'>Final result</h3>
          <h5>{score} out of {questions.length} correct ({(score/questions.length)*100}%)</h5>
          <button onClick={()=>restartGame()} className='btn btn-success'>Restart Game</button>
        </div>
        :
        <div className="box">
          <h5 className='text-success'>Question {currentQuestion +1} out of {questions.length}</h5>
          <h3 className='question mt-3'>{questions[currentQuestion].text}</h3>

          <ul className='mt-4 list-inline'>
              {questions[currentQuestion].options.map((option)=>
                (
                  
                  <li className='list-inline-item me-3' onClick={()=> optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                  
                )
              )}
          </ul>
        </div>
      }

    </div>
  )
}

export default App
