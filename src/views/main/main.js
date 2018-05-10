
import React from 'react'
import cssModules from 'react-css-modules'
import styles from './main.css'

import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

import ShapeViewer from 'components/ShapeViewer'

import debounce from 'lodash/debounce'

type State = {
  width: number | null,
}

class Main extends React.Component<void, State> {
  state = {
    width: null,
  }

  componentDidMount() {
    const width = this.shapeViewerRef.clientWidth
    this.setState({ width })

    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  /* eslint-disable no-invalid-this */

  handleResize = debounce(() => {
    if (typeof window === 'undefined') return
    const width = window.innerWidth
    this.setState({ width })
  }, 100)

  /* eslint-enable no-invalid-this */

  render() {
    return (
      <div>
        <Grid alignItems="center" container direction="column">
          <Typography gutterBottom variant="display3">
            Universal React Redux ThreeJS
          </Typography>
          <div
            ref={c => {
              this.shapeViewerRef = c
            }}
            styleName="shape-viewer"
          >
            <ShapeViewer width={this.state.width} />
          </div>
        </Grid>
      </div>
    )
  }
}

export default cssModules(Main, styles)
