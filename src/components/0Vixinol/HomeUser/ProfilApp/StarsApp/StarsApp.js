import { NavLink } from "react-router-dom";
import StarsFive from "./StarsFive";
import StarsFour from "./StarsFour";
import StarsThree from "./StarsThree";
import StarsTwo from "./StarsTwo";
import StarOne from "./StarOne";

export default function StarsApp() {
  return (
    <>
      <div className="stars-app">
        <div className="title">
          <p>Notes et Avis</p>
        </div>

        <div className="display">
          <div className="a">
            <p>4.3</p>
          </div>

          <div className="b">
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
          {/* b */}
        </div>
        {/* display */}
      </div>
    </>
  );
}
