/**
 * @format
 */

 import './shim.js'
 // ...the rest of your code
 import crypto from 'crypto'



import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
