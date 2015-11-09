'use strict';

import { bridge, lights } from './constants';
import hue from 'node-hue-api';

import lightsOn from './lightsOn';
import lightsOff from './lightsOff';

const api = hue.HueApi(bridge.HOST, bridge.USER);
const lightState = hue.lightState;

switch (process.argv[2]) {
  case '--on':
    console.log('Lights On');
    lightsOn(api, lightState, lights);
    break;
  case '--off':
    console.log('Lights Off');
    lightsOff(api, lightState, lights);
    break;
  default:
    console.log('nope');
};
