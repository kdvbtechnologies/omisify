import axios from "axios";
import { useEffect, useState } from "react";
import LoginNav from "../../../../Auth/LoginNav";
import Loader from "../../../../Partenaire Omisify/Loader";
import PanelNav from "../../../Navigation/PanelNav";

export default function PanelpublicationOctober() {
  const [isLoading, setIsLoading] = useState(true);
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function get() {
      await axios
        .get(
          `${process.env.REACT_APP_OMISIFY_API}/api/panel/october/publication/`
        )
        .then((res) => {
          console.log(res);
          setApi(res.data);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, []);

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <LoginNav />
      <PanelNav />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {api.map((api) => (
            <>
              <h3>Nombres de publicationaires: {api.publicationrecent}</h3>
              <p>Noms Principal: {api.partnername}</p>
              <p>Heure: {api.time}</p>
              <p>Date: {api.date}</p>
              <p>Récapitulatif :</p>

              <h4>
                P : {api.resultpointpublication} (points total des
                publicationaires d'aujourd'hui)
              </h4>
              <h4>
                G : {api.resultgainpublication} (gain total des publicationaires
                d'aujourd'hui)
              </h4>
              <hr />
              <p>
                [Opération] publicationaires = (P) points total des
                publicationaires d'aujourd'hui + Ancien points publicationaires
                (ce qui est sur sa page d'accueil){" "}
              </p>
              <p>
                [Opération] Points total = (P) points total des publicationaires
                d'aujourd'hui + Ancien Points Total (ce qui est sur sa page
                d'accueil)
              </p>
              <p>
                [Opération] Gain = (G) gain total des publicationaires
                d'aujourd'hui + Ancien Gain (ce qui est sur sa page d'accueil)
              </p>
              <p>
                N.B: Avant d'actualiser les points il faut d'abord vérifier si
                l'utilisateur à des Bonus
              </p>
              <hr />
              <h4>Nombres</h4>
              <p>
                Nombre total des publicationaires dans la vie :{" "}
                {api.numbertpublicationlife}
              </p>
              <p>
                Nombre total des publicationaires dans l'année 2022 :{" "}
                {api.numbertpublication2022}
              </p>
              <p>
                Nombre total des publicationaires en Octobre 2022 :{" "}
                {api.numbertpublicationoct2022}
              </p>
              <h4>Points</h4>
              <p>
                Points total des publicationaires dans la vie :{" "}
                {api.pointtpublicationlife}
              </p>
              <p>
                Points total des publicationaires dans l'année 2022 :{" "}
                {api.pointtpublication2022}
              </p>
              <p>
                Points total des publicationaires en Octobre 2022 :{" "}
                {api.pointtpublicationoct2022}
              </p>
              <h4>Gain</h4>
              <p>
                Gain total des publicationaires dans la vie :{" "}
                {api.gaintpublicationlife}
              </p>
              <p>
                Gain total des publicationaires dans l'année 2022 :{" "}
                {api.gaintpublication2022}
              </p>
              <p>
                Gain total des publicationaires en Octobre 2022 :{" "}
                {api.gaintpublicationoct2022}
              </p>
              <h4>life</h4>
              <p>points</p>
              <p>
                Points total cummulés depuis l'inscription (dans la vie) :{" "}
                {api.pointtlife}
              </p>
              <p>
                Points total cummulés dans l'année 2022 : {api.pointtlife2022}
              </p>
              <p>
                Points total cummulés en Octobre 2022 : {api.pointtlifeoct2022}
              </p>
              <p>Gains</p>
              <p>Gain total dans la vie : {api.gaintlife}</p>
              <p>Gain total cummulés dans l'année 2022 : {api.gaintlife2022}</p>
              <p>
                Gain total cummulés en Octobre 2022 : {api.gaintlifeoct2022}
              </p>

              <p>Noms Court: {api.shortname}</p>
              <p>Noms de naissance: {api.name}</p>
            </>
          ))}
        </>
      )}
    </div>
  );
}
