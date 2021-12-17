<template>
  <div class="container">
    <b-card
      title="Freins"
      img-src="https://besthqwallpapers.com/Uploads/24-3-2018/45580/thumb2-ferrari-wheels-4k-brake-caliper-2018-cars.jpg"
      img-alt="Image"
      tag="article"
      style="max-width: 20rem"
    >
      <b-button @click="get_data()"
        ><b-icon icon="pencil-fill" /> les détails</b-button
      >
    </b-card>
    <b-card
      title="Moteur"
      img-src="https://timedm.com/wp-content/uploads/Nissan-GT-R-engine-v6.jpg"
      img-alt="Image"
      tag="article"
      style="max-width: 20rem"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
    <b-card
      title="Echapement"
      img-src="https://www.my-procar.com/thumbs/data/categories/visuels/bouchage-du-pot-d-echappement:7463.jpg"
      img-alt="Image"
      tag="article"
      style="max-width: 20rem"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
import listCars from '../model/listCars'
export default {
  data() {
    return {};
  },
  methods: {
    set_json() {
      this.$store.commit("get_json", listCars);
    },
    get_data() {
        console.log("data = ", this.$store.state.data)
    }
  },
  beforeMount(){
      this.set_json()
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
}
.item {
  display: flex;
}
</style>