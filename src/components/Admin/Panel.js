import axios from "axios";
import { useEffect } from "react";

export default function Panel() {
  const commentrecent = localStorage.getItem(
    "https://omisify.com/commentrecent"
  );
  const numbertcommentlife = localStorage.getItem(
    "https://omisify.com/numbertcommentlife"
  );
  const pointtlife = localStorage.getItem("https://omisify.com/pointtlife");
  const gaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  useEffect(() => {
    async function get() {
      await axios
        .get("https://famous-peplum-dove.cyclic.app/api/panel")
        .then((res) => {
          console.log(res);

          const commentrecent = res.data.commentrecent;
          localStorage.setItem(
            "https://omisify.com/commentrecent",
            commentrecent
          );

          const numbertcommentlife = res.data.numbertcommentlife;
          localStorage.setItem(
            "https://omisify.com/numbertcommentlife",
            numbertcommentlife
          );

          const pointtlife = res.data.pointtlife;
          localStorage.setItem("https://omisify.com/pointtlife", pointtlife);

          const gaintlife = res.data.gaintlife;
          localStorage.setItem("https://omisify.com/gaintlife", gaintlife);
        })
        .catch((err) => console.log(err));
    }
    get();
  }, []);
  return (
    <>
      <p>Panneau d'administration</p>
      <p>User :</p>
      <p>Nombre de commentaires : {commentrecent}</p>
      <p>Nombre total de commentaires : {numbertcommentlife}</p>
      <p>Point total depuis le début : {pointtlife}</p>
      <p>Gain : {gaintlife}</p>
    </>
  );
}
