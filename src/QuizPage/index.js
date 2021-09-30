import React, {useState, useEffect} from 'react'
import Axios from 'axios'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// components
import RenderQuestion from './RenderQuestion'

// styles
const useStyles = makeStyles(theme => ({
  root:{
    textAlign: 'center'
  }
}))

const QuizPage = () => {
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
          {`${count} of 10`}
        </Grid>
      </Grid>
    </div>
  )
}

export default QuizPage