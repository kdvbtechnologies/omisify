import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Stats() {
  const navigate = useNavigate();
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  async function MyPosts() {
    await axios
      .get(`https://famous-peplum-dove.cyclic.app/api/post/5678910`)
      .then((res) => console.log(res));
  }
  MyPosts();

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
