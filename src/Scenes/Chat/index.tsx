import * as React from 'react';
import glamorous from 'glamorous';

import Phone from "../../Components/Phone";

const ChatScene = glamorous.section({
  'background' : 'linear-gradient(108deg, #26D0CE, #1A2980 90%)',
  'height': '100vh',
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
});

const Chat = (props:any) => {
  return(
    <ChatScene>
      <Phone />
    </ChatScene>
  );
};
export default Chat;