import PartnerNavigation from "../Partner-Navigation";
import Bonus from "./AfterMore/Bonus/Bonus";
import A from "./A";
import B from "./B";
import C from "./C";
import D from "./D";
import E from "./E";
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
      <E />
      <Bonus />
      <Footer />
    </div>
  );
}
