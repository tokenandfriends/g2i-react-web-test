import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
//material-ui
import Container from '@material-ui/core/Container'
// components
import HomePage from './HomePage'
import QuizPage from './QuizPage'
import ResultPage from './ResultPage'


const App = () => {
  const [rightAnswers, setRightAnswers] = useState(0)
  const [resultsArray, setResultsArray] = useState([])

  const countAnswer = () => {
    setRightAnswers(rightAnswers+1)
  }

  const resetAnswers = () => {
    setRightAnswers(0)
    setResultsArray([])
  }

  /**
   *  Function: resultCollection
   *  Gathers each question and an array of Objects
   * @param {object} obj is the json format of the answered question
   * @param {number} input if the condition to check if the answer is right or wrong 
   */
  const resultCollection = (obj, input) => {
    if(input === 0){
      setResultsArray(resultsArray => [...resultsArray, {correct: false, question: obj}])
    }
    else if(input === 1){
      setResultsArray(resultsArray => [...resultsArray, {correct: true, question: obj}])
    }
  }

  return (
    <Router>
      <Container fixed>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/quiz">
            <QuizPage countAnswer={countAnswer} resultCollection={resultCollection}/>
          </Route>
          <Route path="/results">
            <ResultPage rightAnswers={rightAnswers} resetAnswers={resetAnswers} resultsArray={resultsArray}/>
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
