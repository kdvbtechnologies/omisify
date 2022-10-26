import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function NewCommentPanel() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [numbercommententeradmin, setNumbercommententeradmin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const statuscomment = "YES";

  async function Validate(e) {
    setIsLoading(true);
    e.preventDefault();
    const save = localStorage.setItem(
      "https://omisify.com/numbercommententeradmin",
      numbercommententeradmin
    );
    console.log(save);

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/${userId}`,
      data: {
        numbercommententeradmin,
        statuscomment,
      },
    })
      .then((res) => {
        console.log(res);
        const getnumbercommententeradmin = localStorage.getItem(
          "https://omisify.com/numbercommententeradmin"
        );
        const name = res.data.name;
        if (name) {
          setSuccess(
            `${getnumbercommententeradmin} commentaire(s) ajouté(s) avec succès à ${name}`
          );
        }
      })
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
        <button onClick={() => navigate(-1)}>Retour</button>
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
          <div className="success">
            <p>{success}</p>
          </div>
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
