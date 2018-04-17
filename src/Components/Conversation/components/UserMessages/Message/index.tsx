import * as React from 'react';
import glamorous from "glamorous";

const Message = (props:any) => {
  return <MessageStylesStyles>{props.text}</MessageStylesStyles>;
};
export default Message;


const MessageStylesStyles = glamorous.p({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  background: '#dcf8c6',
  borderRadius: '7px',
  border: '1px solid #c7f4a4',
  fontSize: 15,
  margin: '10px 0 0 0',
  '&:first-child': {
    marginTop: '0px',
  }
});
