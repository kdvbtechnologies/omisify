import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../Partenaire Omisify/Loader";

export default function CalculM10k() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [newnumber, setNewnumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 1ere etape
  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const pointtm10klife = res.data.pointtm10klife;
          if (pointtm10klife) {
            localStorage.setItem(
              "https://omisify.com/pointtm10klife",
              pointtm10klife
            );
          }

          const pointtlife = res.data.pointtlife;
          if (pointtlife) {
            localStorage.setItem("https://omisify.com/pointtlife", pointtlife);
          }

          const gaintlife = res.data.gaintlife;
          if (gaintlife) {
            localStorage.setItem("https://omisify.com/gaintlife", gaintlife);
          }

          const statusm10k = res.data.statusm10k;
          if (statusm10k) {
            localStorage.setItem("https://omisify.com/statusm10k", statusm10k);
          }

          const numberm10kenteradmin = res.data.numberm10kenteradmin;
          if (numberm10kenteradmin) {
            localStorage.setItem(
              "https://omisify.com/numberm10kenteradmin",
              numberm10kenteradmin
            );
          }

          const gdb = res.data.gdb;
          if (gdb) {
            localStorage.setItem("https://omisify.com/gdb", gdb);
          }
        });
    }
    get();
  });

  // 2e etape
  const oldpointtm10klife = localStorage.getItem(
    "https://omisify.com/pointtm10klife"
  );

  const oldpointtlife = localStorage.getItem("https://omisify.com/pointtlife");

  const oldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  const gdb = localStorage.getItem("https://omisify.com/gdb");

  const calculpointtm10k =
    parseInt(newnumber) * 0.7 * gdb + parseFloat(oldpointtm10klife);

  const calculpointtlife =
    parseInt(newnumber) * 0.7 * gdb + parseFloat(oldpointtlife);

  const calculgaintlife =
    parseInt(newnumber) * 0.0007 * gdb + parseFloat(oldgaintlife);

  function Save(e) {
    setIsLoading(true);
    e.preventDefault();

    localStorage.setItem("https://omisify.com/newnumber", newnumber);

    localStorage.setItem(
      "https://omisify.com/resultpointtm10klife",
      calculpointtm10k
    );

    localStorage.setItem(
      "https://omisify.com/resultpointtlife",
      calculpointtlife
    );

    localStorage.setItem(
      "https://omisify.com/resultgaintlife",
      calculgaintlife
    );

    window.location = "/validate-calcul-m10k";
  }

  return (
    <div className="all">
      <input
        type="number"
        placeholder="Nombre de M10k"
        value={newnumber}
        onChange={(e) => setNewnumber(e.target.value)}
        name="newnumber"
      />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <button onClick={Save}>Calcul terminé</button>
        </>
      )}
    </div>
  );
}
