import * as React from 'react';
import glamorous from "glamorous";

import Conversation from "../Conversation";
import ChatBox from "../ChatBox/index";

const conversation: Array<object> = [
  {
    user: {
      name: 'Victor Ribero',
      avatar: 'https://avatars0.githubusercontent.com/u/16169890?s=400&v=4',
      messages: [
        'To start, start typing on the chatbox',
        'Don\'t forget to check my website www.victorribero.com',
      ],
    },
  }
];

const Chat = (props: any) => {
  return (
    <ChatWrapperStyles>
      <Conversation conversation={conversation}/>
      <ChatBox />
    </ChatWrapperStyles>
  );
};
export default Chat;


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
