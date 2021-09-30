import React, {} from 'react'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
// styles
const useStyles = makeStyles(theme => ({
  root:{
    textAlign: 'center'
  }
}))

const ResultPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      result page....
    </div>
  )
}

export default ResultPage