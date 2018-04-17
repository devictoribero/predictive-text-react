import * as React from 'react';
import glamorous from 'glamorous';
import KeyboardCell from "../KeyboardCell";
import Recommendations from "../Recommendations";


const Keyboard = (props:any) => {
  const KEYBOARD_CONFIGURATION = [
    ['.',',','?'],
    ['A','B','C'],
    ['D','E','F'],
    ['G','H','I'],
    ['J','K','L'],
    ['M','N','O'],
    ['P','Q','R', 'S'],
    ['T','U','V'],
    ['W','X','Y', 'Z'],
  ];

  return (
    <KeyboardWrapper>
      <Recommendations recommendations={['as', 'fgdfg', 'dfgdfg']}/>

      <PhoneKeyboard>
        {KEYBOARD_CONFIGURATION.map((characters: any, i: number) => {
          return (
            <KeyboardCell
              key={i}
              number_cell={i}
              characters={characters}
            />
          );
        })}

        <KeyboardCell number_cell={''} characters={['*']} />
        <KeyboardCell number_cell={'#'} characters={[0]} />
        <KeyboardCell number_cell={''} characters={['$']} />
      </PhoneKeyboard>
    </KeyboardWrapper>
  );
};
export default Keyboard;


const KeyboardWrapper = glamorous.div({
  'borderTop': '1px solid #efefef',
});

const PhoneKeyboard = glamorous.div({
  'width': '100%',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'flexWrap': 'wrap',
  'borderTop': '1px solid #efefef',
});
