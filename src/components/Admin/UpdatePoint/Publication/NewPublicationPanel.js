import axios from "axios";
import { useState } from "react";
import Loader from "../../../Partenaire Omisify/Loader";

export default function NewPublicationPanel() {
  const [userId, setUserId] = useState("");
  const getgdb = "1";
  const [gdb, setGdb] = useState(getgdb);

  const [numberpublicationenteradmin, setNumberpublicationenteradmin] =
    useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const statuspublication = "YES";

  async function Validate(e) {
    setIsLoading(true);
    e.preventDefault();
    const save = localStorage.setItem(
      "https://omisify.com/numberpublicationenteradmin",
      numberpublicationenteradmin
    );
    console.log(save);

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatepublication/${userId}`,
      data: {
        numberpublicationenteradmin,
        statuspublication,
        gdb,
      },
    })
      .then((res) => {
        console.log(res);
        const getnumberpublicationenteradmin = localStorage.getItem(
          "https://omisify.com/numberpublicationenteradmin"
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
            `${getnumberpublicationenteradmin} publication(s) ajouté(s) avec succès à ${name} le ${date} (Heure de Brasilia)`
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
          <p>Publication</p>
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

          <p>Entrer le nombre de nouvelle(s) publication(s)</p>
          <input
            type="number"
            placeholder="Nombre de publication(s)"
            value={numberpublicationenteradmin}
            onChange={(e) => setNumberpublicationenteradmin(e.target.value)}
            name="numberpublicationenteradmin"
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
