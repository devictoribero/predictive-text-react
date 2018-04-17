import * as React from 'react';
import glamorous from "glamorous";

import UserMessages from "./components/UserMessages";

const Conversation = (props:any) => {
  return (
    <ConversationStyles>
      { props.conversation.length > 0 &&
        props.conversation.map((userMessages: any, i: number) => {
          return <UserMessages key={i} userMessages={userMessages} />;
        })
      }
    </ConversationStyles>
  );
};
export default Conversation;


const ConversationStyles = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  height: 'auto',
  maxHeight: '100%',
  boxSizing: 'border-box',
});
