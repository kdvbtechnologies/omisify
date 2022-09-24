export default function Programme() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family} className="program">
      <h2>Programme D'affiliation 1</h2>
      <h4>Création de site internet</h4>
      <p>
        [ Publier un commentaire sur les réseaux sociaux dans lequel vous allez
        insérer ce lien <a href="https://omisify.com">https://omisify.com</a> ]
      </p>

      <p>
        Voilà un exemple de commentaire : Création de site internet au prix de
        10€. Omisify est une entreprise qui crée des sites internet au prix de
        10€. Visitez leur site internet en cliquant ici https://www.omisify.com
      </p>
      <p>
        N.B : Outre les commentaires, vous pouvez aussi publier dans des
        groupes, Envoyer par message à vos proches. Vous pouvez aussi inviter
        vos proches à faire le même travail que vous sur Omisify cela vaut 2
        points. Maintenant gagnez de l'argent pour chaque commentaire publier.
      </p>
    </div>
  );
}
