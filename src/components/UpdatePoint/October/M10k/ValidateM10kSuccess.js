import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function ValidateM10kSuccess() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
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
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
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
    </div>
  );
}
