import { useNavigate } from "react-router-dom";
import Back from "../../../Back/Back";

export default function OmisifyPartnerRealTimeResultsDetailsByDay() {
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
        <div className="title-omisify-partner">
          <p>Publicité par les Partenaires Omisify</p>
        </div>
        <div className="date-results-by-day">
          <p>Date : 10/11/2022</p>
        </div>
        <div className="align-center-main-results">
          <div className="main-results">
            <p>Nombre de personne(s) atteinte(s)</p>
            <p>450</p>
          </div>
        </div>
        <div className="display-a">
          <div className="a">
            <p>Message(s) envoyé(s)</p>
            <p>514</p>
            <div className="price">
              <p>23.89€</p>
            </div>
          </div>

          <div className="a">
            <p>Publication(s) publiée(s)</p>
            <p>212</p>
            <div className="price">
              <p>17.28€</p>
            </div>
          </div>

          <div className="a">
            <p>Commentaire(s) publié(s)</p>
            <p>144</p>
            <div className="price">
              <p>11.07€</p>
            </div>
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
        </div>

        <div className="stats-by-day">
          <p>Statistiques journaliers</p>
        </div>

        <div className="overflow-table">
          <table id="results-table">
            <tr>
              <th>Heure</th>
              <th>Nombre total de personne(s) atteinte(s)</th>
              <th>Nouvelle(s) personne(s) atteinte(s)</th>
              <th>Montant dépensé</th>
              <th>Solde restant</th>
              <th>Message(s) envoyé(s)</th>
              <th>Publication(s) publié(s)</th>
              <th>Commentaire(s) publié(s)</th>
            </tr>

            <tr>
              <td>09:38 - 06:47</td>
              <td>400</td>
              <td>270</td>
              <td>50€</td>
              <td>450€</td>
              <td>10</td>
              <td>5</td>
              <td>3</td>
            </tr>

            <tr>
              <td>06:47 - 05:54</td>
              <td>130</td>
              <td>130</td>
              <td>20€</td>
              <td>785€</td>
              <td>2</td>
              <td>1</td>
              <td>15</td>
            </tr>

            <tr>
              <td>05:54</td>
              <td colspan="7">Début de la publicité</td>
            </tr>
          </table>
        </div>

        <div className="i">
          <i>N.B: Date et heure de Brasilia</i>
        </div>
      </div>
    </>
  );
}
