import React, { Component } from 'react'

import Previous from '../Previous/Previous'
import Carousel from '../Carousel/Carousel'
import Next from '../Next/Next'

import Spinner from '../../assets/ripple.gif'

import './Canvas.css';

class Canvas extends Component {
  constructor (props) {
    super(props)

    this.state={
      campaigns: null,
      length: 0,
      position: 0,
      previousIsActive: true,
      nextIsActive: true,
    }

    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  componentDidMount() {
    const that = this

    setTimeout(function() {
      const xhr = new XMLHttpRequest()
      const url = 'https://www.bonami.cz/mcc16/campaigns'
      xhr.open('GET', url ,true)
      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const campaigns = JSON.parse(xhr.responseText)
            that.setState({
              campaigns: campaigns,
              length: campaigns.length,
            })
          } else {
            console.error(xhr.statusText);
          }
        }
      };
      xhr.send(null)
    }, 1500);
  }


  handlePrevious(){
    if (this.state.previousIsActive) {
      this.setState({
        position: this.state.position - 3,
      })
    }
  }

  handleNext(){
    if (this.state.nextIsActive) {
      this.setState({
        position: this.state.position + 3,
      })
    }
  }

  render () {
    if (this.state.campaigns === null) {
      return (
        <div className='canvas'>
          <img src={Spinner} role='presentation' className='spinner' />
        </div>
      )
    }
      const position = this.state.position
      const campaigns = this.state.campaigns.slice(position, position + 3)
      return (
        <div className='canvas'>
          <Previous onPrevious={this.handlePrevious} isActive={this.state.previousIsActive}/>
          <Carousel campaigns={campaigns} />
          <Next onNext={this.handleNext} isActive={this.state.nextIsActive}/>
        </div>
      )

  }
}

export default Canvas
