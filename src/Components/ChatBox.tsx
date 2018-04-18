import * as React from 'react';
import glamorous from "glamorous";

const ChatBox = (props: any) => {
  return(
    <ChatBoxStyles>
      <FakeInput
        type="text"
        placeholder={'Write something'}
        value={props.message}
        onChange={(event: any) => props.onChatBoxChange(event.target.value)}
      >{props.message}</FakeInput>
    </ChatBoxStyles>
  );
};
export default ChatBox;


const ChatBoxStyles = glamorous.footer({
  padding: '0 10px 10px 10px',
});

const FakeInput = glamorous.span({
  width: '100%',
  padding: '12px 20px',
  boxSizing: 'border-box',
  border: 'none',
  fontFamily: '"Raleway", sans-serif',
  borderRadius: '500px',
  letterSpacing: 0.3,
  display: 'block',
  background: 'white',
  minHeight: 40,
  textAlign: 'left',
  fontSize: 14,
  '&:focus': {
    boxShadow: 'inset 0 0 5px #ced4e0',
    outline: 'none',
  }
});
