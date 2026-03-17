import { useState } from "react";
import "./CategoryBar.css";
import ForYou from "./ForYou";
import Fashion from "./Fashion";
import Mobiles from "./Mobiles";
import Beauty from "./Beauty";
import Electronics from "./Electronics";

function CategoryBar() {
  const [active, setActive] = useState("for-you");
  function forYou() {
    setActive("for-you");
  }
  function mobiles() {
    setActive("mobiles");
  }
  function fashion() {
    setActive("fashion");
  }

  function beauty() {
    setActive("beauty");
  }

  function electronics() {
    setActive("electronics");
  }

  return (
    <>
      <div className="category">
        <div className="for-you" onClick={forYou}>
          <img
            src="https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/all.svg"
            alt=""
          />
          <p>For You</p>
        </div>
        <div className="mobiles" onClick={mobiles}>
          <img
            src="https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/mobiles.svg"
            alt="Mobiles"
          />
          <p>Mobiles</p>
        </div>

        <div className="fashion" onClick={fashion}>
          <img
            src="https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/fashion.svg"
            alt="Fashion"
          />
          <p>Fashion</p>
        </div>

        <div className="beauty" onClick={beauty}>
          <img
            src="https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/beauty.svg"
            alt="Beauty"
          />
          <p>Beauty</p>
        </div>

        <div className="electronics" onClick={electronics}>
          <img
            src="https://static-assets-web.flixcart.com/apex-static/images/svgs/L1Nav/electronics.svg"
            alt="Electronics"
          />
          <p>Electronics</p>
        </div>
      </div>

      {active === "for-you" && <ForYou />}
      {active === "fashion" && <Fashion />}
      {active === "mobiles" && <Mobiles />}
      {active === "beauty" && <Beauty />}
      {active === "electronics" && <Electronics />}
    </>
  );
}

export default CategoryBar;
