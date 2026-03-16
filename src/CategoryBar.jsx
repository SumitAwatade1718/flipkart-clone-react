import { useState } from "react";
import "./CategoryBar.css";

function CategoryBar() {
  const [active, setActive] = useState("for-you");
  function forYou() {
    setActive("for-you");
  }

  function fashion() {
    setActive("fashion");
  }

  function mobiles() {
    setActive("mobiles");
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

        <div className="fashion" onClick={fashion}>
          Fashion
        </div>

        <div className="mobiles" onClick={mobiles}>
          Mobiles
        </div>

        <div className="beauty" onClick={beauty}>
          Beauty
        </div>

        <div className="electronics" onClick={electronics}>
          Electronics
        </div>
      </div>

      {active === "for-you" && (
        <div className="for-you-content">
          <h2>Recommended Products</h2>
        </div>
      )}

      {active === "fashion" && (
        <div className="fashion-content">
          <h2>Fashion Products</h2>
        </div>
      )}

      {active === "mobiles" && (
        <div className="mobiles-content">
          <h2>Mobile Phones</h2>
        </div>
      )}

      {active === "beauty" && (
        <div className="beauty-content">
          <h2>Beauty Products</h2>
        </div>
      )}

      {active === "electronics" && (
        <div className="electronics-content">
          <h2>Electronic Items</h2>
        </div>
      )}
    </>
  );
}

export default CategoryBar;
