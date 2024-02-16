/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Paypal from './new/Paypal';
import Stripe from './new/Stripe';


const ReduxA = () => {
    // <Provider store={store}>
    //     <App />
    // </Provider>
}

AppRegistry.registerComponent(appName, () => App);
