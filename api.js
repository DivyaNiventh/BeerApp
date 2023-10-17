// api.js
import axios from 'axios';

const BASE_URL = 'https://api.punkapi.com/v2/beers';

export const fetchBeersFromAPI = async (page, brewedBefore, brewedAfter) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        page,
        per_page: 10,
        brewed_before: brewedBefore,
        brewed_after: brewedAfter,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
