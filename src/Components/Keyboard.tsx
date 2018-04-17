import * as React from 'react';
import glamorous from 'glamorous';
import KeyboardCell from "./KeyboardCell";
import Recommendations from "./ListWordRecommendations";


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
    <div>
      <Recommendations recommendations={['casa', 'cabra', 'casi', 'caso', 'casar']}/>

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
    </div>
  );
};
export default Keyboard;


const PhoneKeyboard = glamorous.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  background: '#dce2ed',
});
