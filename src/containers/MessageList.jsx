/* eslint-disable */
import React, { Component } from 'react';
import Message from '../components/Message';

class MessageList extends Component {
  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{}</span>
        </div>
        <div className="channel-content">
          { this.props.messages.map((message) => {
            return <Message key={message.id} message={message} />
          })}
        </div>
      </div>
    )
  }
}

export default MessageList;
