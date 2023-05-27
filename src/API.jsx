import axios from "axios";

const BASE_URL = "https://worldwide-recipes1.p.rapidapi.com/api";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "875353d217msh59c6e3ddc940898p18e950jsn7c9fea664331",
    "X-RapidAPI-Host": "worldwide-recipes1.p.rapidapi.com",
  },
};

export const FetchFood = async (url, query="", id="", page=1) => {
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
