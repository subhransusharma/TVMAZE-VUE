import { shallowMount } from "@vue/test-utils";
import ShowDetails from "../../src/pages/ShowDetail.vue";

import { mockDetails } from "./ShowDetail.spec.constants";
import * as shows from "../../src/services/service";

jest.mock("../../src/services/service.js");

shows.getShowDetails = jest
  .fn()
  .mockImplementation(() => Promise.resolve({ data: mockDetails }));

describe("test cases for show details page", () => {
  const $route = {
    params: {
      id: "13",
    },
  };
  const wrapper = shallowMount(ShowDetails, {
    mocks: {
      $route,
    },
  });

  it("should show details of the show", async () => {
    console.log(wrapper.vm);
  });
});
