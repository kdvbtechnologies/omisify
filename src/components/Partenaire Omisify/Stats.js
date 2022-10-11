import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Stats() {
  const navigate = useNavigate();
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  // month
  const [month, setMonth] = useState([]);

  async function AllMonth() {
    await axios
      .get(`https://famous-peplum-dove.cyclic.app/api/month/`)
      .then((res) => setMonth(res.data))
      .catch((err) => console.log(err));
  }
  AllMonth();

  // point
  const [point, setPoint] = useState([]);

  async function AllPoint() {
    await axios
      .get(`https://famous-peplum-dove.cyclic.app/api/point/`)
      .then((res) => setPoint(res.data))
      .catch((err) => console.log(err));
  }
  AllPoint();

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
              <p>{month.month}</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                <p>
                  {point.date} || {point.pcomments}
                </p>
                <div className="hr">
                  <hr />
                </div>
                <p> ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p> ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p> ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p> ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p> ||</p>
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
