import * as React from 'react';
import glamorous from "glamorous";

const ChatBox = (props) => {
  return(
    <ChatBoxStyles>
      <Input type="text" placeholder={'Write something'}/>
    </ChatBoxStyles>
  );
};
export default ChatBox;


const ChatBoxStyles = glamorous.div({
  padding: '0 10px 10px 10px',
});

const Input = glamorous.input({
  width: '100%',
  padding: '12px',
  boxSizing: 'border-box',
  border: 'none',
  fontFamily: '"Raleway", sans-serif',
  borderRadius: '500px',
});
