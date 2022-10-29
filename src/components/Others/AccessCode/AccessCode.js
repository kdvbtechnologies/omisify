import axios from "axios";
import Loader from "../../Partenaire Omisify/Loader";

export default function AccessCode() {
  const [accesscode, setAccesscode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Create(e) {
    setIsLoading(true);
    e.preventDefault();
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
      data: {
        accesscode,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <p>
        Le code d'accès est indispensable pour accéder aux fonctionalités en
        cours de développement
      </p>
      <p>Créer un code d'accès à 4 chiffres</p>
      <input
        type="number"
        placeholder="__ __ __ __"
        value={accesscode}
        onChange={(e) => setAccesscode(e.target.value)}
        name="accesscode"
      />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button onClick={Create}>Créer</button>
        </>
      )}
    </>
  );
}
