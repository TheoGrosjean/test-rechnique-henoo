<template>
  <div>
  <div class="side">
        <div class="menu">
            <b-row>
              <b-img src="https://d3kqkuy1hpjocx.cloudfront.net/s3fs-public/styles/medium/public/logo_henoo_2_orange_3_1.png"/>
            </b-row>
            <b-row>
            <nav>
              <b-nav vertical>
                <b-nav-item to="/"><b-icon style="color: #ffa502" icon="house" />Acceuil</b-nav-item>
                <b-nav-item to="/pieces"><b-icon style="color: #ffa502" icon="tools" />Les pièces</b-nav-item>
                <b-nav-item to="/newCars"><b-icon style="color: #ffa502" icon="plus" />Ajout voiture</b-nav-item>
                <b-nav-item to="/table"><b-icon style="color: #ffa502" icon="card-list" />List des voitures</b-nav-item>
              </b-nav>
            </nav>
          </b-row>
        </div>
  </div>
  <b-row style="height: 300px">
  <b-button @click="go_linkedin()" class="lk">Linkedin</b-button>
  </b-row>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";
export default {
  components: { BIcon },
  methods: {
  go_linkedin() {
    window.open("https://www.linkedin.com/in/th%C3%A9o-grosjean-00788019a/")
  }
  }
};
</script>

<style>
.side{
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    min-width: 250px;
}
.nav-link {
    display: flex;
    gap:10px;
    font-style:italic;
    color: black;
    font-size: 20px;
    user-select:auto;
}
.menu {
    display: flex;
    align-items: center;
    padding-top: 20px;
    flex-direction: column;
    gap: 100px;
}
.lk{
    align-self: flex-end;
    background-color: blue;

}
</style>