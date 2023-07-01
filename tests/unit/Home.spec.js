import { shallowMount } from "@vue/test-utils";
import Home from "../../src/pages/Home.vue";
import { mockShows } from "./Home.spec.constants";
import * as shows from "../../src/services/service";

jest.mock("../../src/services/service.js");

shows.getAllShows = jest
  .fn()
  .mockImplementation(() => Promise.resolve({ data: mockShows }));

describe("test for Home Component", () => {
  const wrapper = shallowMount(Home, { stubs: ["router-link"] });
  const homeComponent = wrapper.vm;

  it("should render loader component", () => {
    expect(wrapper.find("loader")).toBeTruthy();
  });

  it("should fetch shows from the api", () => {
    expect(homeComponent.shows.length).toEqual(mockShows.length);
    expect(wrapper.find("ShowCard")).toBeTruthy();
  });
});
