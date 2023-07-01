import { flashResults } from "./Search.spec.constants";
import { mockDetails } from "./ShowDetail.spec.constants";
import { mockShows } from "./Home.spec.constants";
import * as shows from "../../src/services/service";
import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";
const query = "Flash";
const id = "13";

jest.mock("axios");

describe("test cases for search service", () => {
  axios.get.mockImplementation((url) => {
    switch (url) {
      case `${BASE_URL}/shows`:
        return Promise.resolve({ data: mockShows });
      case `${BASE_URL}/search/shows?q=${query}`:
        return Promise.resolve({ data: flashResults });
      case `${BASE_URL}/shows/${id}?embed[]=episodes&embed[]=cast`:
        return Promise.resolve({ data: mockDetails });
      default:
        return Promise.reject(new Error("not found"));
    }
  });

  it("should return all shows correctly", async () => {
    const response = await shows.getAllShows();
    expect(response.data.length).toEqual(mockShows.length);
  });

  it("should return searched shows correctly", async () => {
    const response = await shows.getAllSearchedShows(query);
    expect(response.data.length).toEqual(flashResults.length);
  });

  it("should return showDetails correctly", async () => {
    const response = await shows.getShowDetails(id);
    expect(response.data.name).toEqual(mockDetails.name);
  });
});
