import * as React from 'react';
import glamorous from "glamorous";

const Screen = (props:any) => <ScreenBorderStyles>{props.children}</ScreenBorderStyles>;
export default Screen;


const ScreenBorderStyles = glamorous.div({
  border: '5px solid black',
  background: 'white',
  height: '100%',
});
