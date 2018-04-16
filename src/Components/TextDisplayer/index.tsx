import * as React from 'react';
import glamorous from "glamorous";
import WordRecommendation from "../WordRecommendation";

const TextDisplayerStyles = glamorous.div({
  'padding': '20px',
});

const Title = glamorous.h1({
  'fontSize': '20px',
  'margin': '0',
  'textAlign': 'left',
});

const RecommendedWordsList = glamorous.ul({'padding': '0px'});

const TextDisplayer = (props:any) => {
  return (
    <TextDisplayerStyles>
        <header>
          <Title>Words recommended</Title>
          <RecommendedWordsList>
            {['as','agh','asd','asd'].map((word:string) => {
              return <WordRecommendation text={word} />
            })}
          </RecommendedWordsList>
        </header>
    </TextDisplayerStyles>
  );
};
export default TextDisplayer;