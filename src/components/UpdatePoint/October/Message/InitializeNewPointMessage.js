import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateInfos } from "../../../../feature/infos.slice";
import Loader from "../../../Partenaire Omisify/Loader";

export default function InitializeNewPointMessage() {
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

  // message
  const pointtmessageoct2022 = 0;
  const pointtmessage2022 = 0;
  const pointtmessagelife = 0;

  const gaintmessageoct2022 = 0;
  const gaintmessage2022 = 0;
  const gaintmessagelife = 0;

  const numbertmessageoct2022 = 0;
  const numbertmessage2022 = 0;
  const numbertmessagelife = 0;

  const messagerecent = 0;

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const getoldpointtmessageoct2022 = res.data.pointtmessageoct2022;
          if (getoldpointtmessageoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtmessageoct2022",
              getoldpointtmessageoct2022
            );
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas getoldpointtmessageoct2022 dans le localstorage
  const getoldpointtmessageoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtmessageoct2022"
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

      // message
      pointtmessageoct2022,
      pointtmessage2022,
      pointtmessagelife,

      gaintmessageoct2022,
      gaintmessage2022,
      gaintmessagelife,

      numbertmessageoct2022,
      numbertmessage2022,
      numbertmessagelife,

      messagerecent,
    };

    await axios
      .put(
        `${process.env.REACT_APP_OMISIFY_API}/api/user/updatemessage/${userId}`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(updateInfos(data));

        const getoldpointtmessageoct2022 = res.data.pointtmessageoct2022;
        localStorage.setItem(
          "https://omisify.com/getoldpointtmessageoct2022",
          getoldpointtmessageoct2022
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
            {!getoldpointtmessageoct2022 && (
              <>
                <p>
                  Cliquez sur Continuer pour aller sur la page d'actualisation
                  des Messages
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
