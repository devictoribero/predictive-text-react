import * as React from 'react';
import Keyboard from "../Keyboard";
import glamorous from "glamorous";


const PhoneStyles = glamorous.main({
  'border': '2px solid #e0e1e2',
  'border-radius': '6px',
  'background': 'white',
  'padding-top': '20px',
  'padding-bottom': '30px',
  'box-shadow': '0 0 1em 0.25em rgba(0,0,0,0.2)',
});

const Phone = (props:any) => {
  return (
    <PhoneStyles>

      {props.children}
      <Keyboard />

    </PhoneStyles>
  );
};
export default Phone;