export default function(api, lights, state) {
  return lights.forEach((light) => {
    api.setLightState(light, state)
  });
};
