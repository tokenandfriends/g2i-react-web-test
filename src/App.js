import React from 'react'
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


const App = () => {
  return (
    <Router>
      <Container fixed>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/quiz">
            <QuizPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
