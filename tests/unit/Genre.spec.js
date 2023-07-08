import { shallowMount } from "@vue/test-utils";
import Genre from "../../src/components/Genre.vue";

describe("test case for Genre component", () => {
  const wrapper = shallowMount(Genre, {
    propsData: {
      genres: ["comedy"],
    },
  });

  it("should render the component", () => {
    expect(wrapper.props().genres).toHaveLength(1);
  });
});
