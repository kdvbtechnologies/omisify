import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Partenaire Omisify/Loader";

export default function AccessCode() {
  const navigate = useNavigate();
  const [accesscode, setAccesscode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const userId = localStorage.getItem("https://omisify.com/userId");

  async function Create(e) {
    setIsLoading(true);
    e.preventDefault();
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
      data: {
        accesscode,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Arial, Helvetica, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="access-code">
        <div className="title">
          <p>Code d'accès</p>
        </div>
        <p>
          Le code d'accès est indispensable pour accéder aux fonctionalités en
          cours de développement
        </p>
        <p>Créer un code d'accès à 4 chiffres</p>
        <input
          type="number"
          placeholder="__ __ __ __"
          value={accesscode}
          onChange={(e) => setAccesscode(e.target.value)}
          name="accesscode"
        />

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <button onClick={Create}>Créer</button>
          </>
        )}
      </div>
    </div>
  );
}
