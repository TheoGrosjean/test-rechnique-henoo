<template>
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
              <b-nav-item><b-icon style="color: #ffa502" icon="plus" />Ajour voiture</b-nav-item>
              <b-nav-item to="/table"><b-icon style="color: #ffa502" icon="card-list" />List des voitures</b-nav-item
              >
            </b-nav>
          </nav>
            </b-row>
        </div>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";
export default {
  components: { BIcon },
  data() {
    return {
    };
  },
  methods: {
    
  }
};
</script>

<style>
.side{
    display: flex;
    padding-left: 20px;
    justify-content: flex-start;
}
.button {
    display: flex;
    color : #ffa502;
}
.arrow {
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: flex-start;
    color: #ffa502;
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
    justify-content: center;
    padding-top: 20px;
    flex-direction: column;
    gap: 100px;
    scale: 10%;
}

</style>