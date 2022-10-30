import axios from "axios";
import { useEffect } from "react";

export default function CalculM10k() {
  const userId = localStorage.getItem("https://omisify.com/userId");

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const pointm10klife = res.data.pointm10klife;
          if (pointm10klife) {
            localStorage.setItem(
              "https://omisify.com/pointm10klife",
              pointm10klife
            );
          }
        });
    }
    get();
  });
  return <></>;
}
