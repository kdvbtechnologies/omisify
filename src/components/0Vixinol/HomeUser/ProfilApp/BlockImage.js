import imageapp1 from "../../img/imageapp1.jpg";
import imageapp2 from "../../img/imageapp2.jpg";
import imageapp3 from "../../img/imageapp3.jpg";
import imageapp4 from "../../img/imageapp4.jpg";
import imageapp5 from "../../img/imageapp1.jpg";
import imageapp6 from "../../img/imageapp2.jpg";
import imageapp7 from "../../img/imageapp3.jpg";
import imageapp8 from "../../img/imageapp4.jpg";
import imageapp9 from "../../img/imageapp3.jpg";
import imageapp10 from "../../img/imageapp4.jpg";

export default function BlockImage() {
  return (
    <>
      <div className="block-image">
        <div className="images">
          <img src={imageapp1} alt="image App 1" />
          <img src={imageapp2} alt="image App 2" />
          <img src={imageapp3} alt="image App 3" />
          <img src={imageapp4} alt="image App 4" />
          <img src={imageapp5} alt="image App 5" />
          <img src={imageapp6} alt="image App 6" />
          <img src={imageapp7} alt="image App 7" />
          <img src={imageapp8} alt="image App 8" />
          <img src={imageapp9} alt="image App 9" />
          <img src={imageapp10} alt="image App 10" />
        </div>
      </div>
    </>
  );
}
