import { shallowMount } from "@vue/test-utils";
import ShowCard from "../../src/components/ShowCard.vue";
import { mockCard } from "./ShowCard.spec.constants";

describe("test cases for show card component", () => {
  const wrapper = shallowMount(ShowCard, {
    propsData: {
      show: mockCard,
    },
  });

  it("should render markup correctly", () => {
    const average = wrapper.find(".bg-cover");
    expect(average.exists()).toBeTruthy();
  });
});
