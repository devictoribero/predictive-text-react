import * as React from 'react';
import glamorous from 'glamorous';

const KeyboardCellStyles = glamorous.div({
  'position': 'relative',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'padding': '9px',
  'width': '33%',
  'height': '60px',
  'box-sizing': 'border-box',
  'font-family': '"Raleway", sans-serif',
});

const KeyboardCharactersStyles = glamorous.span({
  'font-weight': 'bold',
});

const KeyboardNumberStyles = glamorous.span({
  'font-weight': 'light',
  'position': 'absolute',
  'top': '10px',
  'right': '15px',
  'font-size': '12px',
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