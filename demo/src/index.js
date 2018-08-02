import './styles.css'

import React, {Component} from 'react'
import {render} from 'react-dom'

import PixelShifter from '../../src'

class Demo extends Component {
  state = {
    shifted: true
  }

  toggleShift = () => {
    this.setState(state => ({
      shifted: !state.shifted
    }))
  }

  render() {
    const { shifted } = this.state

    return (
      <div className="app">
        <PixelShifter
          x={shifted ? -5 : 0}
          reason="Optically align title with paragraphs below"
        >
          <h1>Hello World</h1>
        </PixelShifter>
        <p>
          I've noticed that text elements tend to have a bit of "built-in" side
          padding. This is especially noticeable with large headings. If I want
          things to align, it helps to offset things by a few pixels.
        </p>
        <p>
          I created this component to make it easy to add slight pixel tweaks.
          Because 'reason' is a mandatory prop, it forces you to explain what
          it's doing, so that when you revisit this code in 4 months you'll know
          why you shifted it slightly.
        </p>
        <br/>
        <br/>
        <label>
          <input
            type="checkbox"
            checked={shifted}
            onChange={this.toggleShift}
          />
          Shift heading
        </label>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
