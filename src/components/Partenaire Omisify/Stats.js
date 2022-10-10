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
              <p>Oct</p>
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
                <div className="hr">
                  <hr />
                </div>
                <p>07/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>08/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>09/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>10/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>11/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>12/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>13/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>14/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>15/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>16/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>17/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>18/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>19/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>20/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>21/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>22/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>23/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>24/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>25/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>26/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>27/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>28/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>29/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>30/10/2022 ||</p>
                <div className="hr">
                  <hr />
                </div>
                <p>31/10/2022 ||</p>
              </div>
            </div>
            <div className="total">
              <p>1500 points • 25 likes</p>
            </div>
          </div>
        </div>

        <div className="stats">
          <div>
            <div className="stats-title">
              <p>Septembre 2022</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                <p>28/09/2022 || 100 points</p>

                <div className="hr">
                  <hr />
                </div>
                <p>29/09/2022 || 94 points • 2 l</p>

                <div className="hr">
                  <hr />
                </div>
                <p>30/09/2022 || 124 points • 2 l</p>
              </div>
            </div>
            <div className="total">
              <p>318 points • 4 likes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
