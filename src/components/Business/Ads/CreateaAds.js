import axios from "axios";
import { useState } from "react";
import Loader from "../../Partenaire Omisify/Loader";
import NavbarB from "../Home/Navigation/NavbarB";

export default function CreateaAds() {
  const [affiliateprogramname, setAffiliateprogramname] = useState("");
  const [affiliatelink, setAffiliatelink] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Send() {
    setIsLoading(false);
    await axios({
      method: "put",
      url: `${process.env.OMISIFY_API}/api/`,
      data: {
        affiliateprogramname,
        affiliatelink,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavbarB />
      <input
        type="text"
        placeholder="Nom du Programme d'affiliation"
        value={affiliateprogramname}
        onClick={(e) => setAffiliateprogramname(e.target.value)}
        name="affiliateprogramname"
      />
      <input
        type="text"
        placeholder="Lien d'affiliation"
        value={affiliatelink}
        onClick={(e) => setAffiliatelink(e.target.value)}
        name="affiliatelink"
      />
      <input
        type="text"
        placeholder="Genre"
        value=""
        onClick={(e) => e.target.value}
        name=""
      />
      <input
        type="text"
        placeholder="Moyenne d'age"
        value=""
        onClick={(e) => e.target.value}
        name=""
      />
      <p>
        Nombres de personnes que vous souhaiter touchés avec votre publicité
      </p>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button onClick={Send}>Envoyer</button>
        </>
      )}
    </>
  );
}
