import axios from "axios";

export default function Test() {
  async function Get() {
    await axios
      .get("https://ip.nf/me.json")
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
