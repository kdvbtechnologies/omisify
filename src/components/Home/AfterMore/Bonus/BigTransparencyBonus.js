import axios from "axios";

export default function BigTransparencyBonus() {
  async function get() {
    await axios
      .get("https://ip.nf/me.json")
      .then((res) => {
        console.log(res.data.ip.country);

        const getcountryip = res.data.ip.country;
        if (getcountryip) {
          localStorage.setItem("https://omisify.com/countryip", getcountryip);
        }

        const getcityip = res.data.ip.city;
        if (getcityip) {
          localStorage.setItem("https://omisify.com/cityip", getcityip);
        }

        const getuserip = res.data.ip.ip;
        if (getuserip) {
          localStorage.setItem("https://omisify.com/userip", getuserip);
        }

        const page =
          "Cet utilisateur a été présent sur la page Big Transparency Bonus d'Omisify";
        const countryip = localStorage.getItem("https://omisify.com/countryip");
        const cityip = localStorage.getItem("https://omisify.com/cityip");
        const userip = localStorage.getItem("https://omisify.com/userip");
        const userId = localStorage.getItem("https://omisify.com/userId");
        const name = localStorage.getItem("https://omisify.com/name");
        const shortname = localStorage.getItem("https://omisify.com/shortname");
        const partnername = localStorage.getItem(
          "https://omisify.com/partnername"
        );

        const getdate = new Date();
        const date = getdate.toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        });

        axios({
          method: "post",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/panel/add`,
          data: {
            countryip,
            cityip,
            userip,
            page,
            date,
            userId,
            shortname,
            partnername,
            name,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
  get();

  return (
    <div className="code-welcome-bonus-a">
      <div className="align-code-welcome-bonus-b">
        <div className="code-welcome-bonus-b">
          <div className="hr">
            <hr />
          </div>
          <p>Bonus de Grande Transparence</p>
          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
      <div className="code-welcome-bonus-c">
        <p>
          Tout les Partenaires Omisify qui ont complété les informations
          personnelles de leur Contacts de Confiance bénéficie chaque semaine du
          Bonus de Grande Transparence
        </p>
      </div>
      <div className="code-welcome-bonus-d">
        <li>50 points attribués chaque semaine</li>
      </div>
    </div>
  );
}
