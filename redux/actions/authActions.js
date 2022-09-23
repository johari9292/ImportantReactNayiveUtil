export const logIn = userInfo => {
  return {
    type: 'LOG_IN',
    payload: userInfo,
  };
};

export const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};
export const logGuest = () => {
  return {
    type: 'LOG_GUEST',
  };
};
export const setLink = val => {
  return {
    type: 'SET_LINK',
    payload: val,
  };
};
