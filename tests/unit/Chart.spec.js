import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Chart from "@/components/Chart.vue";

Vue.use(Vuetify);

const localVue = createLocalVue();

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: { bpi: {"2019-01-01": 8000, "2019-12-31": 9000 } } }) )
}));

describe("Chart.vue", () => {

    let vuetify
    const wrapper = shallowMount(Chart, {
        localVue,
        vuetify,
      });

    test("if prices have not been loaded yet, do not show the chart", () => {
        wrapper.setData({loaded : false });
        expect(wrapper.find("line-chart").exists()).toBe(false);
    });

    test("loading of prices", async () => {
        const labels = ['2019-01-01', '2019-12-31'];
        const data = [8000, 9000];
        await wrapper.vm.fillData();
        expect(wrapper.vm.datacollection.labels).toMatchObject(labels);
        expect(wrapper.vm.datacollection.datasets[0].data).toMatchObject(data);
    });
});