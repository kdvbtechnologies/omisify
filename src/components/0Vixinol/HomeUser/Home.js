import NavbarBottomHomeVI from "../Navigation/NavbarBottomHome";
import NavbarTopVI from "../Navigation/NavbarTop";
import Slideshow from "./Slideshow/Slideshow";
import Sponsoriser from "./Sponsoriser/Sponsoriser";

export default function HomeUserVI() {
  return (
    <>
      <NavbarTopVI />

      <Slideshow />

      <Sponsoriser />

      <NavbarBottomHomeVI />
    </>
  );
}
