import WilfriedFooter from "./WilfriedFooter";

export default function WilfriedHeader() {
  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@Wilfried MBoundja</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : Wilfried MBoundja</p>
              <p>Sexe : Homme</p>
              <p>Pays : Cameroun</p>
              <p>Age : 21 ans</p>
              <p>Date d'inscription : 26/09/2022</p>
              <p>Page Facebook : Les Chroniques de Josi</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <WilfriedFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}