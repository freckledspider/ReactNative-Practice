import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('X', () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('X');
    AppRegistry.runApplication('X', { rootTag });
}

// /**
//  * @format
// */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);