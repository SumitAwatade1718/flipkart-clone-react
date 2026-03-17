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
          For You
        </div>
        <div className="mobiles" onClick={mobiles}>
          Mobiles
        </div>
        <div className="fashion" onClick={fashion}>
          Fashion
        </div>

        <div className="beauty" onClick={beauty}>
          Beauty
        </div>

        <div className="electronics" onClick={electronics}>
          Electronics
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
