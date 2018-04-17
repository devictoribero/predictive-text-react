import * as React from 'react';
import glamorous from "glamorous";
import Message from "./Message";


const UserMessages = (props:any) => {
  return (
    <UserMessageStyles>

      <Avatar
        src={props.groupOfMessages.user.avatar}
        alt={`Avatar of ${props.groupOfMessages.user.name}`}
      />

      <BlockMessagesStyles>
        {props.groupOfMessages.data.map((msg: string, i: number) => {
          return <Message key={i} text={msg} />
        })}
      </BlockMessagesStyles>

    </UserMessageStyles>
  );
};
export default UserMessages;


const UserMessageStyles = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  overflowY: 'auto',
  height: '100%',
  boxSizing: 'border-box',
  minHeight: 150,
  maxHeight: 170,
});

const Avatar = glamorous.img({
  width: '40px',
  height: '40px',
  borderRadius: '500px',
  border: '1px solid #efefef',
});

const BlockMessagesStyles = glamorous.div({
  marginLeft: '10px',
});
