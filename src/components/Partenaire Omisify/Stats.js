import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Stats() {
  const navigate = useNavigate();
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  async function AllMonth() {
    await axios
      .get(`https://famous-peplum-dove.cyclic.app/api/month/`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  AllMonth();

  async function AllPoint() {
    await axios
      .get(`https://famous-peplum-dove.cyclic.app/api/point/`)
      .then((res) => console.log(res))
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
              <p> _ _ _</p>
            </div>
            <div className="stats-cards">
              <div className="a">
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
