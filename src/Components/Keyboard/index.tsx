import * as React from 'react';
import glamorous from 'glamorous';

const PhoneKeyboard = glamorous.div({
  'width': '200px',
  'background': 'red',
});

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
    </PhoneKeyboard>
  );
};
export default Keyboard;

const KeyboardCell = (props: any) => {
  return(
    <div className="phone__keyboard-cell">
      <span className="phone__keyboard-number">{props.number_cell}</span>
      <span className="phone__keyboard-chars-per-number">
        {props.characters.map((char: string) => char)}
      </span>
    </div>
  );
};