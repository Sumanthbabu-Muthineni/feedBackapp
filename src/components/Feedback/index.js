import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  returnFeedback = () => {
    this.setState({isEmojiClicked: false})
  }

  renderEmojiContainer = () => {
    const {resources} = this.props
    const EmojisList = resources.emojis
    return (
      <div className="bg-container">
        <div className="bg-container2">
          <h1>
            How satisfied are you with our <br /> customer support performance?
          </h1>
          <ul className="emoji-container">
            {EmojisList.map(EachEmoji => (
              <li
                key={EachEmoji.id}
                className="list-Container"
                onClick={this.returnFeedback}
              >
                <img
                  alt={EachEmoji.name}
                  className="emoji-size"
                  src={EachEmoji.imageUrl}
                />
                <p>{EachEmoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankYouContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        <div className="bg-container2">
          <img src={loveEmojiUrl} alt="love emoji" />
          <h1>Thank you!</h1>
          <p>
            We’ll use your feedback to improve our customer support performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state

    return (
      <div>
        {isEmojiClicked
          ? this.renderEmojiContainer()
          : this.renderThankYouContainer()}
      </div>
    )
  }
}

export default Feedback
