import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function YetcheFooter() {
  //const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://famous-peplum-dove.cyclic.app/")
      .then((res) => console.log(res));
  }, []);
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Commentaires : 0 point(s)</li>
          <li>Publications : 0 point(s)</li>
          <li>Messages & PCA : 0 point(s)</li>
          <li>Code Bonus : 0 point(s)</li>
          <li>Total des Points : 0 point(s)</li>
          <li>Valeur des Points : 0€</li>
          <li>Likes : 0€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 0€</p>
        </div>
      </div>
      <div className="request-money">
        <NavLink to="/yetche-contact">
          <button>Demander ma rémunération</button>
        </NavLink>
      </div>
      <div>cons</div>
    </>
  );
}
