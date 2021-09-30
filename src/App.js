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

  const countAnswer = () => {
    setRightAnswers(rightAnswers+1)
  }

  const resetAnswers = () => {
    setRightAnswers(0)
  }

  return (
    <Router>
      <Container fixed>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/quiz">
            <QuizPage countAnswer={countAnswer}/>
          </Route>
          <Route path="/results">
            <ResultPage rightAnswers={rightAnswers} resetAnswers={resetAnswers}/>
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
