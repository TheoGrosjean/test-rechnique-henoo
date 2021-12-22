<template>
  <div>
    <b-card>
      <h1>{{ this.$store.state.form.voiture}}</h1>
      <h4>description: {{ this.$store.state.form.description }}</h4>
      <h6>tags: {{ this.$store.state.form.tags }}</h6>
    </b-card>
  </div>
</template>