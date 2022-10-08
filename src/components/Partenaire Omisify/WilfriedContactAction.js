import { useNavigate } from "react-router-dom";

export default function WilfriedContactAction() {
  const navigate = useNavigate();

  return (
    <>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="contact">
        <div className="contact-title">
          <h1>Contactez-Nous</h1>
          <p>E-mail : contact@omisify.com</p>
          <p>Whatsapp : +5514991550021</p>
        </div>
      </div>
    </>
  );
}
