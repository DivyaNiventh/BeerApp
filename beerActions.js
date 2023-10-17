
import { fetchBeersFromAPI } from '../api';

export const fetchBeers = (page, brewedBefore, brewedAfter) => {
  return async (dispatch) => {
    try {
      const response = await fetchBeersFromAPI(page, brewedBefore, brewedAfter);
        dispatch({ type: 'FETCH_BEERS_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_BEERS_ERROR', error });
      }
    };
  };
  