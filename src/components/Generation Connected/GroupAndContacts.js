export default function GroupAndContacts() {
  const api = [
    {
      rank: "1",
      numberWhatsapp: "+225018147569",
      country: "Cote d'Ivoire",
      city: "Abidjan",
      genre: "Homme",
      age: "17 ans",
      name: "Bakita Chris",
    },

    {
      rank: "2",
      numberWhatsapp: "+225016213589",
      country: "Cote d'Ivoire",
      city: "Cocody",
      genre: "Femme",
      age: "23 ans",
      name: "Talini Castri",
    },

    {
      rank: "3",
      numberWhatsapp: "+225016255846",
      country: "Cote d'Ivoire",
      city: "Bingerville",
      genre: "Femme",
      age: "35 ans",
      name: "Sarah Digbeu",
    },
  ];

  return (
    <>
      <div className="add-a-contact">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          cursor="pointer"
          width="20px"
          enableBackground="new 0 0 489.8 489.8"
          version="1.1"
          viewBox="0 0 489.8 489.8"
          xmlSpace="preserve"
        >
          <path d="M438.2 0H51.6C23.1 0 0 23.2 0 51.6v386.6c0 28.5 23.2 51.6 51.6 51.6h386.6c28.5 0 51.6-23.2 51.6-51.6V51.6c0-28.4-23.2-51.6-51.6-51.6zm27.1 438.2c0 14.9-12.2 27.1-27.1 27.1H51.6c-14.9 0-27.1-12.2-27.1-27.1V51.6c0-14.9 12.2-27.1 27.1-27.1h386.6c14.9 0 27.1 12.2 27.1 27.1v386.6z"></path>
          <path d="M337.4 232.7h-80.3v-80.3c0-6.8-5.5-12.3-12.3-12.3s-12.3 5.5-12.3 12.3v80.3h-80.3c-6.8 0-12.3 5.5-12.3 12.2 0 6.8 5.5 12.3 12.3 12.3h80.3v80.3c0 6.8 5.5 12.3 12.3 12.3s12.3-5.5 12.3-12.3v-80.3h80.3c6.8 0 12.3-5.5 12.3-12.3 0-6.8-5.5-12.2-12.3-12.2z"></path>
        </svg>
      </div>
      {/* add-a-contact */}

      <p>Ajouter un nouveau membre à votre Groupe Whatsapp</p>

      <p>photo de couverture du groupe</p>
      <p>A propos</p>
      <p>VirilNation</p>
      <i>Groupe Whatsapp</i>
      <p>
        Ce groupe est destiné à encourager les hommes à être des hommes viril.
      </p>
      <p>Date de création : 17/02/2022</p>
      <p>Nombre de membres : 3</p>
      <p>lien du Groupe & Capture d'écran</p>
      <div className="list-of-contacts">
        <div className="title">
          <p>Petite image du groupe ici qui sera cliquable</p>
          <li>Investir au Pays</li>
        </div>
        {/* title */}

        <div className="overflow">
          <table id="table">
            <tr>
              <th>N°</th>
              <th>Nom(s)</th>
              <th>Numéro Whatsapp</th>
              <th>Genre</th>
              <th>Age</th>
              <th>Pays</th>
              <th>Ville</th>
            </tr>

            {api.map((api) => (
              <>
                <tr>
                  <td>{api.rank}</td>
                  <td>{api.name}</td>
                  <td>{api.numberWhatsapp}</td>
                  <td>{api.genre}</td>
                  <td>{api.age}</td>
                  <td>{api.country}</td>
                  <td>{api.city}</td>
                </tr>
              </>
            ))}
          </table>
          {/* table */}
        </div>
        {/* overflow */}
      </div>
      {/* list-of-contacts */}
    </>
  );
}
