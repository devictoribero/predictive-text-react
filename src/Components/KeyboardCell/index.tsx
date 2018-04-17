import * as React from 'react';
import glamorous from 'glamorous';

const KeyboardCellStyles = glamorous.div({
  'position': 'relative',
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'padding': '9px',
  'width': '33%',
  'height': '60px',
  'boxSizing': 'border-box',
  'fontFamily': '"Raleway", sans-serif',
});

const KeyboardCharactersStyles = glamorous.span({
  'fontWeight': 'bold',
});

const KeyboardNumberStyles = glamorous.span({
  'position': 'absolute',
  'top': '10px',
  'right': '15px',
  'fontSize': '12px',
});

const KeyboardCell = (props: any) => {
  return(
    <KeyboardCellStyles>
      <KeyboardNumberStyles>{props.number_cell}</KeyboardNumberStyles>
      <KeyboardCharactersStyles>
        {props.characters.map((char: string) => char)}
      </KeyboardCharactersStyles>
    </KeyboardCellStyles>
  );
};
export default KeyboardCell;