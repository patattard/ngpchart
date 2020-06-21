<template>
  <v-card
    max-width="800">
    <line-chart v-if="loaded" :chart-data="datacollection" :options="chartOptions"></line-chart>
  </v-card>
</template>

<script>
  import LineChart from './LineChart.js'
  import axios from 'axios';

  export default {
    
    name: 'Chart',
    components: {
      LineChart
    },

    data: () => ({
      loaded: false,
      datacollection: null,
      chartOptions: {
          elements: {
              point:{
                  radius: 0
              }
          }
      }
    }),
    mounted () {
      this.fillData()
      .then(() => {
        this.loaded = true;
      });
    },
    methods: {
      async fillData () {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-12-31');
         
        const labels = [];
        const data = [];
        populateLabelsAndData(response, labels, data);

        this.datacollection = {
          labels: labels,
          datasets: [
            {
              label: 'Bitcoin Price Index',
              backgroundColor: '#f87979',
              borderColor: '#f87979',
              fill: false,
              data: data
            }
          ],
        }
      },
    }
  }

 function populateLabelsAndData(coinDeskResponse, labels, data) {
  for (let date in coinDeskResponse.data.bpi) {
    labels.push(date);
    data.push(coinDeskResponse.data.bpi[date]);
  }
}
</script>



