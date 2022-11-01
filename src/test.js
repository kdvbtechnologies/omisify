import axios from "axios";

export default function Test() {
  async function Get() {
    await axios
      .get("https://geolocation-db.com/")
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
