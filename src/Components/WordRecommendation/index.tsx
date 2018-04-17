import * as React from 'react';
import glamorous from "glamorous";

const WordRecommendation = (props:any) => {
  return <WordRecommendationStyles>{props.text}</WordRecommendationStyles>;
};
export default WordRecommendation;


const WordRecommendationStyles = glamorous.li({
  'textAlign': 'left',
  'listStyle': 'none',
});
