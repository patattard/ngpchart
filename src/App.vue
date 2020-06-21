<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Bitcoin Price
      </div>
   
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid>
        <v-row
          align="center"
          justify="center">
          <v-col
            cols="12"
            sm="8"
            md="4">
            <Moveable
              v-bind="moveable"
              @drag="handleDrag"
            >
              <Chart/>
            </Moveable>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Chart from './components/Chart';
import Moveable from "vue-moveable";

export default {
  name: 'App',

  components: {
    Moveable,
    Chart,
  },

  data: () => ({
    moveable: {
      draggable: true,
      throttleDrag: 1,
      resizable: false,
      throttleResize: 1,
      keepRatio: false,
      scalable: false,
      throttleScale: 0.01,
      rotatable: false,
      throttleRotate: 0.2,
      pinchable: false,
      origin: false
    }
  }),
  methods: {
    handleDrag({ target, transform }) {
      target.style.transform = transform;
    },
  },
};
</script>
<style lang="scss">
.moveable-control-box {
  .moveable-line.moveable-direction {
    background: none;
  }
}
</style>