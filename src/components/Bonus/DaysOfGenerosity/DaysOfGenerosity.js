export default function DaysOfGenerosity() {
  //const userId = localStorage.getItem("https://omisify.com/userId");

  return (
    <>
      <p>Les Journées de Générosité</p>
      <p>
        Les Journées de Générosité sont une forme de Bonus qui concernent 2
        jours dans la semaine. Les points que le Partenaire gagnent pendant les
        journées de générosité sont multipliés par 10
      </p>
      <p>Entrer vos jours de générosité</p>
      <input type="text" placeholder="Jours de générosité" />
      <button>Valider</button>
    </>
  );
}
