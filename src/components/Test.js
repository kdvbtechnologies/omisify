import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Partenaire Omisify/Loader";

export default function Test() {
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get("https://ip.nf/me.json")
        .then((res) => {
          console.log(res.data.ip);
          setApi(res.data.ip);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, []);

  const output = api.map((x) => x.data.ip);
  console.log(output);

  const output2 = api.map((x) => x);
  console.log(output2);

  return (
    <>
      <p>Chargement des données..</p>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {api.map((api, index) => {
            return (
              <div key={index}>
                <p>{api.country}</p>
                <p>{api.city}</p>
                <p>{api.ip}</p>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
