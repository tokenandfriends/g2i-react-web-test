import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
// components
import RenderQuestion from './RenderQuestion'

// styles
const useStyles = makeStyles(theme => ({
  root:{
    textAlign: 'center'
  }
}))

const QuizPage = ({countAnswer}) => {
  const history = useHistory()
  const classes = useStyles()
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [count, setCount] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    Axios.get(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`)
      .then(res => {
        setQuestions(res.data.results)
        setIsLoading(false)
      })
  }, [])

  const checkAnswer = (answer) => {
    if(questions[currentIndex].correct_answer.toLowerCase() === answer){
      console.log('answer is RIGHT!')
      countAnswer()
    }
  }

  const nextQuestion = (answer) => {
    if(count < 10){
      checkAnswer(answer)
      setCount(count+1)
      setCurrentIndex(currentIndex+1)
    }
    else{
      history.push("/results")
    }
  }

  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          {
            !isLoading ?
              <RenderQuestion question={questions[currentIndex]} />
              :
              <p>loading...</p>
          }
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button onClick={() => nextQuestion('true')}>
                True
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button onClick={() => nextQuestion('false')}>
                False
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          {`${count} of 10`}
        </Grid>
      </Grid>
    </div>
  )
}

export default QuizPage