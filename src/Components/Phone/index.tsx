import * as React from 'react';
import Keyboard from "../Keyboard";
import glamorous from "glamorous";
import Screen from "../Screen";
import Chat from "../Chat";

interface PhoneState {
  isKeyboardShown: boolean,
}

const PhoneStyles = glamorous.main({
  borderRadius: '6px',
  background: 'black',
  paddingTop: '40px',
  paddingBottom: '60px',
  boxShadow: '0 0 1em 0.25em rgba(0,0,0,0.2)',
  width: '275px',
  height: '500px'
});

class Phone extends React.Component<{},PhoneState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isKeyboardShown: false
    };
  }

  render() {
    return (
      <PhoneStyles>
        <Screen>

          <Chat/>
          {this.state.isKeyboardShown && <Keyboard />}

        </Screen>
      </PhoneStyles>
    );
  }
}
export default Phone;