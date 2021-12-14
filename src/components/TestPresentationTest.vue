<template>
  <div>
    <b-alert show>
      <h3>Tâches à réaliser</h3>
      <ul>
        <li>Crée une nouvelle page pour afficher les pièces de voitures. En suivant la maquette (voir photo src/assets/maquette.png). Les pièces
          sont accéssibles dans src/model/listCars.js, dans l'object "technique".</li>
        <li>Dans la page src/pages/TablePage implémente un tableau pour présenter les différentes voitures (nom, couleur, marques, tags, photo)</li>
        <li>Créer une nouvelle page avec un formulaire pour ajouter une voiture (seulement nom modèle, description et tags)</li>
        <li>La fin du formulaire redirige vers une page qui affiche les informations qui viennent d'être saisies par l'utilisateur</li>
      </ul>
    </b-alert>

    <b-alert show variant="warning">
      <h3>Détails pour la page "TablePage"</h3>
      <ul>
        <li>Le tableau de présentation doit être responsive et mis en page (pas un tableau HTML basique)</li>
        <li>Le tableau présente les informations de manière visuelles pas seulement le textuellement. (tags sous forme de badges, miniature de
          photo, nom de la couleur et visuel de celle-ci).
        </li>
        <li>L'utilisateur doit pouvoir intérargir avec le tableau. Il peut supprimer une voiture de la liste ou en créer une copie.</li>
        <li>Après une action l'affichage du tableau se met à jour.</li>
      </ul>
    </b-alert>

    <b-alert show variant="dark">
      <h3>Détails pour la page "les pièces" </h3>
      <ul>
        <li>Le but est de voir comment tu arrives a reproduire un design donné.</li>
        <li>Lors d'un clic sur les boutons "Voir les détails" il faut ouvrir une fenètre flottante et afficher les informations sur la pièce.
          (marques, model , voitures équipées , fournisseurs). Ici pas besoin de faire de mise en page affiche seulement les informations de
          manières lisibles.</li>
      </ul>
    </b-alert>

    <b-alert show variant="secondary">
      <h3>Détails pour la page formulaire</h3>
      <ul>
        <li>Le formulaire est en plusieurs étapes. (<a href="https://ps.w.org/multi-step-form/trunk/screenshot-2.jpg?rev=2516227" target="_blank">Exemple</a>) </li>
        <li>Les différentes étapes sont les suivantes : Nom de la voiture , description de la voiture , tags attribués à la voiture</li>
        <li>Il faut développer une vérification de formulaire seulement pour la première étape. Quelque chose de très simple juste s'assurer que
          le champ "nom de la voiture" n'est pas vide.</li>
        <li>Pour cette partie ne t'attarde pas sur le style et la mise en page. On veut juste voir si ça
          fonctionne et suivre la progression de l'utilisateur dans le formulaire.
        </li>
        <li>La page apres le formulaire idem fais quelque chose de lisible avec les informations du formulaire pas besoin de style.</li>
      </ul>
    </b-alert>

    <b-alert variant="success" show>
      <h3>Infos complémentaires</h3>
      <ul>
        <li>Les objects voitures sont présents dans model->listCars.js</li>
        <li>Pas besoin de sauvegarder les modifications à la liste de voitures. Apres une suppression ou une copie si l'utilisateur rafraichi la page
          les modifications peuvent disparaitre.</li>
        <li>Tu peux ajouter des données d'exemples dans listCars.js si tu le souhaites.</li>
      </ul>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "test-presentation-test"
}
</script>

<style scoped>

</style>
