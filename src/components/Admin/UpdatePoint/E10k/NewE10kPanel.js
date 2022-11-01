import axios from "axios";
import Loader from "../../../Partenaire Omisify/Loader";
import { useState } from "react";

export default function NewE10kPanel() {
  const statuse10k = "YES";
  const getgdb = "1";
  const [gdb, setGdb] = useState(getgdb);
  const [numbere10kenteradmin, setnumbere10kenteradmin] = useState("");
  const [userId, setUserId] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Validate() {
    setIsLoading(true);

    const save = localStorage.setItem(
      "https://omisify.com/numbere10kenteradmin",
      numbere10kenteradmin
    );
    console.log(save);

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatee10k/${userId}`,
      data: {
        statuse10k,
        numbere10kenteradmin,
        gdb,
      },
    })
      .then((res) => {
        console.log(res);
        const getnumbere10kenteradmin = localStorage.getItem(
          "https://omisify.com/numbere10kenteradmin"
        );

        const name = res.data.name;
        if (name) {
          setSuccess(
            `${getnumbere10kenteradmin} E10k ajouté(s) avec succès à ${name}`
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
          <p>E10k</p>
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

          <p>Entrer le nombre de nouveau(x) E10k</p>
          <input
            type="number"
            value={numbere10kenteradmin}
            onChange={(e) => setnumbere10kenteradmin(e.target.value)}
            name="numbere10kenteradmin"
            placeholder="Nombre de E10k"
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
