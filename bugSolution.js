/* bug.js */
import * as Constants from 'expo-constants';

const platform = Constants.platform;

if (platform === 'ios') {
  console.log('This is iOS');
} else if (platform === 'android') {
  console.log('This is Android');
} else {
  console.log('Unknown platform:', platform);
}


/* bugSolution.js */
import * as Constants from 'expo-constants';

const isAndroid = Constants.manifest.android !== undefined;

if (Constants.platform === 'ios') {
  console.log('This is iOS');
} else if (isAndroid) {
  console.log('This is Android');
} else {
  console.log('Unknown platform');
}
