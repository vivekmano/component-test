import React from 'react'
import ReactDOM from 'react-dom'

import SliderExample from './SliderExample'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      val: 0
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleOnChange(value) {
    this.setState({ val: value })
  }
  render() {
    return (
        <SliderExample
          val={this.state.val}
          handleOnChange={this.handleOnChange} />
    )
  }
}
