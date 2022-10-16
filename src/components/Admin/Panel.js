import axios from "axios";
import { useEffect } from "react";

export default function Panel() {
  useEffect(() => {
    async function get() {
      await axios
        .get("https://famous-peplum-dove.cyclic.app/api/panel/")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    get();
  }, []);
  return (
    <>
      <p>Panneau d'administration</p>
    </>
  );
}
