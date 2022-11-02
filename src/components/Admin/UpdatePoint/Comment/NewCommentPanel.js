import axios from "axios";
import { useState } from "react";
import Loader from "../../../Partenaire Omisify/Loader";

export default function NewCommentPanel() {
  const [userId, setUserId] = useState("");
  const getgdb = "1";
  const [gdb, setGdb] = useState(getgdb);
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
        gdb,
      },
    })
      .then((res) => {
        console.log(res);
        const getnumbercommententeradmin = localStorage.getItem(
          "https://omisify.com/numbercommententeradmin"
        );

        const getdate = new Date();
        const date = getdate.toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        });
        const name = res.data.name;
        if (name) {
          setSuccess(
            `${getnumbercommententeradmin} commentaire(s) ajouté(s) avec succès à ${name} le ${date} (Heure de Brasilia)`
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

          <p>Journées de générosité</p>
          <select
            value={gdb}
            onChange={(e) => setGdb(e.target.value)}
            name="gdb"
            id="gdb"
          >
            <option value="1">Non</option>
            <option value="10">Oui</option>
          </select>

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
