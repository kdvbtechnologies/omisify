import axios from "axios";
import { useState } from "react";
import Loader from "../../../Partenaire Omisify/Loader";

export default function NewMessagePanel() {
  const [userId, setUserId] = useState("");
  const getgdb = "1";
  const [gdb, setGdb] = useState(getgdb);
  const [numbermessageenteradmin, setNumbermessageenteradmin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const statusmessage = "YES";

  async function Validate(e) {
    setIsLoading(true);
    e.preventDefault();
    const save = localStorage.setItem(
      "https://omisify.com/numbermessageenteradmin",
      numbermessageenteradmin
    );
    console.log(save);

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatemessage/${userId}`,
      data: {
        numbermessageenteradmin,
        statusmessage,
        gdb,
      },
    })
      .then((res) => {
        console.log(res);
        const getnumbermessageenteradmin = localStorage.getItem(
          "https://omisify.com/numbermessageenteradmin"
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
            `${getnumbermessageenteradmin} message(s) ajouté(s) avec succès à ${name} le ${date} (Heure de Brasilia)`
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
          <p>Message</p>
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

          <p>Entrer le nombre de nouveau(x) message(s)</p>
          <input
            type="number"
            placeholder="Nombre de message(s)"
            value={numbermessageenteradmin}
            onChange={(e) => setNumbermessageenteradmin(e.target.value)}
            name="numbermessageenteradmin"
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
