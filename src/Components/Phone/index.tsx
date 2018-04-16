import * as React from 'react';
import Keyboard from "../Keyboard";

const Phone = (props:any) => {
  return (
    <div className={'phone'}>
      {props.children}
      <Keyboard />
    </div>
  );
};
export default Phone;