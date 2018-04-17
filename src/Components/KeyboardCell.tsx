import * as React from 'react';
import glamorous from 'glamorous';

const KeyboardCell = (props: any) => {
  return(
    <KeyboardCellStyles type='button' onClick={() => props.onCellClick()}>
      <KeyboardNumberStyles>{props.number_cell}</KeyboardNumberStyles>
      <KeyboardCharactersStyles>
        {props.characters.map((char: string) => char)}
      </KeyboardCharactersStyles>
    </KeyboardCellStyles>
  );
};
export default KeyboardCell;


const KeyboardCellStyles = glamorous.button({
  background: 'transparent',
  border: 'none',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '9px',
  width: '33%',
  height: '45px',
  boxSizing: 'border-box',
  fontFamily: '"Raleway", sans-serif',
});

const KeyboardCharactersStyles = glamorous.span({
  fontWeight: 'bold',
});

const KeyboardNumberStyles = glamorous.span({
  position: 'absolute',
  top: '10px',
  right: '15px',
  fontSize: '12px',
});
