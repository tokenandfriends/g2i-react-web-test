import React, {} from 'react'
// material ui
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
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

  function unescape(str){
    return str.replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&quot;/g, '"')
              .replace(/&amp;/g, "&")
              .replace(/&#039;/g, "'")
  }

  return(
    <Grid container spacing={3} className={classes.root}>
      {console.log('what is the question? ', question)}
      <Grid item xs={12} md={12}>
        <h1>{question.category}</h1>
      </Grid>
      <Grid item xs={12} md={12} className={classes.box}>
        <p className={classes.text}>
          {unescape(question.question)}
        </p>
      </Grid>
    </Grid>
  )
}

export default RenderQuestion