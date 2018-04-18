import * as React from 'react';
import glamorous from "glamorous";

import Conversation from "./Conversation";
import ChatBox from "./ChatBox";

const ChatWindow = (props: any) => {
  return (
    <ChatWrapperStyles>
      <Conversation conversation={props.conversation}/>
      <ChatBox
        message={props.message ? props.message : 'Press some numbers...'}
      />
    </ChatWrapperStyles>
  );
};
export default ChatWindow;


const bg_url = 'https://i.pinimg.com/originals/8f/ba/cb/8fbacbd464e996966eb9d4a6b7a9c21e.jpg';
const ChatWrapperStyles = glamorous.div({
  background: `url(${bg_url})`,
  backgroundSize: 'contain',
  backgroundAttachment: 'fixed',
  minHeight: '200px',
  position: 'relative',
  maxHeight: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'space-between',
});
