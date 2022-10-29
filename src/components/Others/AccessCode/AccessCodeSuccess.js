import { useNavigate } from "react-router-dom";

export default function AccessCodeSuccess() {
  const navigate = useNavigate();

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Arial, Helvetica, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="access-code-success">
        <div className="code">
          <p>3524</p>
        </div>
        <p>
          3524 est votre code d'accès aux fonctionnalités en cours de
          développement
        </p>
      </div>
    </div>
  );
}
