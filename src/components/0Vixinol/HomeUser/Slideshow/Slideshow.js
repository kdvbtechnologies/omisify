import { useState } from "react";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.png";

export default function Slideshow() {
  const [verify1, setVerify1] = useState(true);
  const [verify2, setVerify2] = useState(false);
  const [verify3, setVerify3] = useState(false);

  function Image1() {
    setVerify1(true);
    setVerify2(false);
    setVerify3(false);
  }

  function Image2() {
    setVerify1(false);
    setVerify2(true);
    setVerify3(false);
  }

  function Image3() {
    setVerify1(false);
    setVerify2(false);
    setVerify3(true);
  }

  return (
    <>
      <div className="slideshow">
        {verify1 && (
          <div className="images">
            <img src={img1} alt="image" />
          </div>
        )}

        {verify2 && (
          <div className="images">
            <img src={img2} alt="image" />
          </div>
        )}

        {verify3 && (
          <div className="images">
            <img src={img3} alt="image" />
          </div>
        )}
      </div>
      <div className="after-slideshow">
        <div className="image" onClick={Image1}>
          <img
            style={{ border: verify1 && "1px solid red" }}
            src={img1}
            alt="image"
          />
        </div>
        <div className="image" onClick={Image2}>
          <img
            style={{ border: verify2 && "1px solid red" }}
            src={img2}
            alt="image"
          />
        </div>
        <div className="image" onClick={Image3}>
          <img
            style={{ border: verify3 && "1px solid red" }}
            src={img3}
            alt="image"
          />
        </div>
      </div>
    </>
  );
}
