import * as React from 'react';
import Keyboard from "../Keyboard";
import glamorous from "glamorous";
import Screen from "../Screen";
import TextDisplayer from "../TextDisplayer";


const PhoneStyles = glamorous.main({
  'border-radius': '6px',
  'background': 'black',
  'padding-top': '40px',
  'padding-bottom': '60px',
  'box-shadow': '0 0 1em 0.25em rgba(0,0,0,0.2)',
  'width': '275px',
});

const Phone = (props:any) => {
  return (
    <PhoneStyles>
      <Screen>

        <TextDisplayer/>

        <Keyboard />

      </Screen>
    </PhoneStyles>
  );
};
export default Phone;