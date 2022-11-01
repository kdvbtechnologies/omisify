import axios from "axios";
import Loader from "../../../Partenaire Omisify/Loader";
import { useState } from "react";

export default function NewLikesPublicationPanel() {
  const statuslikespublication = "YES";
  const getgdb = "1";
  const [gdb, setGdb] = useState(getgdb);

  const [
    numberlikespublicationenteradmin,
    setnumberlikespublicationenteradmin,
  ] = useState("");

  const [userId, setUserId] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Validate() {
    setIsLoading(true);

    const save = localStorage.setItem(
      "https://omisify.com/numberlikespublicationenteradmin",
      numberlikespublicationenteradmin
    );
    console.log(save);

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatelikespublication/${userId}`,
      data: {
        statuslikespublication,
        numberlikespublicationenteradmin,
        gdb,
      },
    })
      .then((res) => {
        console.log(res);
        const getnumberlikespublicationenteradmin = localStorage.getItem(
          "https://omisify.com/numberlikespublicationenteradmin"
        );

        const name = res.data.name;
        if (name) {
          setSuccess(
            `${getnumberlikespublicationenteradmin} Likes P ajouté(s) avec succès à ${name}`
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
          <p>Likes (publication)</p>
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

          <p>Entrer le nombre de nouveau(x) Likes P</p>
          <input
            type="number"
            value={numberlikespublicationenteradmin}
            onChange={(e) =>
              setnumberlikespublicationenteradmin(e.target.value)
            }
            name="numberlikespublicationenteradmin"
            placeholder="Nombre de Likes P"
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
