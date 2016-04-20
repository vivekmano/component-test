import React from 'react'
import ReactDOM from 'react-dom'

import SliderExample from './SliderExample'
import NVD3Chart from 'react-nvd3'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      val1: 100,
      val2: 100,
    }
    this.handleOnChange1 = this.handleOnChange1.bind(this)
    this.handleOnChange2 = this.handleOnChange2.bind(this)
  }

  handleOnChange1(value) {
    this.setState({ val1: value })
  }

  handleOnChange2(value) {
    this.setState({ val2: value })
  }

  render() {
    var TestData = [
      {
        key: "Slider1",
        color: "#51A351",
        values:
        [
          { x : "A", y : this.state.val1 }
        ]
      },
      {
        key: "Slider2",
        color: "#BD362F",
        values:
        [
          { x : "A", y : this.state.val2 }
        ]
      }
    ];

    var chart = nv.models.multiBarHorizontalChart();
    chart.multibar.stacked(true); // default to stacked
    //chart.showControls(false); // don't show controls
    d3.select('#chart svg').datum(TestData).transition().duration(500).call(chart);
    nv.utils.windowResize(chart.update);

    return (
      <div>
        <SliderExample
          val={this.state.val1}
          handleOnChange={this.handleOnChange1} />
        <SliderExample
          val={this.state.val2}
          handleOnChange={this.handleOnChange2} />
      </div>
    )
  }
}
