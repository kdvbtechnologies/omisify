import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "../../Partenaire Omisify/Loader";

export default function Dev() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [newcodedev, setnewCodedev] = useState("");
  const userId = localStorage.getItem("https://omisify.com/userId");

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const codedev = res.data.codedev;
          if (codedev) {
            localStorage.setItem("https://omisify.com/codedev", codedev);
          }
        })
        .cath((err) => console.log(err));
    }
    get();
  }, [userId]);

  async function Verify(e) {
    setIsLoading(true);
    e.preventDefault();

    const codedev = localStorage.getItem("https://omisify.com/codedev");
    if (newcodedev === codedev) {
      console.log("succes codedev");
    } else {
      console.log("error codedev");
    }
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="dev">
        <p>
          Tout ce qui est caché derrière cette page sont des fonctionnalités qui
          sont en cours de développement. Vous pouvez y accéder si vous disposer
          d'un code d'accès
        </p>
        <div className="b">
          <i>
            Si vous ne disposez pas d'un code d'accès,{" "}
            <NavLink to="/partner-contact">contacter</NavLink> le service
            Partenaire pour l'obtention d'un code d'accès
          </i>
        </div>
        <p>
          Entrer votre code d'accès au fonctionnalité en cours de développement
        </p>
        <input
          type="number"
          placeholder="Code d'accès"
          value={newcodedev}
          onChange={(e) => setnewCodedev(e.target.value)}
          name="codedev"
        />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {" "}
            <button onClick={Verify}>Vérifier</button>{" "}
          </>
        )}
      </div>
    </div>
  );
}
