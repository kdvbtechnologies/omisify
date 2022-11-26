import { NavLink } from "react-router-dom";
import StarOne from "./StarOne";
import StarsFive from "./StarsFive";
import StarsFour from "./StarsFour";
import StarsThree from "./StarsThree";
import StarsTwo from "./StarsTwo";

export default function StarsBook() {
  return (
    <>
      <div className="stars-book">
        <div className="title">
          <p>Commentaires & évaluations</p>
        </div>

        <NavLink
          style={{ color: "black", textDecoration: "none" }}
          to="/comment-book"
        >
          <StarsFive />
        </NavLink>

        <StarsFour />
        <StarsThree />
        <StarsTwo />
        <StarOne />
      </div>
    </>
  );
}
