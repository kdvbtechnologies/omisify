import { NavLink, useNavigate } from "react-router-dom";
import Back from "../../Back/Back";

export default function RealTimeResults() {
  const navigate = useNavigate();

  return (
    <>
      <div className="stats-big-titleb">
        <p>Résultats en temps réel</p>
      </div>

      <div onClick={() => navigate(-1)}>
        <Back />
      </div>
      <div className="real-time-results">
        <div className="date">
          <p>Date : 10/11/2022</p>
        </div>

        <div className="align-center-main-results">
          <div className="main-results">
            <p>Nombre de personne(s) atteinte(s)</p>
            <p>1032</p>
          </div>
        </div>

        <div className="display-a">
          <div className="a">
            <p>Publicité par les Partenaires Omisify Influents</p>
            <p>0</p>
          </div>

          <div className="a">
            <NavLink
              className="navlink"
              to="/omisify-partner-real-time-results"
            >
              <p>Publicité par les Partenaires Omisify</p>
            </NavLink>
            <p>1032</p>
          </div>

          <div className="a">
            <p>Publicité par les Partenaires Omisify Vidéastes</p>
            <p>0</p>
          </div>
        </div>

        <div className="amount-spent-ads">
          <p>Montant dépensé : 233€</p>
          <p>Solde restant : 450€</p>
        </div>

        <div className="infos">
          <p>Nom de la publicité : Chaussures à vendre à bon prix</p>
          <p>Date de création : 09/11/2022</p>

          <div className="adstatus">
            <p>Statut :</p>
            <div className="d">
              <p>Publicité en cours</p>
            </div>
          </div>

          <p>Dernière mise à jour : 10/11/2022, 15:28</p>
        </div>

        <div className="stats-by-day">
          <p>Statistiques mensuels</p>
        </div>

        <div className="overflow-table">
          <table id="results-table">
            <tr>
              <th>Date</th>
              <th>Nombre total de personne(s) atteinte(s)</th>
              <th>Nouvelle(s) personne(s) atteinte(s)</th>
              <th>Montant dépensé</th>
              <th>Solde restant</th>
            </tr>

            <tr>
              <td>10/11/2022</td>
              <td>400</td>
              <td>270</td>
              <td>50€</td>
              <td>450€</td>
            </tr>

            <tr>
              <td>09/11/2022</td>
              <td>130</td>
              <td>130</td>
              <td>20€</td>
              <td>785€</td>
            </tr>
          </table>
        </div>

        <div className="i">
          <i>
            N.B: Les résultats affichés en haut de la page sont comptés à partir
            de la date du début de la publicité
          </i>
        </div>
      </div>
    </>
  );
}
