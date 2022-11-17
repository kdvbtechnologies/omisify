import { NavLink } from "react-router-dom";
import AfterNameOfSearchResults from "./AfterNameOfSearchResults";
import ImageTitleResults from "./ImageTitleResults";

export default function NameOfSearchResults() {
  return (
    <>
      <div className="name-of-search-results">
        <p>Cristiano Ronaldo</p>
        <AfterNameOfSearchResults />
        <NavLink to="/result-encyclodata">
          <ImageTitleResults />
        </NavLink>
      </div>
    </>
  );
}
