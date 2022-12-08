import NavbarBottomHomeVI from "../Navigation/NavbarBottomHome";
import NavbarTopVI from "../Navigation/NavbarTop";
import DownloadApp from "./DownloadApp";
import MagasinDapplication from "./MagasinDapplication";
import ProfessionnalTools from "./ProfessionnalTools";
import RedigerUnAvisHomeUser from "./RedigerUnAvisHomeUser";
import SearchOnInternet from "./SearchOnInternet";
import Slideshow from "./Slideshow/Slideshow";
import SponsoredApp from "./SponsoredApp/SponsoredApp";
import WorkOnInternet from "./WorkOnInternet";

export default function HomeUserVI() {
  return (
    <>
      <NavbarTopVI />

      <Slideshow />

      <WorkOnInternet />

      <SponsoredApp />

      <SearchOnInternet />

      <DownloadApp />

      <ProfessionnalTools />

      <MagasinDapplication />

      <RedigerUnAvisHomeUser />

      <div style={{ marginBottom: "130px" }}></div>

      <NavbarBottomHomeVI />
    </>
  );
}
