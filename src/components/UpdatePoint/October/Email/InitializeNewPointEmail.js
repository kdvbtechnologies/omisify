import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateInfos } from "../../../../feature/infos.slice";
import Loader from "../../../Partenaire Omisify/Loader";

export default function InitializeNewPointEmail() {
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

  // email
  const pointtemailoct2022 = 0;
  const pointtemail2022 = 0;
  const pointtemaillife = 0;

  const gaintemailoct2022 = 0;
  const gaintemail2022 = 0;
  const gaintemaillife = 0;

  const numbertemailoct2022 = 0;
  const numbertemail2022 = 0;
  const numbertemaillife = 0;

  const emailrecent = 0;

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const getoldpointtemailoct2022 = res.data.pointtemailoct2022;
          if (getoldpointtemailoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtemailoct2022",
              getoldpointtemailoct2022
            );
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas getoldpointtemailoct2022 dans le localstorage
  const getoldpointtemailoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtemailoct2022"
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

      // email
      pointtemailoct2022,
      pointtemail2022,
      pointtemaillife,

      gaintemailoct2022,
      gaintemail2022,
      gaintemaillife,

      numbertemailoct2022,
      numbertemail2022,
      numbertemaillife,

      emailrecent,
    };

    await axios
      .put(
        `${process.env.REACT_APP_OMISIFY_API}/api/user/updateemail/${userId}`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(updateInfos(data));

        const getoldpointtemailoct2022 = res.data.pointtemailoct2022;
        localStorage.setItem(
          "https://omisify.com/getoldpointtemailoct2022",
          getoldpointtemailoct2022
        );
      })
      .catch((err) => console.log(err));
    //window.location.reload();
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
            {!getoldpointtemailoct2022 && (
              <>
                <p>
                  Cliquez sur Continuer pour aller sur la page d'actualisation
                  des emailaires
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
