import axios from "axios";
import router from "../routes";

const BASE_URL = "https://api.tvmaze.com";
const errorPath = "/error";

export async function getAllShows() {
  let response;
  try {
    response = await axios.get(`${BASE_URL}/shows`);
    return response;
  } catch (error) {
    response = error.response;
    router.push(errorPath);
    throw new Error("Unable to reach the server");
  }
}

export async function getAllSearchedShows(query) {
  let response;
  try {
    response = await axios.get(`${BASE_URL}/search/shows?q=${query}`);
    return response;
  } catch (error) {
    response = error.response;
    router.push(errorPath);
    throw new Error("Unable to reach the server");
  }
}

export async function getShowDetails(id) {
  let response;
  try {
    response = await axios.get(
      `${BASE_URL}/shows/${id}?embed[]=episodes&embed[]=cast`
    );
    return response;
  } catch (error) {
    response = error.response;
    router.push(errorPath);
    throw new Error("Unable to reach the server");
  }
}

export const movieService = {
  getAllShows,
  getShowDetails,
  getAllSearchedShows,
};
