<template>
  <div class="form">
    <stepper :options="stepperOptions">
      <div slot="step-1">
        <h3>Nom de la voiture</h3>
        <b-form-textarea
          id="textarea-state"
          v-model="voiture"
          :state="this.voiture.length >= 1"
          placeholder="Obligatoire"
        ></b-form-textarea>
      </div>

      <div v-if="voiture.length < 1" slot="step-2">
        <h3>Description</h3>
        Merci de remplir l'étape Nom de la voiture.
      </div>

      <div v-if="voiture.length > 0" slot="step-2">
        <h3>Description</h3>
        <b-form-textarea id="textarea-state" v-model="description"></b-form-textarea>
      </div>
      <div v-if="voiture.length < 1" slot="step-3">
        <h3>Tags</h3>
        Merci de remplir l'étape Nom de la voiture.
      </div>
      <div v-if="voiture.length > 0" slot="step-3">
        <h3>Tags</h3>
        <b-form-textarea id="textarea-state" v-model="tags"></b-form-textarea>
        <b-button variant="primary" @click="print">Go !</b-button>
      </div>
    </stepper>
  </div>
</template>


<script>
import Stepper from "vuejs-stepper";
export default {
  components: { Stepper },
  data() {
    return {
      voiture: "",
      description: "",
      tags: "",
      stepperOptions: {
        headers: [
          { title: "Nom de la voiture" },
          { title: "Description" },
          { title: "Tags" },
        ],
        prevText: "Previous",
        nextText: "Next",
      },
    };
  },
  methods: {
      print() {
          let voiture = this.voiture
          let description = this.description
          let tags = this.tags
          this.$store.commit("add_car_form", {voiture, description, tags });
          this.$router.push("/Form")

      }
  }
};
</script>

<style>
.bullet {
  display: flex;
  border-radius: 50%;
  background-color: #26318d;
  color: white;
  font-weight: bold;
  width: 2rem;
  height: 2rem;
}
.form{
  display: flex;
  align-self: center;
}
.title {
  font-size: small;
  color: #26318d;
  text-align: center;
  margin-top: 0.3rem;
}
</style>
