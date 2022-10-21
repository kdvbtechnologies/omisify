import axios from "axios";
import { useEffect, useState } from "react";
import LoginNav from "../../../../Auth/LoginNav";
import Loader from "../../../../Partenaire Omisify/Loader";
import PanelNav from "../../../Navigation/PanelNav";

export default function PanellikespublicationOctober() {
  const [isLoading, setIsLoading] = useState(true);
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function get() {
      await axios
        .get(
          `${process.env.REACT_APP_OMISIFY_API}/api/panel/october/likespublication/`
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
              <h3>
                Nombres de likespublicationaires: {api.likespublicationrecent}
              </h3>
              <p>Noms Principal: {api.partnername}</p>
              <p>Heure: {api.time}</p>
              <p>Date: {api.date}</p>
              <p>Récapitulatif :</p>

              <h4>
                P : {api.resultpointlikespublication} (points total des
                likespublicationaires d'aujourd'hui)
              </h4>
              <h4>
                G : {api.resultgainlikespublication} (gain total des
                likespublicationaires d'aujourd'hui)
              </h4>
              <hr />
              <p>
                [Opération] likespublicationaires = (P) points total des
                likespublicationaires d'aujourd'hui + Ancien points
                likespublicationaires (ce qui est sur sa page d'accueil){" "}
              </p>
              <p>
                [Opération] Points total = (P) points total des
                likespublicationaires d'aujourd'hui + Ancien Points Total (ce
                qui est sur sa page d'accueil)
              </p>
              <p>
                [Opération] Gain = (G) gain total des likespublicationaires
                d'aujourd'hui + Ancien Gain (ce qui est sur sa page d'accueil)
              </p>
              <p>
                N.B: Avant d'actualiser les points il faut d'abord vérifier si
                l'utilisateur à des Bonus
              </p>
              <hr />
              <h4>Nombres</h4>
              <p>
                Nombre total des likespublicationaires dans la vie :{" "}
                {api.numbertlikespublicationlife}
              </p>
              <p>
                Nombre total des likespublicationaires dans l'année 2022 :{" "}
                {api.numbertlikespublication2022}
              </p>
              <p>
                Nombre total des likespublicationaires en Octobre 2022 :{" "}
                {api.numbertlikespublicationoct2022}
              </p>
              <h4>Points</h4>
              <p>
                Points total des likespublicationaires dans la vie :{" "}
                {api.pointtlikespublicationlife}
              </p>
              <p>
                Points total des likespublicationaires dans l'année 2022 :{" "}
                {api.pointtlikespublication2022}
              </p>
              <p>
                Points total des likespublicationaires en Octobre 2022 :{" "}
                {api.pointtlikespublicationoct2022}
              </p>
              <h4>Gain</h4>
              <p>
                Gain total des likespublicationaires dans la vie :{" "}
                {api.gaintlikespublicationlife}
              </p>
              <p>
                Gain total des likespublicationaires dans l'année 2022 :{" "}
                {api.gaintlikespublication2022}
              </p>
              <p>
                Gain total des likespublicationaires en Octobre 2022 :{" "}
                {api.gaintlikespublicationoct2022}
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
