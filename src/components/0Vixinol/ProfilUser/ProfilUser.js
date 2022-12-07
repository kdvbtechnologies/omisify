import BackbtnProfilUser from "../Back/BackbtnProfilUser";
import NavbarBottomProfilVI from "../Navigation/NavbarBottomProfil";

export default function ProfilUserVI() {
  return (
    <>
      <BackbtnProfilUser />

      <div className="profil-user-vi">
        <div className="image">
          <p>K</p>
        </div>

        <p>Karnic Patreon</p>
        <p>France</p>
        <p>Paris</p>

        <p>Genre : </p>
        <p>Homme</p>
        <p>Age :</p>
        <p>18 ans</p>
        <p>Date de naissance : </p>
        <p>10/04/2004</p>
        <p>E-mail :</p>
        <p>karnicpatreon@donazia.com</p>
      </div>

      <NavbarBottomProfilVI />
    </>
  );
}
