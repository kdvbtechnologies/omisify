import axios from "axios";
import { useState } from "react";
import Loader from "../../../Partenaire Omisify/Loader";

export default function ValidateCalculM10k() {
  const statusm10k = "NO";
  const newnumberm10kenteradmin = "0";
  const [isLoading, setIsLoading] = useState(false);

  const getdate = new Date();
  const date = getdate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const pointtm10klife = localStorage.getItem(
    "https://omisify.com/resultpointtm10klife"
  );

  const gaintlife = localStorage.getItem("https://omisify.com/resultgaintlife");
  const pointtlife = localStorage.getItem(
    "https://omisify.com/resultpointtlife"
  );

  async function Validate() {
    setIsLoading(true);
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatem10k/634c8ab0f59d4e9994f83884`,
      data: {
        pointtm10klife,

        pointtlife,
        gaintlife,

        statusm10k,
        numberm10kenteradmin: newnumberm10kenteradmin,
        date,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="all">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <button onClick={Validate}>Valider</button>
        </>
      )}
    </div>
  );
}
