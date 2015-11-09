import setLightsState from './setLightsState';

export default function(api, lightState, lights) {
  let state = lightState.create().on().white(500, 100);
  setLightsState(api, lights, state);
};
