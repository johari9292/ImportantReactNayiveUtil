const initialState = {
  goal: {},
  graphData: [0, 0, 0, 0, 0, 0, 0],
};

const getGoalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GOAL':
      return {...state, goal: action.payload};
    case 'GET_GRAPH_DATA':
      return {...state, graphData: action.payload};

    default:
      return state;
  }
};

export default getGoalReducer;
