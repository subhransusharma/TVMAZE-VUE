import { shallowMount, createLocalVue } from "@vue/test-utils";
import Search from "../../src/pages/Search.vue";
import router from "../../src/routes";
import { flashResults } from "./Search.spec.constants";
import * as shows from "../../src/services/service";

jest.mock("../../src/services/service.js");

shows.getAllSearchedShows = jest
  .fn()
  .mockImplementation(() => Promise.resolve({ data: flashResults }));

describe("test cases for search component", () => {
  let localVue;
  localVue = createLocalVue();
  const wrapper = shallowMount(Search, {
    localVue,
    router,
  });

  const fetchResultsSpy = jest.spyOn(wrapper.vm, "fetchResults");

  it("should trigger a search on query change", () => {
    wrapper.vm.$router.push({
      path: "/search",
      query: { query: "Flash" },
    });
    const loader = wrapper.find("loader");
    expect(loader).toBeTruthy();
    wrapper.vm.$nextTick(() => {
      expect(fetchResultsSpy).toHaveBeenCalled();
      expect(wrapper.vm.results.length).toEqual(flashResults.length);
      const showCard = wrapper.find("show-card");
      expect(showCard).toBeTruthy();
    });
  });
});
