import { shallowMount } from "@vue/test-utils";
import Episode from "../../src/components/Episodes.vue";

describe("test case for Genre component", () => {
  const wrapper = shallowMount(Episode, {
    propsData: {
      episodes: [
        {
          id: 592,
          url: "https://www.tvmaze.com/episodes/592/the-flash-1x01-pilot",
          name: "Pilot",
          season: 1,
          number: 1,
          type: "regular",
          airdate: "2014-10-07",
          airtime: "20:00",
          airstamp: "2014-10-08T00:00:00+00:00",
          runtime: 60,
          rating: {
            average: 7.1,
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/267/669257.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/267/669257.jpg",
          },
          summary:
            "<p>Barry discovers his powers and puts them to the test, only when he finds its no longer a test but the real thing when he encounters a certain someone.</p>",
          _links: {
            self: {
              href: "https://api.tvmaze.com/episodes/592",
            },
            show: {
              href: "https://api.tvmaze.com/shows/13",
            },
          },
        },
      ],
    },
  });

  it("should render the component", () => {
    expect(wrapper.props().episodes).toHaveLength(1);
  });
});
