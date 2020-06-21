import { mount } from "@vue/test-utils";
import Chart from "@/components/Chart";
    
describe("Chart", () => {
    test("if datacollection is not loaded yet, do not show the chart", () => {
        const wrapper = mount(Chart);
        wrapper.setData({datacollection : null });
        expect(wrapper.find("line-chart").isVisible()).toBe(false);
    });
});