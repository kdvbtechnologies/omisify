import axios from "axios";
import { useEffect, useState } from "react";

export default function Test() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function get() {
      await axios
        .get("https://ip.nf/me.json")
        .then((res) => {
          console.log(res.data.ip);
          setApi(res.data.ip);
        })
        .catch((err) => console.log(err));
    }
    get();
  }, []);

  return (
    <>
      {api.map((api) => (
        <>
          <p>{api.country}</p>
          <p>{api.city}</p>
          <p>{api.ip}</p>
        </>
      ))}
    </>
  );
}
