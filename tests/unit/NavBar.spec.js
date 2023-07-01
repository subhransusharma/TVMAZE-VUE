import { shallowMount, createLocalVue } from "@vue/test-utils";
import NavBar from "../../src/components/NavBar.vue";
import router from "../../src/routes";

describe("test cases for NavBar component", () => {
  let localVue;
  localVue = createLocalVue();
  const setQueryParamsSpy = jest.spyOn(NavBar.methods, "setQueryParams");
  const wrapper = shallowMount(NavBar, {
    localVue,
    router,
    stubs: ["router-link"],
  });
  const routerPushSpy = jest.spyOn(wrapper.vm.$router, "push");

  it("should render the app name", () => {
    const APP_NAME = "Bradflix";
    expect(wrapper.text()).toEqual(APP_NAME);
  });

  it("should trigger a search", () => {
    const input = wrapper.find("input");
    input.setValue("Flash");
    expect(setQueryParamsSpy).toHaveBeenCalled();
    expect(routerPushSpy).toHaveBeenCalledWith({
      path: "/search",
      query: { query: "Flash" },
    });
  });

  it("should stay on home page if input is empty", () => {
    const input = wrapper.find("input");
    input.setValue("");
    expect(setQueryParamsSpy).toHaveBeenCalled();
    expect(routerPushSpy).toHaveBeenCalledWith("/");
  });
});
