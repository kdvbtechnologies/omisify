import NavbarAl from "../Navigation/Navbar";

export default function ProfilAl() {
  return (
    <>
      <NavbarAl />
      <div className="profil-card-al">
        <img
          src="https://res.cloudinary.com/rasivyy/image/upload/v1668421426/inizel/inizel%20home/image-profil-al_ravgtr.jpg"
          alt="image profil of user"
        />
        <h3>Ousmane Dembélé</h3>

        <div className="title">
          <p style={{ color: "#00cc00" }}>Auteur</p>
        </div>

        <p>17.414 ouvrages publiés</p>
        <p>537.221 téléchargements d'ouvrages</p>
        <p>50.300€ gagnés</p>

        <button>Statistiques</button>
      </div>
    </>
  );
}
