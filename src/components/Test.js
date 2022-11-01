import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Partenaire Omisify/Loader";

export default function Test() {
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dated = "aaa";
  const [date, setDate] = useState(dated);

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
  }, [api]);

  useEffect(() => {
    async function get() {
      setDate();
    }
    get();
  }, []);

  return (
    <>
      <p>{date}</p>
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
