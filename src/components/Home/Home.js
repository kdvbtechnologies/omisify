import PartnerNavigation from "../Partner-Navigation";
import A from "./A";
import B from "./B";
import C from "./C";
import D from "./D";
import Footer from "../Footer";

export default function Home() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div className="home" style={family}>
      <PartnerNavigation />
      <A />
      <B />
      <C />
      <D />
      <Footer />
    </div>
  );
}
