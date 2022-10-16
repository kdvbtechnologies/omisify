import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export default function AddSeptember() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const pointtcommentsept2022 = 0;
  const pointtcomment2022 = 0;
  const pointtcommentlife = 0;
  const pointtlifesept2022 = 0;
  const pointtlife2022 = 0;
  const pointtlife = 0;

  const gaintcommentsept2022 = 0;
  const gaintcomment2022 = 0;
  const gaintcommentlife = 0;
  const gaintlifesept2022 = 0;
  const gaintlife2022 = 0;
  const gaintlife = 0;

  const numbertcommentsept2022 = 0;
  const numbertcomment2022 = 0;
  const numbertcommentlife = 0;

  // email
  const pointtemailsept2022 = 0;
  const pointtemail2022 = 0;
  const pointtemaillife = 0;

  const gaintemailsept2022 = 0;
  const gaintemail2022 = 0;
  const gaintemaillife = 0;

  const numbertemailsept2022 = 0;
  const numbertemail2022 = 0;
  const numbertemaillife = 0;

  const emailrecent = 0;

  // data likecomment
  const pointtlikecommentsept2022 = 0;
  const pointtlikecomment2022 = 0;
  const pointtlikecommentlife = 0;

  const gaintlikecommentsept2022 = 0;
  const gaintlikecomment2022 = 0;
  const gaintlikecommentlife = 0;

  const numbertlikecommentsept2022 = 0;
  const numbertlikecomment2022 = 0;
  const numbertlikecommentlife = 0;

  const likecommentrecent = 0;

  // data likepublication
  const pointtlikepublicationsept2022 = 0;
  const pointtlikepublication2022 = 0;
  const pointtlikepublicationlife = 0;

  const gaintlikepublicationsept2022 = 0;
  const gaintlikepublication2022 = 0;
  const gaintlikepublicationlife = 0;

  const numbertlikepublicationsept2022 = 0;
  const numbertlikepublication2022 = 0;
  const numbertlikepublicationlife = 0;

  const likepublicationrecent = 0;

  // data m10k
  const pointtm10ksept2022 = 0;
  const pointtm10k2022 = 0;
  const pointtm10klife = 0;

  const gaintm10ksept2022 = 0;
  const gaintm10k2022 = 0;
  const gaintm10klife = 0;

  const numbertm10ksept2022 = 0;
  const numbertm10k2022 = 0;
  const numbertm10klife = 0;

  const m10krecent = 0;

  // data message
  const pointtmessagesept2022 = 0;
  const pointtmessage2022 = 0;
  const pointtmessagelife = 0;

  const gaintmessagesept2022 = 0;
  const gaintmessage2022 = 0;
  const gaintmessagelife = 0;

  const numbertmessagesept2022 = 0;
  const numbertmessage2022 = 0;
  const numbertmessagelife = 0;

  const messagerecent = 0;

  // data mwi
  const pointtmwisept2022 = 0;
  const pointtmwi2022 = 0;
  const pointtmwilife = 0;

  const gaintmwisept2022 = 0;
  const gaintmwi2022 = 0;
  const gaintmwilife = 0;

  const numbertmwisept2022 = 0;
  const numbertmwi2022 = 0;
  const numbertmwilife = 0;

  const mwirecent = 0;

  // data publication
  const pointtpublicationsept2022 = 0;
  const pointtpublication2022 = 0;
  const pointtpublicationlife = 0;

  const gaintpublicationsept2022 = 0;
  const gaintpublication2022 = 0;
  const gaintpublicationlife = 0;

  const numbertpublicationsept2022 = 0;
  const numbertpublication2022 = 0;
  const numbertpublicationlife = 0;

  const publicationrecent = 0;

  // data pwi
  const pointtpwisept2022 = 0;
  const pointtpwi2022 = 0;
  const pointtpwilife = 0;

  const gaintpwisept2022 = 0;
  const gaintpwi2022 = 0;
  const gaintpwilife = 0;

  const numbertpwisept2022 = 0;
  const numbertpwi2022 = 0;
  const numbertpwilife = 0;

  const pwirecent = 0;

  const userId = localStorage.getItem("https://omisify.com/userId");

  useEffect(() => {
    async function get() {
      await axios
        .get(`https://famous-peplum-dove.cyclic.app/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const tpointthismonth = res.data.pointtlifesept2022;
          if (tpointthismonth) {
            localStorage.setItem(
              "https://omisify.com/tpointthismonth",
              tpointthismonth
            );
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
      setLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas tpointthismonth dans le localstorage
  const tpointthismonth = localStorage.getItem(
    "https://omisify.com/tpointthismonth"
  );

  async function Next() {
    // first step : post
    await axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
      data: {
        pointtcommentsept2022,
        pointtcomment2022,
        pointtcommentlife,
        pointtlifesept2022,
        pointtlife2022,
        pointtlife,

        gaintcommentsept2022,
        gaintcomment2022,
        gaintcommentlife,
        gaintlifesept2022,
        gaintlife2022,
        gaintlife,

        numbertcommentsept2022,
        numbertcomment2022,
        numbertcommentlife,

        // email
        pointtemailsept2022,
        pointtemail2022,
        pointtemaillife,

        gaintemailsept2022,
        gaintemail2022,
        gaintemaillife,

        numbertemailsept2022,
        numbertemail2022,
        numbertemaillife,

        emailrecent,

        // data likecomment
        pointtlikecommentsept2022,
        pointtlikecomment2022,
        pointtlikecommentlife,

        gaintlikecommentsept2022,
        gaintlikecomment2022,
        gaintlikecommentlife,

        numbertlikecommentsept2022,
        numbertlikecomment2022,
        numbertlikecommentlife,

        likecommentrecent,

        // data likepublication
        pointtlikepublicationsept2022,
        pointtlikepublication2022,
        pointtlikepublicationlife,

        gaintlikepublicationsept2022,
        gaintlikepublication2022,
        gaintlikepublicationlife,

        numbertlikepublicationsept2022,
        numbertlikepublication2022,
        numbertlikepublicationlife,

        likepublicationrecent,

        // data m10k
        pointtm10ksept2022,
        pointtm10k2022,
        pointtm10klife,

        gaintm10ksept2022,
        gaintm10k2022,
        gaintm10klife,

        numbertm10ksept2022,
        numbertm10k2022,
        numbertm10klife,

        m10krecent,

        // data message
        pointtmessagesept2022,
        pointtmessage2022,
        pointtmessagelife,

        gaintmessagesept2022,
        gaintmessage2022,
        gaintmessagelife,

        numbertmessagesept2022,
        numbertmessage2022,
        numbertmessagelife,

        messagerecent,

        // data mwi
        pointtmwisept2022,
        pointtmwi2022,
        pointtmwilife,

        gaintmwisept2022,
        gaintmwi2022,
        gaintmwilife,

        numbertmwisept2022,
        numbertmwi2022,
        numbertmwilife,

        mwirecent,

        // data publication
        pointtpublicationsept2022,
        pointtpublication2022,
        pointtpublicationlife,

        gaintpublicationsept2022,
        gaintpublication2022,
        gaintpublicationlife,

        numbertpublicationsept2022,
        numbertpublication2022,
        numbertpublicationlife,

        publicationrecent,

        // data pwi
        pointtpwisept2022,
        pointtpwi2022,
        pointtpwilife,

        gaintpwisept2022,
        gaintpwi2022,
        gaintpwilife,

        numbertpwisept2022,
        numbertpwi2022,
        numbertpwilife,

        pwirecent,
      },
    })
      .then((res) => {
        console.log(res);
        const tpointthismonth = res.data.pointtlifesept2022;
        localStorage.setItem(
          "https://omisify.com/tpointthismonth",
          tpointthismonth
        );

        /*
        // second step : put
        const idtsept2022 = localStorage.getItem("https://omisify.com/idtsept");
        axios({
          method: "put",
          url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
          data: {
            idtsept2022,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));*/
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
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>

      <div className="stats-big-title">
        <p>Actualiser mes points</p>
      </div>
      <div className="go-to-refresh">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {!tpointthismonth && (
              <>
                <p>Cliquez sur continuer pour aller à la page suivante</p>
                <button onClick={Next}>Continuer</button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
