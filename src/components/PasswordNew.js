export default function PasswordNew() {
  const userId = localStorage.getItem("htpps://omisfy.com/userId");
  const [password, setPassword] = useState("");

  axios({
    method: put,
    url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
    data: {
      password,
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return (
    <>
      <h1>Créer un nouveau mot de passe</h1>
      <input
        type="text"
        placeholder="Nouveau mot de passe"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        name="password"
      />
      <button>Valider</button>
    </>
  );
}
