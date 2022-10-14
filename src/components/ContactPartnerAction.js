import { useNavigate } from "react-router-dom";

export default function ContactPartnerAction() {
  const navigate = useNavigate();

  return (
    <>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="contact">
        <div className="contact-title">
          <h1>Service partenaire</h1>
          <p>E-mail : contact@omisify.com</p>
          <p>Whatsapp : +5514991550021</p>
        </div>
      </div>
    </>
  );
}
