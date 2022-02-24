import React from 'react';
import ChannelList from '../containers/ChannelList';
import MessageList from '../containers/MessageList';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
