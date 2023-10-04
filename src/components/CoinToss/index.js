// Write your code here

import {Component} from 'react'

import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, imageUrl: headsImageUrl}

  tossCoin = () => {
    const toss = Math.ceil(Math.random() * 2)
    if (toss === 1) {
      this.setState({imageUrl: headsImageUrl})
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
    } else {
      this.setState({imageUrl: tailsImageUrl})
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    }
  }

  render() {
    const {headsCount, tailsCount, imageUrl} = this.state

    return (
      <div className="bg-container">
        <div className="game-bg">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="toss-image" />
          <button type="button" className="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total: {`${headsCount + tailsCount}`}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
