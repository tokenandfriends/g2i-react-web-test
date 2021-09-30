import React, {} from 'react'
import { Link } from 'react-router-dom'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
//shared functions
import Unescape from '../SharedFunctions/unescape'
// styles
const useStyles = makeStyles(theme => ({
  root:{
    textAlign: 'center'
  },
  scoreboard:{
    marginTop: '-50px'
  },
  button:{
    textDecoration: 'none'
  }
}))

const ResultPage = ({rightAnswers, resetAnswers, resultsArray}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid item container spacing={3}>
        <Grid item xs={12} md={12}>
          <h1>You scored</h1>
        </Grid>
        <Grid item xs={12} md={12} className={classes.scoreboard}>
          <h1>{`${rightAnswers}/10`}</h1>
          {console.log('WHAT IS THIS??? ', resultsArray)}
          <Grid container spacing={3}>
            {
              resultsArray.map((result, key)=>(
                <Grid key={key} item xs={12} md={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={2} md={2}>
                      {result.correct === true ? '+':'-'}
                    </Grid>
                    <Grid item xs={10} md={10}>
                      {Unescape(result.question.question)}
                    </Grid>
                  </Grid>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Link to="/" className={classes.button}>
            <Button onClick={() => resetAnswers()}>
              PLAY AGAIN?
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default ResultPage