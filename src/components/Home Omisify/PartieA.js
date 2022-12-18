import go1 from "./img/go1.jpg";
import go2 from "./img/go2.jpg";
import go3 from "./img/go3.jpg";
import go4 from "./img/go4.jpg";

export default function PartieA() {
  return (
    <>
      <div className="person-add-logo-go">
        <div className="overflow">
          <div className="images">
            <img style={{ paddingRight: "10px" }} src={go1} alt="" />
            <img style={{ paddingRight: "10px" }} src={go2} alt="" />
            <img style={{ paddingRight: "10px" }} src={go3} alt="" />
            <img src={go4} alt="" />
          </div>
          {/* images */}
        </div>
        {/* overflow */}
      </div>
      {/* person-add-logo-go */}
    </>
  );
}
