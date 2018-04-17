import * as React from 'react';
import glamorous from "glamorous";

const ChatBox = (props: any) => {
  return(
    <ChatBoxStyles>
      <Input
        type="text"
        placeholder={'Write something'}
        onChange={value => props.onChatBoxChange(value)}
      />
    </ChatBoxStyles>
  );
};
export default ChatBox;


const ChatBoxStyles = glamorous.footer({
  padding: '0 10px 10px 10px',
});

const Input = glamorous.input({
  width: '100%',
  padding: '12px 20px',
  boxSizing: 'border-box',
  border: 'none',
  fontFamily: '"Raleway", sans-serif',
  borderRadius: '500px',
  letterSpacing: 0.3,
  '&:focus': {
    boxShadow: 'inset 0 0 5px #ced4e0',
    outline: 'none',
  }
});
