import React, { useEffect,useState } from 'react'
import './App.css'
import questions from './questionsList'
import Header from './Header';


function App() {

  const [showResult, setShowResult] = useState(false);
  const [score,setScore] = useState(0);
  const [currentQuestion,setCurrentQuestion] = useState(1);
  const [timeLeft, setTimeLeft] = useState(10);


  const optionClicked = (isCorrect)=>{
    if (isCorrect){
      setScore(score+1)
      setTimeLeft(10);
    }
    if(currentQuestion + 1 < questions.length){
      setCurrentQuestion(currentQuestion+1)
      setTimeLeft(10);
    }else{
      setShowResult(true)
    }
  }
  const restartGame = ()=>{
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false)
    setTimeLeft(10);
  }

  useEffect(() => {
    const countdownTimer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        if (currentQuestion < questions.length - 1) { 
          setCurrentQuestion(currentQuestion + 1);
          setTimeLeft(10);
        } else {
          setShowResult(true);
        }
      }
    }, 1000);
    return () => clearTimeout(countdownTimer);
  }, [timeLeft, currentQuestion, questions]);


  return (
    <div className='App'>
      <Header time={timeLeft} score={score}/>
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
