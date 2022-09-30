import { useNavigate } from "react-router-dom";

export default function WilfriedHistoOne() {
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
      <div className="historical-active">
        <div className="historic-active">
          <div className="historic-title">
            <p>Première publication Omisify</p>
          </div>
          <div className="less-important">
            <p>Programme d'Affiliation : Devenir Partenaire Omisify</p>
            <p>
              lien de la publication :{" "}
              <a
                href="https://m.facebook.com/story.php?story_fbid=pfbid0JNNnJMfwGZ37MiNKqz5kM4a755DGdqsXsncG5qjBVNeAfUA4FoR5jT8oynhaCXj9l&id=101177059160028&eav=AfZqA4Nn3jT97rWuIh1Y9W7AvFpP7HrIwKThnMpMseTP1xtX7zNbhPOQfZJSuK4yhnQ&fs=0&focus_composer=0&m_entstream_source=timeline&paipv=0"
                target="_blank"
                rel="noreferrer"
              >
                https://facebook.com/post
              </a>
            </p>
            <p>Date : 27/09/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>Publication : 1 point</p>
                <p>221 likes : 0.0221€</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 29/09/2022, 21:56 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
