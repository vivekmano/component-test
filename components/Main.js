import React from 'react'
import ReactDOM from 'react-dom'

import Slider from './Slider'
import NVD3Chart from 'react-nvd3'

//Slider constants
const sliderMin = 0;
const sliderMax = 500;
const defaultValue = 100;
const step = 50;
const yDomainMax = 1000;
const marks = {
  0: '$0',
  200: '$200',
  700: '$700',
};

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      val1: 100,
      val2: 100,
      min: 0,
      max: 500,
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

    var chart = nv.models.multiBarHorizontalChart()
      .stacked(true) // default to stacked
      .showValues(true)
      .showControls(false)
      .yDomain([this.state.min, yDomainMax])
      .height(150);
    d3.select('#chart svg').datum(TestData).transition().duration(500).call(chart);
    nv.utils.windowResize(chart.update);

    return (
      <div>
        <Slider
          dots
          val={this.state.val1}
          handleOnChange={this.handleOnChange1}
          min={sliderMin}
          max={sliderMax}
          defaultValue={defaultValue}
          step={step}
          marks={marks}
          />
        <Slider
          val={this.state.val2}
          handleOnChange={this.handleOnChange2}
          min={sliderMin}
          max={sliderMax}
          defaultValue={defaultValue}
          step={step}/>
      </div>
    )
  }
}
