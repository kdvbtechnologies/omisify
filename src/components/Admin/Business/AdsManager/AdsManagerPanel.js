import axios from "axios";
import { useEffect, useState } from "react";

export default function AdsManagerPanel() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/panel/`)
        .then((res) => {
          setApi(res.data);
        })
        .catch((err) => console.log(err));
    }
    get();
  }, []);

  const data = api.filter((filter) => filter.adstatus === "no validate");
  console.log(data);

  return (
    <>
      <p>Ads Manager Panel</p>
    </>
  );
}
