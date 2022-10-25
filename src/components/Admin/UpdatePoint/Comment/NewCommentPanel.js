import axios from "axios";
import { useState } from "react";
import Loader from "../../../Partenaire Omisify/Loader";

export default function NewCommentPanel() {
  const [userId, setUserId] = useState("");
  const [numbercommententeradmin, setNumbercommententeradmin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Validate(e) {
    setIsLoading(true);
    e.preventDefault();
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/${userId}`,
      data: {
        numbercommententeradmin,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setIsLoading(false);
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <>
      <div className="back-btn">
        <button>Retour</button>
      </div>
      <div style={family} className="new-comment-panel">
        <div className="title">
          <p>Commentaire</p>
        </div>
        <div className="align">
          <div className="a">
            <p>Entrer le userId</p>
            <input
              type="text"
              placeholder="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              name="userId"
            />
          </div>

          <p>Entrer le nombre de nouveau(x) commentaire(s)</p>
          <input
            type="number"
            placeholder="Nombre de commentaire(s)"
            value={numbercommententeradmin}
            onChange={(e) => setNumbercommententeradmin(e.target.value)}
            name="numbercommententeradmin"
          />
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <button onClick={Validate}>Valider</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
