<template>
  <div>
    <div class="container">
      <b-card
        v-for="item in this.$store.state.data[0]"
        :key="item.id"
      >
        <img :src="item.image_voiture" height="200px" />
        <h1>{{ item.nom_modele }}</h1>
        <h4>Couleur : {{ item.couleur.name }}</h4>
        <b-card
        :style="item.couleur.code">
        </b-card>
        <h6 v-for="tags in item.tags" :key="tags.id">
          <span class="badge bg-primary">{{ tags }}</span>
        </h6>
        <b-button @click="delete_car(item)" variant="danger"
          ><b-icon icon="trash" /> supprimer</b-button
        >
        <b-button @click="copie_car(item)" variant="primary"
          ><b-icon icon="back" /> copie</b-button
        >
      </b-card>
    </div>
  </div>
</template>

<script>
import listCars from "../model/listCars";

export default {
  methods: {
    delete_car(item) {
      this.$store.commit("delete_car", item);
    },
    set_json() {
      this.$store.commit("get_json", listCars);
    },
    copie_car(item) {
      this.$store.commit("copie_car", item);
    },
    get_data() {
      this.$store.commit("get_technique");
    },
    set_color() {
      this.$store.commit("set_color");
    },
  },
  beforeMount() {
    this.set_json();
    this.get_data();
    this.set_color();
  },
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
</style>
