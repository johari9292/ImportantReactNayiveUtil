const initialState = {
  minutes: 0,
  isStart: false,
};

const cravingReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SET_TIMER': {
      return {
        minutes: payload?.minutes,
        isStart: payload?.isStart,
      };
    }

    default: {
      return state;
    }
  }
};

export default cravingReducer;
