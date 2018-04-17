import * as React from 'react';
import Keyboard from "../Keyboard";
import glamorous from "glamorous";
import Screen from "../Screen";
import Chat from "../Chat";


const PhoneStyles = glamorous.main({
  'borderRadius': '6px',
  'background': 'black',
  'paddingTop': '40px',
  'paddingBottom': '60px',
  'boxShadow': '0 0 1em 0.25em rgba(0,0,0,0.2)',
  'width': '275px',
});

const Phone = (props:any) => {
  return (
    <PhoneStyles>
      <Screen>

        <Chat/>

        <Keyboard />

      </Screen>
    </PhoneStyles>
  );
};
export default Phone;