import * as React from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import RandomInt from './RandomInt';

interface AppProps {

}

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  const client = new ApolloClient();

  return (
    <ApolloProvider client={client}>
      <RandomInt />
    </ApolloProvider>
  );
};

export default App;
