import * as React from 'react';
import glamorous from "glamorous";

import Conversation from "../Conversation";
import ChatBox from "../ChatBox/index";
import Recommendations from "../Recommendations";

const conversation: Array<object> = [
  {
    user: {
      name: 'Victor Ribero',
      avatar: 'https://avatars0.githubusercontent.com/u/16169890?s=400&v=4',
      messages: [
        'This is the exercise presented to Kiwi.com',
      ],
    },
  }
];

const bg_url = 'https://i.pinimg.com/originals/8f/ba/cb/8fbacbd464e996966eb9d4a6b7a9c21e.jpg';
const ChatWrapperStyles = glamorous.div({
  background: `url(${bg_url})`,
  backgroundSize: 'contain',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  minHeight: '300px',
  position: 'relative',
  height: '100%',
});

const Chat = (props: any) => {
  return (
    <ChatWrapperStyles>
      <Conversation conversation={conversation}/>
      <ChatBox />
      <Recommendations recommendations={['as', 'fgdfg', 'dfgdfg']}/>
    </ChatWrapperStyles>
  );
};
export default Chat;