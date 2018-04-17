import * as React from 'react';
import glamorous from "glamorous";

const ScreenBorderStyles = glamorous.div({
  border: '5px solid black',
  background: 'white',
  height: '100%'
});

const Screen = (props:any) => {
  return(
    <ScreenBorderStyles>
      {props.children}
    </ScreenBorderStyles>
  );
};

export default Screen;