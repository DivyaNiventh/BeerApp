
const initialState = {
    beers: [],
    loading: false,
    error: null,
  };
  
  const beerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_BEERS_SUCCESS':
        return { ...state, beers: action.payload, loading: false, error: null };
      case 'FETCH_BEERS_ERROR':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default beerReducer;
  