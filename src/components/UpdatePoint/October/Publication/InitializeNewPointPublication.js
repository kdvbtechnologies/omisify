import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateInfos } from "../../../../feature/infos.slice";
import Loader from "../../../Partenaire Omisify/Loader";

export default function InitializeNewPointPublication() {
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

  // publication
  const pointtpublicationoct2022 = 0;
  const pointtpublication2022 = 0;
  const pointtpublicationlife = 0;

  const gaintpublicationoct2022 = 0;
  const gaintpublication2022 = 0;
  const gaintpublicationlife = 0;

  const numbertpublicationoct2022 = 0;
  const numbertpublication2022 = 0;
  const numbertpublicationlife = 0;

  const publicationrecent = 0;

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const getoldpointtpublicationoct2022 =
            res.data.pointtpublicationoct2022;
          if (getoldpointtpublicationoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpublicationoct2022",
              getoldpointtpublicationoct2022
            );
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas getoldpointtpublicationoct2022 dans le localstorage
  const getoldpointtpublicationoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpublicationoct2022"
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

      // publication
      pointtpublicationoct2022,
      pointtpublication2022,
      pointtpublicationlife,

      gaintpublicationoct2022,
      gaintpublication2022,
      gaintpublicationlife,

      numbertpublicationoct2022,
      numbertpublication2022,
      numbertpublicationlife,

      publicationrecent,
    };

    await axios
      .put(
        `${process.env.REACT_APP_OMISIFY_API}/api/user/updatepublication/${userId}`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(updateInfos(data));

        const getoldpointtpublicationoct2022 =
          res.data.pointtpublicationoct2022;
        localStorage.setItem(
          "https://omisify.com/getoldpointtpublicationoct2022",
          getoldpointtpublicationoct2022
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
            {!getoldpointtpublicationoct2022 && (
              <>
                <p>
                  Cliquez sur Continuer pour aller sur la page d'actualisation
                  des publicationaires
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
