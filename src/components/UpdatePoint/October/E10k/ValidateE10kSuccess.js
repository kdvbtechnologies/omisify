import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function ValidateE10kSuccess() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          const pointte10klife = res.data.pointte10klife;
          if (pointte10klife) {
            localStorage.setItem(
              "https://omisify.com/pointte10klife",
              pointte10klife
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
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  return (
    <>
      <div className="validate-comment-success">
        <div className="title">
          <p>Résultats Validés !</p>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <NavLink to="/complete">
              <button>Terminer</button>
            </NavLink>
          </>
        )}
      </div>
    </>
  );
}
