import * as React from 'react';
import glamorous from "glamorous";

import ConversationExample from '../ConversationExample';
import Keyboard from "./Keyboard";
import ChatWindow from "./ChatWindow";
import CalculatePredictiveTextService from "../app/TextPrediction/Services/CalculatePredictiveText/CalculatePredictiveTextService";

interface PhoneState {
  isKeyboardShown: boolean,
  message: string,
  conversation: object,
  recommendations: Array<any>,
  calculatePredictiveText: CalculatePredictiveTextService
}

class PhoneComponent extends React.Component<{}, PhoneState> {
  constructor(props: any, calculatePredictiveText: CalculatePredictiveTextService) {
    super(props);
    this.state = {
      calculatePredictiveText: calculatePredictiveText,
      isKeyboardShown: true,
      message: '',
      conversation: ConversationExample,
      recommendations: [],
    };
  }

  _handleOnChatBoxChange(value: string) {
    this.setState({ message: value });
  }

  _handleOnCellClick(cellNumber: number) {

  }

  render() {
    return (
      <Phone>
        <PhoneInner>

          <ChatWindow
            message={this.state.message}
            conversation={this.state.conversation}
            onChatBoxChange={(value: string) => this._handleOnChatBoxChange(value)}
          />

          {this.state.isKeyboardShown && (
            <Keyboard
              onCellClick={(cellNumber: number) => this._handleOnCellClick(cellNumber)}
              recommendations={this.state.recommendations}
            />
          )}

        </PhoneInner>
      </Phone>
    );
  }
}
export default PhoneComponent;


const Phone = glamorous.main({
  borderRadius: '6px',
  background: 'black',
  paddingTop: '40px',
  paddingBottom: '60px',
  boxShadow: '0 0 1em 0.25em rgba(0,0,0,0.2)',
  width: '300px',
  height: '450px',
  overflow: 'hidden',
});

const PhoneInner = glamorous.div({
  border: '5px solid black',
  background: 'white',
  height: '100%',
});
