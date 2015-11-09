import setLightsState from './setLightsState';

export default function(api, lightState, lights) {
  let state = lightState.create().off();
  setLightsState(api, lights, state);
};
