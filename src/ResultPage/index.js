import React, {} from 'react'
import { Link } from 'react-router-dom'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
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

const ResultPage = ({rightAnswers}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid item container spacing={3}>
        <Grid item xs={12} md={12}>
          <h1>You scored</h1>
        </Grid>
        <Grid item xs={12} md={12} className={classes.scoreboard}>
          <h1>{`${rightAnswers}/10`}</h1>
        </Grid>
        <Grid item xs={12} md={12}>
          <Link to="/quiz" className={classes.button}>
            <Button>
              PLAY AGAIN?
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default ResultPage