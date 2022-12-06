import NavbarBottomHomeVI from "../Navigation/NavbarBottomHome";
import NavbarTopVI from "../Navigation/NavbarTop";
import Slideshow from "./Slideshow/Slideshow";

export default function HomeUserVI() {
  return (
    <>
      <NavbarTopVI />

      <Slideshow />

      <NavbarBottomHomeVI />
    </>
  );
}
