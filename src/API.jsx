import axios from "axios";

const BASE_URL = "https://worldwide-recipes1.p.rapidapi.com/api";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "worldwide-recipes1.p.rapidapi.com",
  },
};

export const FetchFood = async (url, query = "", id = "", page = 1) => {
  try {
    const response = await axios.request({
      url: `${BASE_URL}${url}`,
      ...options,
      params: {
        q: query,
        start: page,
        canonical_term: id,
      },
    });

    return response.data;
  } catch (error) {
    return error;
  }
};
