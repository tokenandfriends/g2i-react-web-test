import React, {} from 'react'
import { Link } from 'react-router-dom'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

// styles
const useStyles = makeStyles(theme => ({
  header:{
    textAlign: 'center'
  },
  content:{
    textAlign: 'center',
    marginTop: '50px'
  },
  button:{
    textDecoration: 'none'
  }
}))

const HomePage = () =>{
  const classes = useStyles()
  return(
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <h1 className={classes.header}>
            Welcome to the Trivia Challenge!
          </h1>
        </Grid>
        <Grid item xs={12} md={12} className={classes.content}>
          <p>
            You will be presented with 10 True or False questions.
          </p>
        </Grid>
        <Grid item xs={12} md={12} className={classes.content}>
          <p>
            Can you score 100%?
          </p>
        </Grid>
        <Grid item xs={12} md={12} className={classes.content}>
          <Link to="/quiz" className={classes.button}>
            <Button>
              BEGIN
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default HomePage