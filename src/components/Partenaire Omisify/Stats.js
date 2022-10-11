import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Stats() {
  const navigate = useNavigate();
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  // month
  /*const [month, setMonth] = useState([]);

  useEffect(() => {
    axios
      .get(`https://famous-peplum-dove.cyclic.app/api/month/`)
      .then((res) => setMonth(res.data))
      .catch((err) => console.log(err));
  }, []);*/

  // point
  const [point, setPoint] = useState([]);

  useEffect(() => {
    axios
      .get(`https://famous-peplum-dove.cyclic.app/api/point/`)
      .then((res) => setPoint(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="stats-big-title">
        <p>Statistiques détaillés</p>
      </div>

      <div className="flex-stats">
        <div className="stats">
          <div>
            <div className="stats-title">
              <p>Septembre 2022</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                {point.map((point) => (
                  <p>
                    {point.dSeptember2022} || {point.cSeptember2022} points
                  </p>
                ))}
              </div>
            </div>
            <div className="total">
              <p> points • likes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-stats">
        <div className="stats">
          <div>
            <div className="stats-title">
              <p>Octobre 2022</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                {point.map((point) => (
                  <p>
                    {point.dOctober2022} || {point.cOctober2022} points
                  </p>
                ))}
              </div>
            </div>
            <div className="total">
              <p> points • likes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-stats">
        <div className="stats">
          <div>
            <div className="stats-title">
              <p>Novembre 2022</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                {point.map((point) => (
                  <p>
                    {point.dNovember2022} || {point.cNovember2022} points
                  </p>
                ))}
              </div>
            </div>
            <div className="total">
              <p> points • likes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-stats">
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
      </div>

      <div className="flex-stats">
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
      </div>

      <div className="flex-stats">
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
      </div>
    </div>
  );
}
