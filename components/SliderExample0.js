import React from 'react'
import ReactDOM from 'react-dom'
import RCSlider from 'rc-slider'

export default class SliderExample extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="slider-example">
        <RCSlider className="slider-test"
          min={0}
          max={500}
          tipFormatter={null}
          onChange={this.props.handleOnChange} />
        <p>Value is: <span id="slider-value">{this.props.val}</span></p>
      </div>
    )
  }
}
