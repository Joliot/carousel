import React, { Component } from 'react'

import Previous from '../../components/previous/previous'
import Carousel from '../../components/carousel/carousel'
import Next from '../../components/next/next'

import Spinner from '../../assets/ripple.gif'

import './Canvas.css';

class Canvas extends Component {
  constructor (props) {
    super(props)

    this.state={
      campaigns: null,
      length: 0,
      position: 0,
      previousIsActive: false,
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
      const position = this.state.position
      if (position > 3) {
        this.setState({
          position: this.state.position - 3,
          nextIsActive: true,
        })
      } else {
        this.setState({
          position: this.state.position - position,
          previousIsActive: false,
          nextIsActive: true,
        })
      }
    }
  }

  handleNext(){
    if (this.state.nextIsActive) {
      const difference = this.state.length - (this.state.position + 3)
      if (difference > 3) {
        this.setState({
          position: this.state.position + 3,
          previousIsActive: true,
        })
      } else {
        this.setState({
          position: this.state.position + difference,
          nextIsActive: false,
          previousIsActive: true,
        })
      }
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
