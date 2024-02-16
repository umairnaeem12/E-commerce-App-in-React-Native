import React from 'react';
import Route from './src/navigation/Route';
import { StripeProvider } from '@stripe/stripe-react-native';
import Navigator from './Task/Navigation/Navigator';


const App = () => {
  return (
    // <StripeProvider publishableKey='pk_test_51OO20ZGEdCK96m9FoDQVkScjAUbSjBtez2h8pqHe5YY1M1vLnj3ly3p9MpoV3U9PnwOWkcCMY2pUfQ0kQrXCICDX00dJieD5rW'>
      <Navigator />
    // </StripeProvider>
  );
};

export default App;