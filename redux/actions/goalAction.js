import Client from 'shopify-buy';
import {getData} from '../../screens/NetworkRequest';
import {useSelector} from 'react-redux';

export const getGoalValue = (token, params) => {
  return async dispatch => {
    const data = await getData(token, 'goal/', params);

    dispatch({
      type: 'GET_GOAL',
      payload: data,
    });
    return data;
  };
};
export const getGraphData = (token, params) => {
  return async dispatch => {
    const data = await getData(token, 'graph/', params);

    dispatch({
      type: 'GET_GRAPH_DATA',
      payload: data,
    });
    return data;
  };
};
