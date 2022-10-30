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
        });
    }
    get();
  });

  // 2e etape
  const oldpointtm10klife = localStorage.getItem(
    "https://omisify.com/pointtm10klife"
  );

  const calculpointtm10k =
    parseInt(newnumber) * 0.07 + parseFloat(oldpointtm10klife);

  function Save(e) {
    setIsLoading(true);
    e.preventDefault();

    localStorage.setItem(
      "https://omisify.com/resultpointtm10klife",
      calculpointtm10k
    );
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
