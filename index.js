/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { en, registerTranslation } from 'react-native-paper-dates';
import 'react-native-get-random-values';

registerTranslation('en', en);

LogBox.ignoreLogs(['Require cycle: node_modules/victory']);

AppRegistry.registerComponent(appName, () => App);
