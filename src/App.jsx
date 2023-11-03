import React, { useEffect, useState } from 'react'
import './App.css'
import questions from './questionsList'
import Header from './Header';
import Popup from './Popup';


function App() {

  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [timeLeft, setTimeLeft] = useState( 15 );



  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
      setTimeLeft( 15 );
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setTimeLeft( 15 );
    } else {
      setShowResult(true)
      setTimeLeft( 0 )
    }
  }
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false)
    setTimeLeft( 15 );
  }

  useEffect(() => {
    const countdownTimer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setTimeLeft( 15 );
        } else {
          setShowResult(true);
        }
      }
    }, 1000);
    return () => clearTimeout(countdownTimer);
  }, [timeLeft, currentQuestion, questions]);


  return (
    <div className='App'>
      <Header time={timeLeft} score={score} />
      <Popup setTimeLeft={setTimeLeft}/>
      {showResult ?
        <div className='result'>
          <h3 className='text-danger'>Final result</h3>
          <h5>{score} out of {questions.length} correct ({(score / questions.length) * 100}%)</h5>
          <button onClick={() => restartGame()} className='btn btn-success mt-3'>Restart Game</button>
        </div>
        :
        <div className="box">
          <div className='question'><h5 className=' text-danger mt-3 mb-4 text-start ms-5 font-monospace'><span className='text-dark'>{currentQuestion + 1}</span> : {questions[currentQuestion].text}</h5>
          </div>

          <ul className='mt-4 list-inline'>
            {questions[currentQuestion].options.map((option) =>
            (

              <li className='list-inline-item me-3 ' onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>

            )
            )}
          </ul>
        </div>
      }
      <div className='text-center fixed-bottom mb-3 text-secondary'>Sanin © - 2023</div>
    </div>
  )
}

export default App
