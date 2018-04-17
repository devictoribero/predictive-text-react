import * as React from 'react';
import glamorous from "glamorous";
import WordRecommendation from "../WordRecommendation";

const RecommendationsStyles = glamorous.footer({});

const RecommendedWordsList = glamorous.ul({
  'padding': '0px',
  'margin': '0px',
  'textAlign': 'left',
});

const Recommendations = (props: any) => {
  return (
    <RecommendationsStyles>
      <RecommendedWordsList>
        {props.recommendations.map((word: string, i: number) => {
          return <WordRecommendation key={i} text={word}/>
        })}
      </RecommendedWordsList>
    </RecommendationsStyles>
  );
};
export default Recommendations;