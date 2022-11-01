import axios from "axios";
import { useState } from "react";
import Loader from "./Partenaire Omisify/Loader";

export default function Test() {
  const [api, setApi] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function get() {
    await axios
      .get("https://ip.nf/me.json")
      .then((res) => {
        console.log(res.data.ip.country);
        setApi(res.data.ip);

        const countryip = res.data.ip.country;
        if (countryip) {
          localStorage.setItem("https://omisify.com/countryip", countryip);
        }

        const cityip = res.data.ip.city;
        if (cityip) {
          localStorage.setItem("https://omisify.com/cityip", cityip);
        }

        const userip = res.data.ip.ip;
        if (userip) {
          localStorage.setItem("https://omisify.com/userip", userip);
        }
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  }
  get();

  return (
    <>
      {isLoading ? (
        <>
          <p>Chargement des données..</p>
          <Loader />
        </>
      ) : (
        <>
          <p>{api.country}</p>
          <p>{api.city}</p>
          <p>{api.ip}</p>
        </>
      )}
    </>
  );
}
