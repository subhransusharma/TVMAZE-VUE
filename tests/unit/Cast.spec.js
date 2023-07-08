import { shallowMount } from "@vue/test-utils";
import Cast from "../../src/components/Cast.vue";

describe("test case for Cast component", () => {
  const wrapper = shallowMount(Cast, {
    propsData: {
      casts: [
        {
          person: {
            id: 578,
            url: "https://www.tvmaze.com/people/578/grant-gustin",
            name: "Grant Gustin",
            country: {
              name: "United States",
              code: "US",
              timezone: "America/New_York",
            },
            birthday: "1990-01-14",
            deathday: null,
            gender: "Male",
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/86/216652.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/86/216652.jpg",
            },
            updated: 1684256111,
            _links: {
              self: {
                href: "https://api.tvmaze.com/people/578",
              },
            },
          },
          character: {
            id: 2293,
            url: "https://www.tvmaze.com/characters/2293/the-flash-bartholomew-henry-barry-allen",
            name: 'Bartholomew Henry "Barry" Allen',
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/95/239388.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/95/239388.jpg",
            },
            _links: {
              self: {
                href: "https://api.tvmaze.com/characters/2293",
              },
            },
          },
          self: false,
          voice: false,
        },
      ],
    },
  });

  it("should render the component", () => {
    expect(wrapper.props().casts).toHaveLength(1);
  });
});
