import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";
import Back from "../../Back/Back";

export default function CreateaAd() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [advertisementname, setAdvertisementname] = useState("");
  const adstatus = "Waiting for validation";
  const [calltoaction, setcalltoaction] = useState("");

  const [otherelementscalltoaction, setOtherelementscalltoaction] =
    useState("");

  const [purposeofadvertising, setpurposeofadvertising] = useState("");

  // infos of company
  const userIdbusiness = localStorage.getItem(
    "https//omisify.com/userIdbusiness"
  );
  const namebusiness = "Rasivy Company INC";
  const shortnamebusiness = "Rasivy";
  const principalnamebusiness = "Rasivy Company";

  async function Create() {
    setIsLoading(true);

    localStorage.setItem(
      "https://omisify.com/advertisementname",
      advertisementname
    );

    localStorage.setItem(
      "https://omisify.com/purposeofadvertising",
      purposeofadvertising
    );

    localStorage.setItem("https://omisify.com/calltoaction", calltoaction);

    localStorage.setItem(
      "https://omisify.com/otherelementscalltoaction",
      otherelementscalltoaction
    );

    if (userIdbusiness) {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_OMISIFY_API}/api/panel/add`,
        data: {
          advertisementname,
          adstatus,
          purposeofadvertising,
          calltoaction,
          otherelementscalltoaction,

          // infos of company
          userIdbusiness,
          namebusiness,
          shortnamebusiness,
          principalnamebusiness,
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      window.location = "/signup-first";
    }
  }

  return (
    <>
      <div className="stats-big-titleb">
        <p>Cr??er une publicit??</p>
      </div>

      <div onClick={() => navigate(-1)}>
        <Back />
      </div>

      <div className="create-a-ads">
        <div className="title">
          <p>Cr??er une publicit??</p>
        </div>

        <p>
          Si vous renconter des difficult??s ?? cr??er votre publicit?? contacter le
          Service client en cliquant{" "}
          <NavLink to="/customer-service-omisify-business">ici</NavLink>
        </p>
        <div className="a">
          <p>Entrer le nom de la publicit??</p>
          <input
            type="text"
            placeholder="Nom de la publicit??"
            value={advertisementname}
            onChange={(e) => setAdvertisementname(e.target.value)}
            name="advertisementname"
          />
        </div>

        <div className="a">
          <p>
            Entrer le but de la publicit??, ce qu'attend votre entreprise
            (facultatif)
          </p>
          <input
            type="text"
            placeholder="But de la publicit??"
            onChange={(e) => setpurposeofadvertising(e.target.value)}
            value={purposeofadvertising}
            name="purposeofadvertising"
          />
        </div>

        <p>s??lectionner votre appel ?? l'action</p>
        <select
          name="calltoaction"
          value={calltoaction}
          onChange={(e) => setcalltoaction(e.target.value)}
        >
          <option value="Visiter le site">Visiter le site</option>
          <option value="T??l??charger l'application">
            T??l??charger l'application
          </option>
          <option value="Contacter l'entreprise">Contacter l'entreprise</option>
          <option value="Visiter le magasin">Visiter le magasin</option>
        </select>

        <div className="a">
          <p>
            Ajouter d'autre(s) ??l??ment(s) li??(s) ?? l'appel ?? l'action
            (facultatif)
          </p>
          <input
            type="text"
            placeholder="Autre(s) ??l??ment(s)"
            onChange={(e) => setOtherelementscalltoaction(e.target.value)}
            value={otherelementscalltoaction}
            name="otherelementscalltoaction"
          />
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <button onClick={Create}>Cr??er</button>
          </>
        )}
      </div>
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
Ecrivez votre publicit?? ici
Pr??sentation de la publicit??

<p>Entrer le lien d'affiliation</p>
      <input
        type="text"
        placeholder="Lien d'affiliation"
        value={affiliatelink}
        onChange={(e) => setAffiliatelink(e.target.value)}
        name="affiliatelink"
      />

      <p>S??lectionner le genre de personnes</p>
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

      <p>Entrer le pays vers lequel serait orient?? votre publicit??</p>
      <input
        type="text"
        placeholder="Pays"
        value={advertisingcountry}
        onChange={(e) => setAdvertisingcountry(e.target.value)}
        name="advertisingcountry"
      />

      <p>
        Entrer le but que votre entreprise souhaite atteindre ?? travers cette
        publicit??; Ce qu'attend votre entreprise de la part des Influenceurs,
        des Non-Influenceurs et des Influenceurs Vid??os
      </p>
      <input
        type="text"
        placeholder="Entrer le but souhait??"
        value={purposeofadvertising}
        onChange={(e) => setPurposeofadvertising(e.target.value)}
        name="purposeofadvertising"
      />

      <p>
        Entrer le nombres de personnes que vous souhaiter touch??s avec cette
        publicit??
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
