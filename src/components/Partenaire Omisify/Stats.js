import { useNavigate } from "react-router-dom";
import EmptyStats from "./EmptyStats";
import StatsSeptember from "./StatsSeptember";

export default function Stats() {
  const idtotal = "634777f3d469d81e78edf3ef";
  const navigate = useNavigate();
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="stats-big-title">
        <p>Statistiques détaillés</p>
      </div>

      <div className="flex-stats">
        {idtotal ? <StatsSeptember /> : <EmptyStats />}
      </div>
    </div>
  );
}

/*
  <div className="stats">
          <div>
            <div className="stats-title">
              <p>Décembre 2022</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                {point.map((point) => (
                  <p>
                    {point.dDecember2022} || {point.cDecember2022} points
                  </p>
                ))}
              </div>
            </div>
            <div className="total">
              <p> points • likes</p>
            </div>
          </div>
        </div>

        <div className="stats">
          <div>
            <div className="stats-title">
              <p>Janvier 2023</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                {point.map((point) => (
                  <p>
                    {point.dJanvier2022} || {point.cJanvier2022} points
                  </p>
                ))}
              </div>
            </div>
            <div className="total">
              <p> points • likes</p>
            </div>
          </div>
        </div>

        <div className="stats">
          <div>
            <div className="stats-title">
              <p>Février 2023</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                {point.map((point) => (
                  <p>
                    {point.dfebruary} || {point.cfebruary} points
                  </p>
                ))}
              </div>
            </div>
            <div className="total">
              <p> points • likes</p>
            </div>
          </div>
        </div>

  */
