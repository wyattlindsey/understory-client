// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import cssModules from 'react-css-modules'
import styles from './main.css'

import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import { SliderPicker } from 'react-color'

import Store from 'store'
import { setColor } from 'actions/shape'
import type { Color } from 'types/shape'

import ThreeViewport from 'components/ThreeViewport'

import debounce from 'lodash/debounce'

type Props = {
  color: Color,
}

type State = {
  width: number | null,
}

class Main extends React.Component<Props, State> {
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

  handleColorChange = ({ rgb }) => {
    Store.dispatch(setColor(rgb))
  }

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
            <SliderPicker
              color={this.props.color}
              onChange={this.handleColorChange}
            />
            <ThreeViewport width={this.state.width} />
          </div>
        </Grid>
      </div>
    )
  }
}

export default connect(state => {
  return {
    color: state.shape.color,
  }
})(cssModules(Main, styles))
