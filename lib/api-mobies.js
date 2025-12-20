import axios from 'axios';

const BASE_URL = 'https://moviesapi-rest.up.railway.app/movies';

export const getMovies = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie with id ${id}:`, error);
    throw error;
  }
};