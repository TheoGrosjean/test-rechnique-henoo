<template>
  <div>
    <b-card class="header " header="Les pièces techniques" >
      <div
        class="container"
        v-for="item in this.$store.state.technique"
        :key="item.id"
      >
        <b-card
          v-for="obj in item"
          :key="obj.name"
          :title="obj.name"
          :img-src="obj.image"
          style="max-width: 20rem"
        >
          <div>
            <b-button @click="mod(obj)" v-b-modal.modal :data="item.name"
              >voir les détails</b-button
            >
          </div>
        </b-card>
      </div>
    </b-card>
    <b-modal id="modal" title="Details">
      <h1>voiture equipée(s) :</h1>
      <h2 v-for="item in this.data_marque" :key="item.id">{{ item }}</h2>
      <h1>modèle :</h1>
      <h2 v-for="item in this.data_modele" :key="item.id">{{ item }}</h2>
    </b-modal>
  </div>
</template>

<script>
import listCars from "../model/listCars";
export default {
  data() {
    return {
      data_modele: [],
      data_marque: [],
    };
  },
  methods: {
    mod(item) {
      this.data_modele = [];
      this.data_marque = [];
      this.data_modele.push(item.model);
      for (let i = 0; i <= this.$store.state.data[0].length - 1; i++) {
        if (this.$store.state.data[0][i].technique.frein != null) {
          if (this.$store.state.data[0][i].technique.frein.name === item.name)
            this.data_marque.push(this.$store.state.data[0][i].nom_modele);
        }
        if (this.$store.state.data[0][i].technique.turbo != null) {
          if (this.$store.state.data[0][i].technique.turbo.name === item.name)
            this.data_marque.push(this.$store.state.data[0][i].nom_modele);
        }
        if (this.$store.state.data[0][i].technique.moteur != null) {
          if (this.$store.state.data[0][i].technique.moteur.name === item.name)
            this.data_marque.push(this.$store.state.data[0][i].nom_modele);
        }
        if (this.$store.state.data[0][i].technique.jante != null) {
          if (this.$store.state.data[0][i].technique.jante.name === item.name)
            this.data_marque.push(this.$store.state.data[0][i].nom_modele);
        }
      }
    },
    set_json() {
      this.$store.commit("get_json", listCars);
    },

    get_data() {
      this.$store.commit("get_technique");
    },
  },
  beforeMount() {
    this.set_json();
    this.get_data();
  },
};
</script>

<style>
.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: flex-start;
}
.header {
  font-size: 30px;
  width: 100%;
}
</style>