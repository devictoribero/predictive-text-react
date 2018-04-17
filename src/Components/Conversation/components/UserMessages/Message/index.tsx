import * as React from 'react';
import glamorous from "glamorous";

const MessageStylesStyles = glamorous.p({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  background: '#dcf8c6',
  borderRadius: '7px',
  boxShadow : '0 1px 0.5px rgba(0, 0, 0, 0.13)',
  margin: '10px 0 0 0',
  '&:first-child': {
    marginTop: '0px',
  }
});

const Message = (props:any) => {
  return <MessageStylesStyles>{props.text}</MessageStylesStyles>;
};
export default Message;