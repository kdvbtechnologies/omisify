import axios from "axios";
import { useState } from "react";
import Loader from "../../../Partenaire Omisify/Loader";

export default function NewLikesCommentPanel() {
  const statuslikescomment = "YES";
  const getgdb = "1";
  const [gdb, setGdb] = useState(getgdb);
  const [numberlikescommententeradmin, setnumberlikescommententeradmin] =
    useState("");
  const [userId, setUserId] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Validate() {
    setIsLoading(true);

    const save = localStorage.setItem(
      "https://omisify.com/numberlikescommententeradmin",
      numberlikescommententeradmin
    );
    console.log(save);

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatelikescomment/${userId}`,
      data: {
        statuslikescomment,
        numberlikescommententeradmin,
        gdb,
      },
    })
      .then((res) => {
        console.log(res);
        const getnumberlikescommententeradmin = localStorage.getItem(
          "https://omisify.com/numberlikescommententeradmin"
        );

        const name = res.data.name;
        if (name) {
          setSuccess(
            `${getnumberlikescommententeradmin} Likes C ajouté(s) avec succès à ${name}`
          );
        }
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  }

  return (
    <>
      <div className="new-comment-panel">
        <div className="title">
          <p>Likes (commentaire)</p>
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

          <p>Entrer le nombre de nouveau(x) Likes C</p>
          <input
            type="number"
            value={numberlikescommententeradmin}
            onChange={(e) => setnumberlikescommententeradmin(e.target.value)}
            name="numberlikescommententeradmin"
            placeholder="Nombre de likes C"
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
