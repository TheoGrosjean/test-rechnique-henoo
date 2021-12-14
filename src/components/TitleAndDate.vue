<template>
  <div class="ry" role="alert">
    <h3>{{getDate()}}</h3>
    <h1> Afficher le tableau des voitures ici 👇</h1>
  </div>
</template>

<script>
import {getCurrentDate} from "../utils/getCurrentDate";

export default {
  name: "TitleAndDate",
  methods : {
    getDate() {
      return getCurrentDate();
    }
  }
}
</script>

<style scoped>

</style>
