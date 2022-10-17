import { useState } from "react";
import LoginNav from "../Auth/LoginNav";
import Loader from "../Partenaire Omisify/Loader";

export default function Update() {
  const [isLoading, setIsLoading] = useState(false);

  async function Download() {
    setIsLoading(true);
    window.location.reload();
  }

  return (
    <>
      <LoginNav />
      <p>Mise à jour</p>
      <p>Obtenir la dernière mise à jour</p>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button onClick={Download}>Télécharger</button>
        </>
      )}
    </>
  );
}
