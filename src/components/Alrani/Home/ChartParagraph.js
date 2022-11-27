import { NavLink } from "react-router-dom";

export default function ChartParagraph() {
  return (
    <>
      <div className="chart-paragraph">
        <div className="align">
          <div className="a">
            <p
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "5px 10px",
                margin: "5px",
              }}
            >
              #4
            </p>{" "}
            <p style={{ paddingRight: "5px" }}>Ouvrage N°4 dans</p>{" "}
            <NavLink style={{ color: "black" }} to="/">
              <p style={{ color: "black" }}>Investir et Entreprendre</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
