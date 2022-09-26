import SaliouFooter from "./SaliouFooter";

export default function SaliouHeader() {
  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@Saliou Koffi</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : Saliou Koffi Jean Donatien</p>
              <p>Sexe : Homme</p>
              <p>Pays : Côte d'Ivoire</p>
              <p>Age : 33 ans</p>
              <p>Date d'inscription : 23/09/2022</p>
              <p>Page Facebook : Perr</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <SaliouFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
