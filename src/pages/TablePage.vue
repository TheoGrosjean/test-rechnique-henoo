<template>
<div class="container" >
    <b-card
      v-for="item in this.$store.state.data[0]" :key="item.id"
      bg="940303"
    >
    <img :src="item.image_voiture" height="200px"/>
    <h1>{{item.nom_modele}}</h1>
    <h4>Couleur : {{item.couleur.name}}</h4>
      <b-button @click="delete_car(item)" variant="danger"
        ><b-icon icon="trash" /> supprimer</b-button
      >
    </b-card>
</div>
</template>

<script>
export default {
  methods: {
        delete_car(item) {
        console.log(item.id)
        this.$store.commit("delete_car", item)

    }
  }
}

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
