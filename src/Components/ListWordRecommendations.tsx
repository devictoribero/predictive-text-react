import * as React from 'react';
import glamorous from "glamorous";

const ListWordRecommendations = (props: any) => {
  return (
      <RecommendedListStyle>
        {props.recommendations.map((word: string, i: number) => {
          return <RecommendationStyle key={i}>{word}</RecommendationStyle>;
        })}
      </RecommendedListStyle>
  );
};
export default ListWordRecommendations;


const RecommendedListStyle = glamorous.ul({
  padding: '0',
  margin: 0,
  height: 50,
  background: '#ced4e0',
  textAlign: 'left',
  overflowX: 'auto',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const RecommendationStyle = glamorous.li({
  textAlign: 'left',
  listStyle: 'none',
  width: 'auto',
  height: 20,
  padding: '0px 20px',
  fontWeight: 'bold',
  fontSize: 14,
  borderRight: '1px solid #abafba',
  '&:last-child': {
    borderRight: 'none',
  },
});
