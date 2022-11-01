import axios from "axios";

export default function Test() {
  async function Get() {
    await axios
      .get(
        "https://geolocation-db.com/json/c5544c60-581f-11ed-b302-a99a705cf413/"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <button onClick={Get}>Get Ip</button>
    </>
  );
}
