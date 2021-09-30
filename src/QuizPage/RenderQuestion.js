import React, {} from 'react'
// material ui
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
//shared functions
import Unescape from '../SharedFunctions/unescape'
// styles
const useStyles = makeStyles(theme => ({
  root:{
    textAlign: 'center'
  },
  box:{
    border: '2px solid black'
  },
  text: {
    padding: '20px'
  }
}))

const RenderQuestion = ({question}) => {
  const classes = useStyles()

  return(
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} md={12}>
        <h1>{question.category}</h1>
      </Grid>
      <Grid item xs={12} md={12} className={classes.box}>
        <p className={classes.text}>
          {Unescape(question.question)}
        </p>
      </Grid>
    </Grid>
  )
}

export default RenderQuestion