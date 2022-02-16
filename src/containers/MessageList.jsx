/* eslint-disable */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/Message';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel)
  }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
