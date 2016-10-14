import React, { Component } from 'react'

import Previous from '../Previous/Previous'
import Carousel from '../Carousel/Carousel'
import Next from '../Next/Next'

import './Canvas.css';

class Canvas extends Component {
  constructor (props) {
    super(props)

    var xhr = new XMLHttpRequest();
    var url = 'https://www.bonami.cz/mcc16/campaigns';
    xhr.open('GET', url ,false);
    xhr.send();
    var campaigns = JSON.parse(xhr.responseText);

    this.state = {
      campaigns: campaigns,
      length: campaigns.length,
      position: 0,
    }
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  handlePrevious(){
    if (this.state.position !== 0) {
      this.setState({
        position: this.state.position - 1
      })
    }
  }

  handleNext(){
    if (this.state.position !== this.state.length - 3) {
      this.setState({
        position: this.state.position + 1
      })
    }
  }

  render () {
    const position = this.state.position
    const campaigns = this.state.campaigns.slice(position, position + 3)
    return (
      <div className='canvas'>
        <Previous onPrevious={this.handlePrevious} />
        <Carousel campaigns={campaigns} />
        <Next onNext={this.handleNext} />
      </div>
    )
  }
}

export default Canvas
