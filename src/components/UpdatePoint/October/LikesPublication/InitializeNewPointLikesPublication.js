import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateInfos } from "../../../../feature/infos.slice";
import Loader from "../../../Partenaire Omisify/Loader";

export default function InitializeNewPointLikesPublication() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);

  const userId = localStorage.getItem("https://omisify.com/userId");

  // total life
  const pointtlifeoct2022 = 0;
  const pointtlife2022 = 0;
  const pointtlife = 0;

  const gaintlifeoct2022 = 0;
  const gaintlife2022 = 0;
  const gaintlife = 0;

  // likespublication
  const pointtlikespublicationoct2022 = 0;
  const pointtlikespublication2022 = 0;
  const pointtlikespublicationlife = 0;

  const gaintlikespublicationoct2022 = 0;
  const gaintlikespublication2022 = 0;
  const gaintlikespublicationlife = 0;

  const numbertlikespublicationoct2022 = 0;
  const numbertlikespublication2022 = 0;
  const numbertlikespublicationlife = 0;

  const likespublicationrecent = 0;

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const getoldpointtlikespublicationoct2022 =
            res.data.pointtlikespublicationoct2022;
          if (getoldpointtlikespublicationoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikespublicationoct2022",
              getoldpointtlikespublicationoct2022
            );
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas getoldpointtlikespublicationoct2022 dans le localstorage
  const getoldpointtlikespublicationoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlikespublicationoct2022"
  );

  async function Next(e) {
    setIsLoading2(true);
    e.preventDefault();

    const data = {
      // total life
      pointtlifeoct2022,
      pointtlife2022,
      pointtlife,

      gaintlifeoct2022,
      gaintlife2022,
      gaintlife,

      // likespublication
      pointtlikespublicationoct2022,
      pointtlikespublication2022,
      pointtlikespublicationlife,

      gaintlikespublicationoct2022,
      gaintlikespublication2022,
      gaintlikespublicationlife,

      numbertlikespublicationoct2022,
      numbertlikespublication2022,
      numbertlikespublicationlife,

      likespublicationrecent,
    };

    await axios
      .put(
        `${process.env.REACT_APP_OMISIFY_API}/api/user/updatelikespublication/${userId}`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(updateInfos(data));

        const getoldpointtlikespublicationoct2022 =
          res.data.pointtlikespublicationoct2022;
        localStorage.setItem(
          "https://omisify.com/getoldpointtlikespublicationoct2022",
          getoldpointtlikespublicationoct2022
        );
      })
      .catch((err) => console.log(err));
    window.location.reload();
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="stats-big-title">
        <p>Actualisation des points</p>
      </div>
      <div className="initiatlize"></div>
      {isLoading && (
        <p style={{ textAlign: "center", fontSize: "17px" }}>
          Chargement des données...
        </p>
      )}

      <div className="go-to-refresh">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {!getoldpointtlikespublicationoct2022 && (
              <>
                <p>
                  Cliquez sur Continuer pour aller sur la page d'actualisation
                  des likespublicationaires
                </p>
                {isLoading2 ? (
                  <Loader />
                ) : (
                  <>
                    <button onClick={Next}>Continuer</button>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
