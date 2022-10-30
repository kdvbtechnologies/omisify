import axios from "axios";

export default function ValidateCalculM10k() {
  const pointtm10klife = localStorage.getItem(
    "https://omisify.com/resultpointtm10klife"
  );

  const gaintlife = localStorage.getItem("https://omisify.com/resultgaintlife");

  async function Validate() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatem10k/634c8ab0f59d4e9994f83884`,
      data: {
        pointtm10klife,
        gaintlife,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="all">
      <button onClick={Validate}>Valider</button>
    </div>
  );
}
