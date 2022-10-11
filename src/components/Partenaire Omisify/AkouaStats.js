import { useNavigate } from "react-router-dom";

export default function AkouaStats() {
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
        <div className="stats">
          <div>
            <div className="stats-title">
              <p>Octobre 2022</p>
            </div>
            <div className="stats-cards">
              <div className="a">
                <p>01/10/2022 || 61 points • 2 l</p>
                <div className="hr">
                  <hr />
                </div>
                <p>02/10/2022 || 103 points • 1 l</p>
                <div className="hr">
                  <hr />
                </div>
                <p>03/10/2022 || 53 points</p>
                <div className="hr">
                  <hr />
                </div>
                <p>04/10/2022 || 152 points</p>
                <div className="hr">
                  <hr />
                </div>
                <p>05/10/2022 || 229 points • 5 l</p>
                <div className="hr">
                  <hr />
                </div>
                <p>06/10/2022 || 158 points • 13 l</p>
                <div className="hr">
                  <hr />
                </div>
                <p>07/10/2022 || 268 points • 4 l</p>
                <div className="hr">
                  <hr />
                </div>
                <p>08/10/2022 || 249 points</p>
                <div className="hr">
                  <hr />
                </div>
                <p>09/10/2022 || 66 points</p>
                <div className="hr">
                  <hr />
                </div>
                <p>10/10/2022 || 105.2 points</p>
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
              <p>1671.2 points • 25 likes</p>
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
