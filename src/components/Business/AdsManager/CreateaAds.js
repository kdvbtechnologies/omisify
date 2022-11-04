import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../Partenaire Omisify/Loader";
import NavbarB from "../Home/Navigation/NavbarB";

export default function CreateaAds() {
  const [isLoading, setIsLoading] = useState(false);
  const [affiliateprogramname, setAffiliateprogramname] = useState("");
  const adstatus = "Waiting for validation";

  async function Send() {
    setIsLoading(true);
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/panel/add`,
      data: {
        affiliateprogramname,
        adstatus,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavbarB />
      <p>
        Si vous renconter des difficultés à faire votre publicité contacter le
        service client en cliquant{" "}
        <NavLink to="/customer-service-omisify-business">ici</NavLink>
      </p>
      <p>Entrer le nom de la publicité</p>
      <input
        type="text"
        placeholder="Nom du Programme d'affiliation"
        value={affiliateprogramname}
        onChange={(e) => setAffiliateprogramname(e.target.value)}
        name="affiliateprogramname"
      />

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

/*

  const getkindofpeople = "Homme";
  const getaverageage = "13 - 17 ans";
  const getnumberofpeopleadvertising = "0 - 1000 personnes";

  const [affiliatelink, setAffiliatelink] = useState("");
  const [kindofpeople, setKindofpeople] = useState(getkindofpeople);
  const [averageage, setAverageage] = useState(getaverageage);
  const [purposeofadvertising, setPurposeofadvertising] = useState("");
  const [advertisingcountry, setAdvertisingcountry] = useState("");
  const [numberofpeopleadvertising, setNumberofpeopleadvertising] = useState(
    getnumberofpeopleadvertising
  );

  data: {
        affiliateprogramname,
        affiliatelink,
        kindofpeople,
        averageage,
        purposeofadvertising,
        advertisingcountry,
        numberofpeopleadvertising,
     },

*/

/*

Ecrivez votre publicité ici

<p>Entrer le lien d'affiliation</p>
      <input
        type="text"
        placeholder="Lien d'affiliation"
        value={affiliatelink}
        onChange={(e) => setAffiliatelink(e.target.value)}
        name="affiliatelink"
      />

      <p>Sélectionner le genre de personnes</p>
      <select
        id="kindofpeople"
        value={kindofpeople}
        onChange={(e) => setKindofpeople(e.target.value)}
      >
        <option value="Homme">Homme</option>
        <option value="Femme">Femme</option>
        <option value="Homme et Femme">Homme et Femme</option>
      </select>

      <p>Entrer la moyenne d'age</p>
      <select
        value={averageage}
        onChange={(e) => setAverageage(e.target.value)}
        name="averageage"
        id="averageage"
      >
        <option value="13 - 17 ans">13 - 17 ans</option>
        <option value="18 - 25 ans">18 - 25 ans</option>
        <option value="18 - 65 ans+">18 - 65 ans+</option>
        <option value="25 - 30 ans">25 - 30 ans</option>
        <option value="30 - 55 ans">30 - 55 ans</option>
        <option value="65 ans+">65 ans+</option>
      </select>

      <p>Entrer le pays vers lequel serait orienté votre publicité</p>
      <input
        type="text"
        placeholder="Pays"
        value={advertisingcountry}
        onChange={(e) => setAdvertisingcountry(e.target.value)}
        name="advertisingcountry"
      />

      <p>
        Entrer le but que votre entreprise souhaite atteindre à travers cette
        publicité; Ce qu'attend votre entreprise de la part des Influenceurs,
        des Non-Influenceurs et des Influenceurs Vidéos
      </p>
      <input
        type="text"
        placeholder="Entrer le but souhaité"
        value={purposeofadvertising}
        onChange={(e) => setPurposeofadvertising(e.target.value)}
        name="purposeofadvertising"
      />

      <p>
        Entrer le nombres de personnes que vous souhaiter touchés avec cette
        publicité
      </p>
      <select
        value={numberofpeopleadvertising}
        onChange={(e) => setNumberofpeopleadvertising(e.target.value)}
        name="numberofpeopleadvertising"
        id="numberofpeopleadvertising"
      >
        <option value="0 - 1000 personnes">0 - 1000 personnes</option>
        <option value="1000 - 10.000 personnes">1000 - 10.000 personnes</option>
      </select>

*/
