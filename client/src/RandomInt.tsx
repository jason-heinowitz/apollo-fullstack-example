import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import NumberInput from './NumberInput';

interface PropType {

}

const RandomInt: React.FunctionComponent<PropType> = (props: PropType) => {
  const query = gql`
    query GetRandomInt($maxNumber: Int!) {
      randomInt(maxNumber: $maxNumber)
    }
  `;

  const {
    loading, error, data, refetch,
  } = useQuery(query, {
    variables: { maxNumber: 10 },
  });

  return (
    <>
      <NumberInput setNumber={(newNumber: number): void => {
        refetch({ maxNumber: newNumber });
      }}
      />
      {loading ? <h1>Loading...</h1> : error ? <h1>An error occured.</h1> : <h1>{data.randomInt}</h1>}
    </>
  );
};

export default RandomInt;
