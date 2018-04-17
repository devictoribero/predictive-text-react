import * as React from 'react';
import glamorous from "glamorous";

const ChatBoxStyles = glamorous.div(props => ({
  padding: '10px',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
}));

const Input = glamorous.input({
  width: '100%',
  padding: '12px',
  boxSizing: 'border-box',
  border: 'none',
  fontFamily: '"Raleway", sans-serif',
  borderRadius: '500px',
});

const ChatBox = (props: any) => {
  return(
    <ChatBoxStyles>
      <Input type="text" placeholder={'Write something'}/>
    </ChatBoxStyles>
  );
};
export default ChatBox;