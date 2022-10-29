import { useState } from "react";
import Loader from "../Partenaire Omisify/Loader";

export default function D() {
  const [isLoading, setIsLoading] = useState(false);

  async function Next() {
    setIsLoading(true);
    window.location = "/influencer";
  }

  return (
    <>
      <div className="align-part-d">
        <div className="part-d">
          <div className="title">
            <p>Rémunération</p>
          </div>
          <li>1 Commentaire = 1 point</li>
          <li>1 E10k = 0.7 point</li>
          <li>1 E-mail = 0.3 point</li>
          <li>1 Like C = 0.01 point</li>
          <li>1 Like P = 0.01 point</li>
          <li>1 M10k = 0.7 point</li>
          <li>1 Message = 0.3 point</li>
          <li>1 MWI = 5 points</li>
          <li>1 Publication = 1 point</li>
          <li>1 PWI = 5 points</li>
          <li>1 PWP = 0.1 point</li>
          <li>1000 Points = 1€</li>
          <p>
            N.B : Tous les Partenaires Omisify retirent leur rémunération à
            n'importe quel moment
          </p>
          <div className="go-down-i">
            <i>
              Transformez un simple complément de revenu en succès incroyable
            </i>
          </div>
        </div>
      </div>

      <div className="see-more">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <button onClick={Next}>Voir plus</button>
          </>
        )}
      </div>
    </>
  );
}
