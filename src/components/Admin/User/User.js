import axios from "axios";
import { useEffect, useState } from "react";

export default function User() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/`)
        .then((res) => setApi(res.data))
        .catch((err) => console.log(err));
    }
    get();
  }, []);
  return (
    <>
      <h3>Listes des Partenaires et leurs infos</h3>
      {api.map((api) => (
        <>
          <p>{api.name}</p>
          <p>{api.partnername}</p>
          <p>{api.shortname}</p>
          <hr />
          <hr />
        </>
      ))}
    </>
  );
}
