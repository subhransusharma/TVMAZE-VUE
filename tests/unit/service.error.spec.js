import * as shows from "../../src/services/service";

jest.mock("axios", () => ({
  get: jest.fn().mockReturnValue(Promise.reject("error")),
}));

describe("test cases for search service", () => {
  it("should throw errors on failure", async () => {
    // const response = await shows.getAllShows();
    expect(async () => {
      await shows.getAllShows();
    }).rejects.toThrowError("Unable to reach the server");

    expect(async () => {
      await shows.getAllSearchedShows();
    }).rejects.toThrowError("Unable to reach the server");

    expect(async () => {
      await shows.getShowDetails();
    }).rejects.toThrowError("Unable to reach the server");
  });
});
