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
      <Recommendations recommendations={props.recommendations}/>

      <PhoneKeyboard>
        {KEYBOARD_CONFIGURATION.map((characters: any, i: number) => {
          return (
            <KeyboardCell
              key={i}
              onCellClick={() => props.onCellClick(i)}
              number_cell={i}
              characters={characters}
            />
          );
        })}

        <KeyboardCell
          number_cell={''}
          characters={['*']}
          onCellClick={() => props.onCellClick(-1)}
        />
        <KeyboardCell
          number_cell={'#'}
          characters={[0]}
          onCellClick={() => props.onCellClick(-1)}
        />
        <KeyboardCell
          number_cell={''}
          characters={['$']}
          onCellClick={() => props.onCellClick(-1)}
        />
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
