import { shallowMount } from "@vue/test-utils";
import Loader from "../../src/components/Loader.vue";

describe("test case for loader component", () => {
  const wrapper = shallowMount(Loader);

  it("should render the component", () => {
    const spans = wrapper.findAll("span");
    const divs = wrapper.findAll("div");
    expect(spans.length).toEqual(3);
    expect(divs.length).toEqual(1);
  });
});
