import { NavLink } from "react-router-dom";

export default function ChartApp() {
  return (
    <>
      <div className="chart-app">
        <div className="align">
          <div className="display">
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
              </p>
              <p style={{ paddingRight: "5px" }}>
                Application N°4 dans la catégorie
              </p>
            </div>

            <div className="b">
              <NavLink style={{ color: "black" }} to="/">
                <p style={{ color: "black" }}>Productivité</p>
              </NavLink>
            </div>
          </div>
          {/* display */}
        </div>
        {/* align */}
      </div>
      {/* chart app */}
    </>
  );
}
