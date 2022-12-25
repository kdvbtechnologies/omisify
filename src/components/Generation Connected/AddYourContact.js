import axios from "axios";

export default function AddYourContact() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [yourWhatsappNumber, setYourWhatsappNumber] = useState("");
  const nbreDePointsListesDeContact = "10";
  const nbreDePersonnesListesDeContact = "1";

  async function Save() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
      data: {
        nbreDePointsListesDeContact,
        nbreDePersonnesListesDeContact,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="add-your-contact">
        <p>Ajouter votre numéro Whatsapp</p>
        <input
          type="number"
          name="yourWhatsappNumber"
          value={yourWhatsappNumber}
          onChange={(e) => setYourWhatsappNumber(e.target.value)}
        />
        <button onClick={Save}>Enregistrer</button>
      </div>
    </>
  );
}
