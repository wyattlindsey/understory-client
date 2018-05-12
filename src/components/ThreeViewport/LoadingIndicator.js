import * as React from 'react'
import { CircularProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid'
import cssModules from 'react-css-modules'
import styles from './ThreeViewport.css'

class LoadingIndicator extends React.PureComponent {
  render() {
    return (
      <Grid
        alignItems="center"
        container
        direction="column"
        justify="center"
        styleName="wrapper"
      >
        <CircularProgress />
      </Grid>
    )
  }
}

export default cssModules(LoadingIndicator, styles)
