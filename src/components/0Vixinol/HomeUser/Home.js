import NavbarBottomHomeVI from "../Navigation/NavbarBottomHome";
import NavbarTopVI from "../Navigation/NavbarTop";
import HomeUserAppByCategorie from "./HomeUserAppByCategorie";
import Slideshow from "./Slideshow/Slideshow";
import SponsoredApp from "./SponsoredApp/SponsoredApp";

export default function HomeUserVI() {
  return (
    <>
      <NavbarTopVI />

      <Slideshow />

      <SponsoredApp />

      <HomeUserAppByCategorie />

      <div style={{ marginBottom: "130px" }}></div>

      <NavbarBottomHomeVI />
    </>
  );
}
