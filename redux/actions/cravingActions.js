export const setCraving = val => {
  return {
    type: 'SET_CRAVING',
    payload: val,
  };
};

export const setTimer = val => {
  return {
    type: 'SET_TIMER',
    payload: {...val, minutes: val.minutes + 1},
  };
};
