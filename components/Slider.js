import React from 'react'
import ReactDOM from 'react-dom'
import RCSlider from 'rc-slider'

export default class Slider extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="slider-group">
        <RCSlider className="slider"
          dots
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          marks={this.props.marks}
          defaultValue={this.props.defaultValue}
          value={this.props.val}
          tipFormatter={null}
          onChange={this.props.handleOnChange} />
        <p>Value is: <span id="slider-value">{this.props.val}</span></p>
      </div>
    )
  }
}
