import axios from "axios";
import { useState } from "react";
import Loader from "../../../Partenaire Omisify/Loader";

export default function NewM10Panel() {
  const getgdb = "1";
  const statusm10k = "YES";
  const [gdb, setgdb] = useState(getgdb);
  const [userId, setUserId] = useState("");
  const [numberm10kenteradmin, setnumberm10kenteradmin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function Validate(e) {
    setIsLoading(true);
    e.preventDefault();

    const save = localStorage.setItem(
      "https://omisify.com/numberm10kenteradmin",
      numberm10kenteradmin
    );
    console.log(save);

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatem10k/${userId}`,
      data: {
        gdb,
        numberm10kenteradmin,
        statusm10k,
      },
    })
      .then((res) => {
        console.log(res);
        const name = res.data.name;

        const numberm10kenteradmin = localStorage.getItem(
          "https://omisify.com/numberm10kenteradmin"
        );
        setSuccess(
          `${numberm10kenteradmin} M10k ajouté(s) avec succès à ${name}`
        );
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  }

  return (
    <>
      <div className="new-comment-panel">
        <div className="title">
          <p>M10k</p>
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

            <p>Journées de générosité</p>
            <select
              name="gdb"
              id="gdb"
              value={gdb}
              onChange={(e) => setgdb(e.target.value)}
            >
              <option value="1">Non</option>
              <option value="10">Oui</option>
            </select>

            <p>Entrer le nombre de nouveau(x) M10k</p>
            <input
              type="number"
              value={numberm10kenteradmin}
              onChange={(e) => setnumberm10kenteradmin(e.target.value)}
              name="numberm10kenteradmin"
              placeholder="Nombre de M10k"
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
      </div>
    </>
  );
}
