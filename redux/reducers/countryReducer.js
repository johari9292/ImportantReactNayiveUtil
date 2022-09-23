const initialState = {
  country: 'CA',
};

const countryReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SET_COUNTRY': {
      return {
        country: payload?.country,
      };
    }

    default: {
      return state;
    }
  }
};

export default countryReducer;
